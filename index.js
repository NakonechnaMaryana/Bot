process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api'); 
const token = '1443703004:AAF3yWOA5GzSEgaTyYQ_i3NkwRrNnxOdams';

const bot = new TelegramBot(token, {polling: true});

const keyboard = [
    [
      {text: 'Details about dog Winni',
        callback_data: 'moreDogs'}
    ],
    [
        {text: 'Details about dog Jack',
          callback_data: 'morePes'}
    ],
    [
        { text: 'Details about cat Lisa',
          callback_data: 'moreCat' }
      ]
  ];

 /* const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [[{
            text: "My phone number",
            callback_data: 'phone',
            request_contact: true,
            one_time_keyboard: true
        }], ["Cancel"]]
    }
 };
 */

 bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  bot.sendMessage(msg.chat.id, 'Please type in your phone number');
    }); 
    
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendPhoto({
        chat_id : message.chat.id,
        caption: 'This is my test image',
        photo: 'C:\Users\Userrr\Desktop\Pending\12.jpg'
    })
  bot.sendMessage(chatId, 'Thank you! Please choose an animal:', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === 'moreDogs') {
        text = "Amazing dog. Healthy and clean. 2 y.o";
    }

    if (query.data === 'morePes') {
        text = "Nice dog! 3 y.o.";
    }
    if (query.data === 'moreCat') {
      text = "Beautiful kitten! 6 months old.";
    }

    if (text) {
        bot.sendMessage(chatId, text, {
        });
    } else {
        bot.sendMessage(chatId, 'Please try again', {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
  });
