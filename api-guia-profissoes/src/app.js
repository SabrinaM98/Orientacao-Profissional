import express from 'express';
import cors from 'cors';
import { cadastroProfissao , atualizarProfissao, selectCardsProfissao, selectSkills, selectListaNomeProfissao, selectInfosProfissao, selectSkillsProfissao, cadastroInfoEspecifica, vinculoInfoEspecificaProfissao, cadastroNoticia, selectNoticiasCRUD, excluirProfissao, excluirSkill, checkProfissao, checkSkill, excluirNoticia, excluirVinculoSkillProfissao, atualizarNoticia, atualizarInfoEspecifica, selectProfissoesCRUD, selectInfosEspecificasCRUD, selectVinculoSkillProfissaoCRUD } from './Controler/Profissoes.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

//Documentação de referência de 'HTTP status codes' para cada tipo de requisição(PUT, POST e etc)
//https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3

/** GUIA DE ROTAS
* HTTP STATUS 200 -> OK -> retorna body c/ atualização
* HTTP STATUS 201 -> Created -> retorna uma mensagem de sucesso e/ou link p/ a entidade criada
* HTTP STATUS 204 -> (No Context) -> requisição feita com sucesso mas não retorna body(contexto)
* HTTP STATUS 412 -> Precondition Failed -> Um ou mais parâmetros faltantes
*/

/** 
 * ROTAS DE GET (TRAZER UM OU VÁRIOS REGISTROS/ENTIDADES DO BANCO)
*/

app.get('/', (req, res) => {
    res.send(`Welcome ${req.query.name != null ? req.query.name : ''}`)
})

app.get('/cards-profissoes', async (req, res) => {
    let infors_cards =  await selectCardsProfissao();
    res.json(infors_cards);
})

app.get('/skills', async (req, res) => {
    let skills =  await selectSkills();
    res.json(skills);
})

app.get('/noticias', async (req, res) => {
    let noticias =  await selectNoticiasCRUD();
    if(req.query.limit != null){
        res.json(noticias.slice(0, req.query.limit));
    }else{
        res.json(noticias);
    }
})

app.get('/profissoes/by-search/:search', async (req, res) => { //nova rota do data search

    try{

        if(!req.params.search){
            return res.status(412).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let profissoes =  await selectListaNomeProfissao(req.params.search);
        res.json(profissoes);

    }catch(error){
        console.error('Erro ao buscar profissões:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.get('/profissoes/:idProfissao', async(req, res) => { //nova rota do infos_profissao

    try{
        const id_profissao = req.params.idProfissao;

        if(!id_profissao){
            return res.status(412).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let info_profissao =  await selectInfosProfissao(id_profissao);
        res.json(info_profissao);

    }catch(error){
        console.error('Erro ao buscar informações da profissão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.get('/profissoes/skills/:idProfissao', async(req, res) => { //nova rota do skills_profissao

    try{
        const id_profissao  = req.params.idProfissao;

        if(!id_profissao){
            return res.status(412).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let skills_profissao =  await selectSkillsProfissao(id_profissao);
        res.json(skills_profissao);

    }catch(error){
        console.error('Erro ao buscar skills da profissão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

/*
* ROTAS DE POST (CRIAR UM REGISTRO/ENTIDADE NO BANCO)
*/

app.post('/profissoes', (req, res) => {
    console.log(req.body);
    cadastroProfissao(req.body)
    res.json({
        "statusCode": 201,
        "statusMessage": "Created successfully" //deveria retornar o body da entidade criada mas preguiça de fazer um select só para isso :(
    })
})

app.post('/skills', (req, res) => {
    console.log(req.body);
    cadastroInfoEspecifica(req.body)
    res.json({
        "statusCode": 201,
        "statusMessage": "Created successfully"
    })
})

app.post('/vinculo-skill-profissao', (req, res) => {
    console.log(req.body);
    vinculoInfoEspecificaProfissao(req.body)
    res.json({
        "statusCode": 201,
        "statusMessage": "Created successfully" 
    })
})

app.post('/noticias', (req, res) => {
    console.log(req.body);
    cadastroNoticia(req.body)
    res.json({
        "statusCode": 201,
        "statusMessage": "Created successfully" 
    })
})

/*
* ROTAS DE PUT (ATUALIZAR UM REGISTRO/ENTIDADE NO BANCO)
*/

app.put('/profissoes/:idProfissao', (req, res) => {

    if(req.body && !req.params.idProfissao){
        res.json({
            "statusCode": "412",
            "msg": "Missing ID parameter"
        })        
    }else{
        atualizarProfissao(req.body)
        res.json({
            "statusCode": 204
        })
    }
})

app.put('/skills/:idSkill', (req, res) => {

    if(req.body && !req.params.idSkill){
        res.json({
            "statusCode": "412",
            "msg": "Missing ID parameter"
        })        
    }else{
        atualizarInfoEspecifica(req.body)
        res.json({
            "statusCode": 204
        })
    }
})

app.put('/noticias/:idNoticia', (req, res) => {

    if(req.body && !req.params.idNoticia){
        res.json({
            "statusCode": "412",
            "msg": "Missing ID parameter"
        })        
    }else{
        atualizarNoticia(req.body)
        res.json({
            "statusCode": 204
        })
    }
})

/**
 * ROTAS DE DELETE (EXCLUIR REGISTRO/ENTIDADE DO BANCO)
*/

app.delete('/profissoes/:idProfissao', async(req, res) => {

    try{
        const id_profissao = req.params.idProfissao;

        if(!id_profissao){
            return res.status(412).json({ error: 'Parâmetro de id não fornecido' });
        }

        let result =  await checkProfissao(id_profissao);

        if(result.length == 0){
            await excluirProfissao(req.body);
            res.json({
                "statusCode": 204
            })
        }else{
            return res.status(400).json({ error: 'Profissão possui skills/habilidades vinculadas' });
        }
        
    }catch(error){
        console.error('Erro ao excluir profissão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.delete('/skills/:idSkill', async(req, res) => {

    try{
        const id_skill = req.params.idSkill;

        if(!id_skill){
            return res.status(412).json({ error: 'Parâmetro de id não fornecido' });
        }

        let result =  await checkSkill(id_skill);

        if(result.length == 0){
            await excluirSkill(req.body);
            res.json({
                "statusCode": 204
            })
        }else{
            return res.status(400).json({ error: 'Skill/Habilidade está vinculada à profissões existentes' });
        }
        
    }catch(error){
        console.error('Erro ao excluir skill:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.delete('/vinculo-skill-profissao/:idVinculo', async(req, res) => {

    try{
        const id = req.params.idVinculo;

        if(!id_noticia){
            return res.status(412).json({ error: 'Parâmetro de id não fornecido' });
        }else{
            await excluirVinculoSkillProfissao(id);
            res.json({
                "statusCode": 204
            })
        }
    }catch(error){
        console.error('Erro ao excluir vínculo skill-profissão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.delete('/noticias/:idNoticia', async(req, res) => {

    try{
        const id_noticia = req.params.idNoticia;

        if(!id_noticia){
            return res.status(412).json({ error: 'Parâmetro de id não fornecido' });
        }else{
            await excluirNoticia(id_noticia);
            res.json({
                "statusCode": 204
            })
        }
    }catch(error){
        console.error('Erro ao excluir notícia:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.listen(port, () => {
    console.log(`Servidor API rodando na porta ${port}`);
});