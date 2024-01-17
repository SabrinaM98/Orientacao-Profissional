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

  app.listen(port, () => {
    console.log(`Servidor API rodando na porta ${port}`);
  });

  // # 1 - Para rodar o servidor: cd back (para navegar ate a pasta back do projeto)
  // # 2 - Para rodar o servidor basta digitar o comando abaix:
  // node server.js