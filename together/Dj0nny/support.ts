class Support {
  message: string;

  constructor(message: string) {
    this.message = message
  }

  printMessage() {
    console.log(this.message);
  }
}

const github_do_not_ban_us = "GitHub is for everyone"
let supportMessage = new Support(github_do_not_ban_us);

supportMessage.printMessage();

