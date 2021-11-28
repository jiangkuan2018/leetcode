function toHex(n) {
  const res = n.toString(16)
  return res.length === 1 ? `0${res}` : res
}

function rgbToHex(r,g,b) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

console.log(rgbToHex(0, 77, 255))

function hexToRgb(hex = '') {
  const arr = hex.replace('#', '').match(/.{2}/g)
  return {
    r: parseInt(arr[0], 16),
    g: parseInt(arr[1], 16),
    b: parseInt(arr[2], 16)
  }
}

console.log(hexToRgb('#004dff'))