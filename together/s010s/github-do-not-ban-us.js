function community(word) {
  let words = word
  function chain(word) {
    words += '-' + word
    return chain
  }
  chain.freedom = function () {
    alert(words)
    return words
  }
  return chain
}

community('github')('do')('not')('ban')('us').freedom()