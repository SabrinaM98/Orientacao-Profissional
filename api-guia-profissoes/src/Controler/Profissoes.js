import { openDB } from "../configDB.js";


/**
 * ROTAS DE CRUD (INSERT, UPDATE, REMOVE)
 */

export async function cadastroProfissao(item){
    openDB()
        .then(db=>{
            db.run(`INSERT INTO tb_profissoes 
            (nome_profissao, descricao_curta, descricao_longa, imagem, descricao_curso, tempo_conclusao, ambiente_trabalho, rotina_trabalho, atividades, link_video) 
            VALUES (?,?,?,?,?,?,?,?,?,?)`, [item.nome_profissao, item.descricao_curta, item.descricao_longa, item.imagem, item.descricao_curso, item.duracao, item.ambiente, item.rotina, item.atividades, item.link_video]);
        })
}

export async function cadastroInfoEspecifica(item){
    openDB()
        .then(db=>{
            db.run(`INSERT INTO tb_infos_especificas (nome, tipo) 
            VALUES (?,?)`, [item.nome, item.tipo]);
        })
}

export async function vinculoInfoEspecificaProfissao(item){
    openDB()
        .then(db=>{
            db.run(`INSERT INTO tb_profissoes_infosEspecificas (idskill, idprofissao) 
            VALUES (?,?)`, [item.idskill, item.idprofissao]);
        })
}

export async function cadastroNoticia(item){
    openDB()
        .then(db=>{
            db.run(`INSERT INTO tb_noticias (titulo, descricao) 
            VALUES (?,?)`, [item.titulo, item.descricao]);
        })
}

export async function atualizarProfissao(item){
    openDB()
        .then(db=>{
            db.run('UPDATE tb_profissoes SET nome_profissao=?, descricao_curta=?, descricao_longa=?, imagem=?, descricao_curso=?, tempo_conclusao=?, ambiente_trabalho=?, rotina_trabalho=?, atividades=?, link_video=? WHERE id=?', [item.nome_profissao, item.descricao_curta, item.descricao_longa, item.imagem, item.descricao_curso, item.duracao, item.ambiente, item.rotina, item.atividades, item.link_video, item.id]);
        })
}

export async function atualizarInfoEspecifica(item){
    openDB()
        .then(db=>{
            db.run('UPDATE tb_infos_especificas SET nome=?, tipo=? WHERE id=?', [item.nome, item.tipo, item.id]);
        })
}

export async function atualizarNoticia(item){
    openDB()
        .then(db=>{
            db.run('UPDATE tb_noticias SET titulo=?, descricao=? WHERE id=?', [item.titulo, item.descricao, item.id]);
        })
}

export async function excluirProfissao(item){
    openDB()
        .then(db=>{
            db.run('DELETE FROM tb_profissoes WHERE id=?', [item.id_profissao]);
        })
}

export async function excluirSkill(item){
    openDB()
        .then(db=>{
            db.run('DELETE FROM tb_infos_especificas WHERE id=?', [item.id_skill]);
        })
}

export async function excluirNoticia(item){
    openDB()
        .then(db=>{
            db.run('DELETE FROM tb_noticias WHERE id=?', [item.id_noticia]);
        })
}

export async function excluirVinculoSkillProfissao(item){
    openDB()
        .then(db=>{
            db.run('DELETE FROM tb_profissoes_infosEspecificas WHERE id=?', [item.id]);
        })
}

/**
 * Queries de check p/ excluir profissão e excluir skill
*/

export async function checkProfissao(id_profissao) {
    return openDB()
        .then(db => {
            const query = 
                    `SELECT * 
                    FROM tb_profissoes_infosEspecificas WHERE idprofissao = ?`;
            const params = [id_profissao];

            return db.all(query, params)
                .then(res => res);
        });
}

export async function checkSkill(id_skill) {
    return openDB()
        .then(db => {
            const query = `SELECT * 
                        FROM tb_profissoes_infosEspecificas WHERE idskill = ?`;
            const params = [id_skill];

            return db.all(query, params)
                .then(res => res);
        });
}

/*
 * ROTAS DE SELECT PARA OS CRUDS
*/

export async function selectVinculoSkillProfissaoCRUD(){
    return openDB()
    .then(db=>{
        return db.all(` SELECT 
                            ps.id,
                            s.nome AS skill,
                            s.tipo,
                            p.nome_profissao AS profissao
                        FROM tb_profissoes_infosEspecificas ps
                        JOIN tb_infos_especificas s ON s.id = ps.idskill
                        JOIN tb_profissoes p ON p.id = ps.idprofissao
                        ORDER BY 4 ASC `)
        .then(res=>res)
    })
}

export async function selectInfosEspecificasCRUD(){
    return openDB()
    .then(db=>{
        return db.all(`SELECT * 
                        FROM tb_infos_especificas 
                        ORDER BY 1 DESC `)
        .then(res=>res)
    })
}

export async function selectNoticiasCRUD(){
    return openDB()
        .then(db=>{
            return db.all(`SELECT * 
                           FROM tb_noticias
                           ORDER BY 2, 3 ASC `)
            .then(res=>res)
        })
}

export async function selectProfissoesCRUD(){
    return openDB()
        .then(db=>{
            return db.all('SELECT id, nome_profissao, descricao_curta, imagem FROM tb_profissoes ORDER BY 2 ASC')
            .then(res=>res)
        })
}

export async function selectSkills(){
    return openDB()
        .then(db=>{
            return db.all(`SELECT i.id, 
                            i.nome AS skill,
                            t.descricao AS tipo
                            FROM tb_infos_especificas i
                            JOIN tb_tipo_skill t ON t.id = i.tipo
                            ORDER BY 2 ASC`)
            .then(res=>res)
        })
}

/*
 * ROTAS DE SELECT PARA AS PAGINAS
*/

export async function selectCardsProfissao(){
    return openDB()
        .then(db=>{
            return db.all('SELECT id, nome_profissao, descricao_curta, imagem FROM tb_profissoes WHERE descricao_curta IS NOT NULL AND imagem IS NOT NULL ORDER BY 2 ASC')
            .then(res=>res)
        })
}

export async function selectListaNomeProfissao(search) {
    return openDB()
        .then(db => {
            const query = 'SELECT * FROM tb_profissoes WHERE nome_profissao LIKE ?';
            const params = [`%${search}%`];

            return db.all(query, params)
                .then(res => res);
        });
}

export async function selectInfosProfissao(id_profissao) {
    return openDB().then(db => {
        const query = `SELECT 
                            * 
                            FROM tb_profissoes 
                            WHERE id = ?`;

        const params = [id_profissao];

        return db.all(query, params)
            .then(res => res);
    });
}

export async function selectSkillsProfissao(id_profissao) {
    return openDB().then(db => {
        const query = `SELECT 
                            s.id,
                            s.nome AS skill,
                            s.tipo
                        FROM tb_infos_especificas s
                        JOIN tb_profissoes_infosEspecificas ps ON ps.idskill = s.id
                        WHERE ps.idprofissao = ?`;
                            
        const params = [id_profissao];

        return db.all(query, params)
            .then(res => res);
    });
}














// export async function createTable(){
//     openDB().then(db=>{
//         db.exec("CREATE TABLE AQUII")
//     })
// }