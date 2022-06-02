const TelegramBot = require('node-telegram-bot-api');

// Token de bot en telegram
const token = '5490395184:AAGSFLXxZbp2baeO2XDgl0lngkEH1goLSHk';

// Crea una nueva instancia del bot con opción "pooling" para extraer nuevas actualizaciones
const Pricile = new TelegramBot(token,{
    polling: true
});

// Comando /start
Pricile.onText(/\/start/, (msj, match) => {
    var chatId = msj.message_id;
    var tipoChat = msj.chat.type;
    console.log(msj);
    // Opciones disponibles
    const opciones = {
        respuesta_a_mensaje_id: chatId,
        marco_respuesta : JSON.stringify({
            keyboard: [
                ['PRODUCTOS'],
                ['PROMOCIONES'],
                ['CLASIFICACIONES']
            ]
        })
    }
    // Si el mensaje es del tipo "private", entonces desplegará el texto de bienvenida junto con las opciones
    if(tipoChat=="private"){
        Pricile.sendMessage("¡Hola, mi nombre es Priscille! ¿Cómo puedo ayudarte?", opciones);
    }
});



