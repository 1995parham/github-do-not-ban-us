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
      }
      if (supportorsStart && line.startsWith('- ')) {
        supporters.push(line)
      }
    })
  await writeFile('README.md', newReadme.concat('', supporters
    .sort()).join('\n'))
})().catch(console.error)
