const TelegramBot = require('node-telegram-bot-api');

// Token de bot en telegram
const token = '5490395184:AAGSFLXxZbp2baeO2XDgl0lngkEH1goLSHk';

const opcionesPricile = [
    ['PRODUCTOS'],
    ['PROMOCIONES'],
    ['CLASIFICACIONES']
]

// Crea una nueva instancia del bot con opción "pooling" para extraer nuevas actualizaciones
const Pricille = new TelegramBot(token,{
    polling: true
});

// Comando /start
Pricille.onText(/\/start/, (msj, match) => {
    var messageId = msj.message_id
    var chatId = msj.chat.id;
    var tipoChat = msj.chat.type;
    console.log(msj);
    // Opciones disponibles
    const opts = {
        reply_to_message_id: messageId,
        reply_markup : JSON.stringify({
            keyboard: [
                ['PRODUCTOS'],
                ['PROMOCIONES'],
                ['CLASIFICACIONES']                            
            ],
            'one_time_keyboard': true            
        })
    }
    // Si el mensaje es del tipo "private", entonces desplegará el texto de bienvenida junto con las opciones
    if(tipoChat=="private"){
        Pricille.sendMessage(chatId, "¡Hola, mi nombre es Priscille! ¿Cómo puedo ayudarte?", opts);
    }
});



