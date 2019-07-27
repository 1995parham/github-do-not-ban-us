interface Process {
  stdout: {
    write: (message: string) => void
  }
}

declare const process: Process;

process.stdout.write('Github is for everyone!');
