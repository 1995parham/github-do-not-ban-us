interface IGithubForEveryone {
    country: any;
    gender: any;
    religion: any;
    politics: false;
}

class GithubForEveryone implements IGithubForEveryone {
    country: any;
    gender: any;
    religion: any;
    politics: false;

    constructor () {
        console.log('GitHub is for everyone')
    }
}

new GithubForEveryone()