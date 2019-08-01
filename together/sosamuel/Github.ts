export default class GitHub {
  static purpose: string = "GitHub is for everyone";
  private static instance: GitHub;
  private constructor() {}
  static create(): GitHub {
    if (!GitHub.instance) {
      GitHub.instance = new GitHub();
    }
    console.log(GitHub.purpose);
    return GitHub.instance;
  }
}
