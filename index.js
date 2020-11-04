process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api'); 
const token = '1406883999:AAHL8R5xgLYhLxdy6WpM9IK7qGpyPUHiBI0';

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

  const requestPhoneKeyboard = {
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
 

 bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  bot.sendMessage(msg.chat.id, 'Can I have access to your phone number?', requestPhoneKeyboard);
    }); 
    
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Thank you! Please choose an animal', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});  

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'moreDogs') {
        img = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    }

    if (query.data === 'morePes') {
        img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC8r7tTZz3ndlr3GY_1hZUY3isr1431Dtj2g&usqp=CAU';
    }
    if (query.data === 'moreCat') {
      img = 'https://images.unsplash.com/photo-1570534536531-c3def02ad855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
    }

    if (img) {
        bot.sendPhoto(chatId, img, {
        });
    } else {
        bot.sendMessage(chatId, 'Please try again', {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
  });
