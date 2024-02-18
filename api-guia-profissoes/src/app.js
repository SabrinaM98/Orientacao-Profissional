import express from 'express';
import cors from 'cors';
import { cadastroProfissao , atualizarProfissao, selectCardsProfissao, selectListaNomeProfissao, selectInfosEspecificas, selectInfosProfissao, selectSkillsProfissao, cadastroInfoEspecifica, vinculoInfoEspecificaProfissao, cadastroNoticia, selectNoticias, excluirProfissao, checkProfissao, checkSkill } from './Controler/Profissoes.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send("ok")
})

app.get('/cards_profissoes', async (req, res) => {
    let infors_cards =  await selectCardsProfissao();
    res.json(infors_cards);
})

app.get('/noticias', async (req, res) => {
    let noticias =  await selectNoticias();
    res.json(noticias);
})

app.post('/profissoes', async (req, res) => {

    try {
        const { search } = req.body;

        if (!search) {
            return res.status(400).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let profissoes =  await selectListaNomeProfissao(search);
        res.json(profissoes);
    } catch (error) {
        console.error('Erro ao buscar profissões:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.post('/infos_especificas', async (req, res) => {

    try {
        const { search } = req.body;

        if (!search) {
            return res.status(400).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let infos =  await selectInfosEspecificas(search);
        res.json(infos);
    } catch (error) {
        console.error('Erro ao buscar informações:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.post('/infos_profissao', async(req, res) => {
    try{
        const { id_profissao } = req.body;

        if (!id_profissao) {
            return res.status(400).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let info_profissao =  await selectInfosProfissao(id_profissao);
        res.json(info_profissao);
    }catch(error){
        console.error('Erro ao buscar informações da profissão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.post('/skills_profissao', async(req, res) => {
    try{
        const { id_profissao } = req.body;

        if (!id_profissao) {
            return res.status(400).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let skills_profissao =  await selectSkillsProfissao(id_profissao);
        res.json(skills_profissao);
    }catch(error){
        console.error('Erro ao buscar skills da profissão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.post('/excluirProfissao', async(req, res) => {

    try{
        const { id_profissao } = req.body;

        if (!id_profissao) {
            return res.status(400).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let result =  await checkProfissao(id_profissao);

        if(result.length == 0){

            try{
                let result_delete =  excluirProfissao(req.body);
                res.json(result_delete);
            }catch(e){
                console.error('Erro ao excluir profissão:', error);
                res.status(500).json({ error: 'Erro interno do servidor' });
            }

        }else{
            return res.status(400).json({ error: 'Profissão possui skills/habilidades vinculadas' });
        }
        
    }catch(error){
        console.error('Erro ao excluir profissão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

})



app.post('/check_profissao', async(req, res) => {
    try{
        const { id_profissao } = req.body;

        if (!id_profissao) {
            return res.status(400).json({ error: 'Parâmetro de pesquisa não fornecido' });
        }

        let result =  await checkProfissao(id_profissao);
        res.json(result);
    }catch(error){
        console.error('Erro ao buscar informações da profissão:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})

app.post('/cadastro_profissoes', (req, res) => {
    console.log(req.body);
    cadastroProfissao(req.body)
    res.json({
        "statusCode": 200
    })
})

app.post('/cadastro_info_especifica', (req, res) => {
    console.log(req.body);
    cadastroInfoEspecifica(req.body)
    res.json({
        "statusCode": 200
    })
})

app.post('/vinculo_skill_profissao', (req, res) => {
    console.log(req.body);
    vinculoInfoEspecificaProfissao(req.body)
    res.json({
        "statusCode": 200
    })
})

app.post('/cadastro_noticia', (req, res) => {
    console.log(req.body);
    cadastroNoticia(req.body)
    res.json({
        "statusCode": 200
    })
})

app.put('/atualizar_profissoes', (req, res) => {

    if(req.body && !req.body.id){
        res.json({
            "statusCode": "400",
            "msg": "Você precisa informar um id"
        })        
    }else{
        console.log(req.body);
        atualizarProfissao(req.body)
        res.json({
            "statusCode": 200
        })
    }

})

app.listen(port, () => {
    console.log(`Servidor API rodando na porta ${port}`);
  });