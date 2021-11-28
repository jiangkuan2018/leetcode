const s = "We are happy."

// function replaceSpace(s = '') {
//   return s.replace(/\s/g, '%20')
// }

function replaceSpace(s = '') {
  if (s.includes(' ')) {
    return replaceSpace(s.replace(' ', '%20'))
  } else {
    return s
  }
}

console.log(replaceSpace(s))