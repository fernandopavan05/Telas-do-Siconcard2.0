function mostrarMensagem(tela) {
    var mensagemContainer = document.getElementById("mensagem");

    switch (tela) {
        case 'Limite':
            mensagemContainer.textContent = "1- Consultar Saldo - Tela 'Limite': Por favor, insira apenas o número do cartão ou CPF do beneficiário. Se não encontrar as informações desejadas, verifique a tela de Consulta Esteira de Cartões para identificar o motivo dessa ocorrência.";
            break;
        case 'Desbloquear':
            mensagemContainer.textContent = "2- Desbloquear Cartão - Tela 'Desbloquear': Antes de prosseguir com o desbloqueio, certifique-se de que o número para receber o SMS esteja correto. Caso contrário, acesse a tela CADASTRO DE BENEFICIÁRIO e atualize o número de telefone. Se estiver solicitando desbloqueio para adiantamento salarial, consulte a tela CADASTRO DE PORTADOR para fazer as alterações necessárias. Após essas atualizações, retorne à tela de desbloqueio e preencha os dados restantes.";
            break;
        case 'RecuperarSenha':
            mensagemContainer.textContent = "3- Recuperar Senha do Cartão - Tela 'Recuperar Senha Cartão': Antes de iniciar o processo de recuperação de senha, verifique se o número para receber o SMS está correto. Se não estiver, acesse a tela CADASTRO DE BENEFICIÁRIO e atualize o número de telefone. Para solicitar a recuperação de senha relacionada ao adiantamento salarial, confira a tela CADASTRO DE PORTADOR para efetuar as alterações necessárias. Após essas atualizações, retorne à tela de Recuperar Senha e complete os dados restantes.";
            break;
        case 'ConsultaUsuarios':
            mensagemContainer.textContent = "4- Usuário e Senha Do aplicativo - Tela 'Consulta de Usuários': Insira o CPF do cliente no filtro. O campo 'Usuário' corresponderá aos últimos 8 dígitos do cartão, e a 'Senha' será o CPF. Caso o beneficiário não consiga acessar, clique no botão de resetar senha., a senha será revertida para o padrão, onde o 'Usuário' corresponderá aos 8 últimos números do cartão, e a 'Senha' será o CPF do beneficiário.";
            break;
        case 'ConsultaEsteira':
            mensagemContainer.textContent = "5- Consultar Status do Cartão, Bloqueio/Cancelamento - Tela 'Consulta Esteira de Cartões': Ao acessar esta tela, forneça apenas esses dados:\n'EMPRESA': Insira o município que o cartão está associado\n'CARTÃO': Indique se o cartão está vinculado a um adiantamento salarial. Em caso afirmativo, deixe o campo 'PROJETO SOCIAL' em branco. Se não for um adiantamento salarial, adicione o projeto social correspondente ao cartão do cliente.\n'Número do Cartão/CPF': Efetue a pesquisa inserindo o número do cartão ou o CPF do cliente.\nAo utilizar esta tela, terá acesso ao status do cartão e todos os dados relevantes associados a ele. Lembre-se de fornecer as informações solicitadas para uma consulta eficaz.";
            break;
        case 'LoteRecarga':
            mensagemContainer.textContent = "6- Consultar se o valor dos beneficiários já foi liberado - Tela 'Lote Recarga de Crédito': Clique no filtro e adicione apenas o nome da empresa que deseja verificar se o valor foi liberado. Após a pesquisa, navegue até as últimas telas e procure a fatura desejada.\nVerifique o status da fatura:\n- Se estiver com o status 'Aprovado', isso significa que a fatura foi liberada, e o saldo já está nos cartões dos beneficiários.\n- Se estiver com o status 'Pendente', a fatura ainda não foi paga e o valor não foi liberado.\n- Se estiver com o status 'Cancelado', a fatura foi cancelada.";
            break;
        case 'InformacoesGerais':
            mensagemContainer.textContent = "7- Verificar se o beneficiário efetuou ou não a venda - Tela 'Informações Gerais':\n\nNa tela 'Informações Gerais', é uma maneira eficaz de verificar se o beneficiário realizou vendas.\n\n.Insira o CPF do cliente para identificação exclusiva.\n.Escolha a EMPRESA 'Municipio' na lista suspensa.\n.Selecione o TIPO DO CARTÃO, indicando se é um adiantamento salarial ou projeto social.\nSe a opção for projeto social, preencha o campo 'Projeto Social' com o projeto associado.\n.No campo 'Transações Aprovadas', serão exibidas todas as compras efetuadas pelo cliente, incluindo detalhes como data, valor e descrição da transação.\n.No campo 'Transações Rejeitadas', serão apresentadas todas as compras rejeitadas do cliente, com informações detalhadas sobre o motivo da rejeição, data e valor.";
            break;
        case 'SolicitaçãoCartãoProvisorio':
            mensagemContainer.textContent = "8- Cartão Provisório: Inicialmente, faça a importação dos beneficiários pelo Layout de Importação.\nVá para a tela de Solicitação de Cartão para prosseguir com o processo.\nNa tela Cadastro de Empresa, execute o NightWatch do seu respectivo município.\nAcesse a tela Confecção de Cartão e crie um lote novo. Após isso, altere o status do lote de 'enviado' para 'recebido'.\nPegue o lote e insira no gerador de cartões para gerar o PDF do cartão provisório.\nApós a geração do PDF, anote o número do lote deste cartão provisório e vá até Revisão de Cartão, colocando o status como 'bloqueado'";
            break;
        default:
            mensagemContainer.textContent = "Tela não encontrada.";
            break;
    }
}
