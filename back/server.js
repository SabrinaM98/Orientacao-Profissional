const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./db_usuarios/baseusuarios.sqlite");

app.get('/api/usuarios', (req, res) => {
    const query = 'SELECT * FROM tb_usuarios'; 
  
    db.all(query, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados.' });
      } else {
        if (data.length === 0) {
          res.status(404).json({ message: 'Nenhum dado encontrado.' });
        } else {
          res.json(data);
        }
      }
    });
  });

  // Rota para o campo de pesquisa na Hero_section. Aqui lista as porfissoes cadastradas no banco
  app.get('/api/profissoes', (req, res) => {

    const { search } = req.query;
    const query = `SELECT * FROM tb_profissoes WHERE nome_profissao LIKE '%${search}%'`;
  
    db.all(query, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados.' });
      } else {
        if (data.length === 0) {
          res.status(404).json({ message: 'Nenhum dado encontrado.' });
        } else {
          res.json(data);
        }
      }
    });
  });

  
  app.get('/api/cards_profissoes', (req, res) => {
    const query = `SELECT id, nome_profissao, descricao_curta, imagem FROM tb_profissoes WHERE descricao_curta IS NOT NULL`;
  
    db.all(query, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados.' });
      } else {
        if (data.length === 0) {
          res.status(404).json({ message: 'Nenhum dado encontrado.' });
        } else {
          res.json(data);
        }
      }
    });
  });

  app.get('/api/infos_profissao', (req, res) => {

    const { id } = req.query;
    const query = `SELECT id, nome_profissao, descricao_longa, imagem FROM tb_profissoes WHERE id = ${id}`;
  
    db.all(query, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados.' });
      } else {
        if (data.length === 0) {
          res.status(404).json({ message: 'Nenhum dado encontrado.' });
        } else {
          res.json(data);
        }
      }
    });
  });

  app.get('/api/skills_profissao', (req, res) => {

    const { id } = req.query;
    const query = `SELECT
                      s.id,
                      s.nome AS skill,
                      s.tipo
                    FROM tb_infos_especificas s
                    JOIN tb_profissoes_infosEspecificas ps ON ps.idskill = s.id
                    WHERE ps.idprofissao = ${id}`;
  
    db.all(query, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados.' });
      } else {
        if (data.length === 0) {
          res.status(404).json({ message: 'Nenhum dado encontrado.' });
        } else {
          res.json(data);
        }
      }
    });
  });

  app.post('/api/add_info_especifica'), (req, res) => {
    const {nome, tipo} = req.body;
    const query = 'INSERT INTO tb_infos_especificas(nome, tipo) VALUES(?,?)'

    db.run(query, [ nome, tipo ], function(err){
      if(err){
        console.log(err);
        res.status(500).json({error: 'Erro ao inserir os dados.'});
      }else{
        console.log(nome, tipo)
        res.status(200).json({sucess: 'Informação inserida com sucesso!'})
      }
    })
  }

  app.post('/api/add_profissoes'), (req, res) => {
    const {nome_profissao, descricao_curta, descricao_longa ,imagem} = req.body;
    const query = 'INSERT INTO tb_profissoes(nome_profissao, descricao_curta, descricao_longa, imagem) VALUES(?, ?, ?, ?)'

    db.run(query, [nome_profissao, descricao_curta, descricao_longa ,imagem ], function(err){
      if(err){
        console.log(err);
        res.status(500).json({error: 'Erro ao inserir os dados.'});
      }else{
        console.log(nome_profissao, descricao_curta, descricao_longa ,imagem)
        res.status(200).json({sucess: 'Informação inserida com sucesso!'})
      }
    })
  }

  app.post('/api/vinculo_profissao_skill'), (req, res) => {
    const {idskill, idprofissao} = req.body;
    const query = 'INSERT INTO tb_profissoes_infosEspecificas(idskill, idprofissao) VALUES(?, ?)'

    db.run(query, [ idskill, idprofissao ], function(err){
      if(err){
        console.log(err);
        res.status(500).json({error: 'Erro ao inserir os dados.'});
      }else{
        console.log(idskill, idprofissao)
        res.status(200).json({sucess: 'Informação inserida com sucesso!'})
      }
    })
  }

  app.listen(port, () => {
    console.log(`Servidor API rodando na porta ${port}`);
  });

  // # 1 - Para rodar o servidor: cd back (para navegar ate a pasta back do projeto)
  // # 2 - Para rodar o servidor basta digitar o comando abaix:
  // node server.js