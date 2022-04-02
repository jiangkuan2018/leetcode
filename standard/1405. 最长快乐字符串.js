function longestDiverseString(a, b, c) {
  let s = ''
  const { maxQueue, stop, strMap } = generator(a, b, c)
  while (true) {
    if (stop()) {
      break
    } else {
      const [max, second] = maxQueue()
      console.log(`[ strMap ] =>`, strMap)
      const standByMax = strMap[max].substring(0, 2)
      strMap[max] = strMap[max].substring(2)
      let standBySecond = ''
      if (strMap[second].length > 2 && strMap[second].length % 2 === 0) {
        standBySecond = strMap[second].substring(0, 1)
        strMap[second] = strMap[second].substring(1)
      } else {
        standBySecond = strMap[second].substring(0, 2)
        strMap[second] = strMap[second].substring(2)
      }
      
      if (!s.endsWith(standByMax)) {
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
// longestDiverseString(1, 0, 3)
// longestDiverseString(0, 8, 11)
// longestDiverseString(2, 2, 1)
longestDiverseString(4, 4, 3)