async function createMessage (req, res) {
    const message = {
        CompanyId: 1,
        content: 
            `Nome: ${req.body.fantasyName}
            Empresa: ${req.body.corporateName}
            Razão social: ${req.body.docNumber}
            Endereço: ${req.body.address} ${req.body.addressComplement}
            Cidade: ${req.body.city}
            Estado: ${req.body.state}
            CEP: ${req.body.zipCode}
            Email: ${req.body.email}
            Telefone: ${req.body.phoneNumber}
            Whatsapp: ${req.body.whatsapp}
            Mensagem: ${req.body.message}`
    }

    global.db.create('message', message);
    
    return res.sendStatus(200);
}

module.exports = {
    createMessage,
}