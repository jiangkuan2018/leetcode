function longestDiverseString(a, b, c) {
  let s = ''
  const { maxQueue, stop, strMap } = generator(a, b, c)
  while (true) {
    if (stop()) {
      break
    } else {
      const [max, second] = maxQueue()
      const standByMax = strMap[max].substring(0, 2)
      const standBySecond = strMap[second].substring(0, 2)
      strMap[max] = strMap[max].substring(2)
      strMap[second] = strMap[second].substring(2)
      if (!s.substring(s.length - 2).includes(standByMax)) {
        s += `${standByMax}${standBySecond}`
      }
    }
  }
  console.log(`[ s ] =>`, s)
  return s
}

function generator(a, b, c) {
  const strMap = {
    aStr : 'a'.repeat(a),
    bStr : 'b'.repeat(b),
    cStr : 'c'.repeat(c)
  }
  const maxQueue = () => {
    return Object.keys(strMap).sort((keyA, keyB) => {
      if (strMap[keyA].length < strMap[keyB].length) {
        return 1
      }
      if (strMap[keyA].length > strMap[keyB].length) {
        return -1
      }
      return 0
    })
  }
  const stop = () => {
    return Object.values(strMap).filter(item => item.length === 0).length === 3
  }
  return {
    strMap,
    stop,
    maxQueue
  }
}

// longestDiverseString(1, 1, 7)
// longestDiverseString(2, 2, 1)
// longestDiverseString(7, 1, 0)
longestDiverseString(1, 0, 3)