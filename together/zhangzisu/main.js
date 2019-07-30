const OSSCommunity = {}

OSSCommunity.__proto__.basic = [
  'GitHub is for everyone',
  'Code for freedom',
  'Github是开发者的Github',
  '开源社区不是政治家的战场'
]

if (require.main === module) {
  const GitHub = {}
  console.log(GitHub.basic.join('\n'))
} else {
  module.exports = OSSCommunity
}