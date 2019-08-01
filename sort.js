const { promises: { readFile, writeFile } } = require('fs');

(async () => {
  let supportorsStart = false
  let supporters = []
  const readme = await readFile('README.md')
  let newReadme = []
  String(readme)
    .split('\n')
    .forEach(line => {
      if (line === '## Supporters (list sorted alphabetically)') {
        supportorsStart = true
        newReadme.push(line)
      }
      if (!supportorsStart) {
        newReadme.push(line)
      } else if (line.startsWith('- ')) {
        supporters.push(line)
      }
    })
  await writeFile('README.md', newReadme.concat('', supporters
    .sort((a, b) => {
      let [bufa, bufb] = [Buffer.from(a.toLowerCase()), Buffer.from(b.toLowerCase())]
      return Number(bufa.readBigUInt64BE(2) - bufb.readBigUInt64BE(2))
    })).join('\n').concat('\n'))
})().catch(console.error)
