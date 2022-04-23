var input = require('fs').readFileSync('Info.json', 'utf8');
var info = JSON.parse(input);

var personalInfoArray = ['name', 'email', 'phone', 'birthday', 'highSchoolConclusionYear', 'cpf',
                        'rg', 'zipCode', 'state', 'city', 'street', 'district', 'number',
                        'acceptReceibeMessengerMessage', 'acceptReceiveEmailMessage',
                        'acceptReceiveWhatsappMessage', 'courseOffer', 'stateOffer', 'cityOffer',
                        'venueOffer', 'modality', 'shift', 'enem'];

var personalInfoArrayPortuguese = ['Nome', 'E-mail', 'Telefone', 'Data de aniversário', 
                                'Ano de conclusão do ensino médio', 'CPF', 'RG', 'CEP', 
                                'Estado', 'Cidade', 'Rua', 'Bairro', 'Número',
                                'Aceita mensagem por Messenger', 'Aceita mensagem por E-mail',
                                'Aceita mensagem por Whatsapp', 'Curso', 'Estado', 'Cidade',
                                'Unidade', 'Modalidade', 'Turno', 'Enem']; 

function personalData() {
    var personalArrayInfoAsnwer = [];
    for (i = 0; i < personalInfoArray.length; i++) {
        for (const key of Object.keys(info.data.context.subscriptionInfoBoolean)) {
            if (info.data.context.subscriptionInfoBoolean[key] == true && 
                key == personalInfoArray[i]) {
                    if (typeof info.data.context.subscriptionInfo[key] !== 'boolean') {
                   personalArrayInfoAsnwer.push(`${personalInfoArrayPortuguese[i]}: ${info.data.context.subscriptionInfo[key]}`);
                }
                else{
                    if (info.data.context.subscriptionInfo[key] == true) {
                        personalArrayInfoAsnwer.push(`${personalInfoArrayPortuguese[i]}: Sim`);
                    }
                    if (info.data.context.subscriptionInfo[key] == false) {
                        personalArrayInfoAsnwer.push(`${personalInfoArrayPortuguese[i]}: Não`);
                    }
                }
            }      
        }
    }
    var list1 = '';
    for (i = 0; i < 16; i++) {
        var list1 = list1 + `${personalArrayInfoAsnwer[i]}\n`;
    }
    var list2 = '';
    for (i > 16; i < personalArrayInfoAsnwer.length; i++) {
        var list2 = list2 + `${personalArrayInfoAsnwer[i]}\n`;
    } return `Informações pessoais:\n\n${list1}\n\nInformação de curso\n\n${list2}`;
} 

console.log(personalData());
