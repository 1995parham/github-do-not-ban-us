import botogram  # <python3> -m pip install botogram2

token = input('Please insert your Telegram bot token from t.me/BotFather: ')
bot = botogram.create(token)

@bot.before_processing
def any_message(chat):
    chat.send("GitHub is for everyone!")
    return True

if __name__ == '__main__':
    bot.run()

