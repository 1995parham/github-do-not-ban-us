export class Protect {
  public nationality: string;

  constructor(nationality = 'Iran') {
    this.nationality = nationality;
  }

  public protectIranIsProtectYourself() {
    console.log(`I'm from ${this.nationality}, I support Iran!`);
  }
}

const Myself = new Protect('Philippines');

Myself.protectIranIsProtectYourself();