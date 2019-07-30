export default class Github {
  static purpose: string = "Github is for everyone";
  private static instance: Github;
  private constructor() {}
  static create(): Github {
    if (!Github.instance) {
      Github.instance = new Github();
    }
    console.log(Github.purpose);
    return Github.instance;
  }
}
