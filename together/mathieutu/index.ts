const { subject, complement, verb, prep } = {
  subject: 'GitHub',
  verb: 'is',
  prep: 'for',
  complement: 'everyone',
}

const say = (message: string): void => console.log(message + '!')

say([subject, verb, prep, complement].join(' '))
