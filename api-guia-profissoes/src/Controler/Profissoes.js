import { openDB } from "../configDB.js";

export async function cadastroProfissao(item){
    openDB()
        .then(db=>{
            db.run('INSERT INTO tb_profissoes (nome_profissao, descricao_curta, descricao_longa) VALUES (?,?,?)', [item.nome_profissao, item.descricao_curta, item.descricao_longa]);
        })
}

export async function atualizarProfissao(item){
    openDB()
        .then(db=>{
            db.run('UPDATE tb_profissoes SET nome_profissao=?, descricao_curta=?, descricao_longa=? WHERE id=?', [item.nome_profissao, item.descricao_curta, item.descricao_longa, item.id]);
        })
}

export async function selectCardsProfissao(){
    return openDB()
        .then(db=>{
            return db.all('SELECT id, nome_profissao, descricao_curta, imagem FROM tb_profissoes WHERE descricao_curta IS NOT NULL')
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

export async function selectInfosEspecificas(search) {
    return openDB()
        .then(db => {
            const query = 'SELECT id, nome FROM tb_infos_especificas WHERE nome LIKE ?';
            const params = [`%${search}%`];

            return db.all(query, params)
                .then(res => res);
        });
}

export async function selectInfosProfissao(id_profissao) {
    return openDB().then(db => {
        const query = `SELECT 
                            id, 
                            nome_profissao, 
                            descricao_longa, 
                            imagem 
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














// export async function createTable(){
//     openDB().then(db=>{
//         db.exec("CREATE TABLE AQUII")
//     })
// }