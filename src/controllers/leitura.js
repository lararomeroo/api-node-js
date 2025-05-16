const db = require('../dataBase/connection'); 

module.exports = {
    async listarLeitura(request, response) {
        try {

            const sql = `
            SELECT 
            id_leitura, id_sensor, valor, data_hora
            FROM leitura;
            `;

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de leitura', 
                itens: rows.length,
                dados: rows

            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarLeitura(request, response) {
        try {

            const {id_sensor, valor, status, data_hora } = request.body;

            const sql = `
                INSERT INTO Leitura 
                (id_sensor, valor, status, data_hora) 
                VALUES
                (?, ?, ?, ?);
                `;

                const values = [id_sensor, valor, status, data_hora];

                const [result] = await db.query (sql, values);

                const dados ={
                    valor,
                    status,
                    data
                };

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de leitura', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarLeitura(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de usuário', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarLeitura(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de usuário', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  