const { random, reduce, map, forEach } = require('lodash')
const g_rule = () => new Array(random(1, 10, false)).fill(0)
const root = {
  id: 0,
  name: 'root',
  sum: 0,
  rules: [],
  children: [
    {
      id: random(),
      name: 'A',
      sum: 0,
      rules: g_rule(),
      children: [
        {
          id: random(),
          name: 'AA1',
          rules: g_rule(),
          children: [
            {
              id: random(),
              name: 'AAA1',
              rules: g_rule(),
              children: []
            }
          ]
        },
        {
          id: random(),
          name: 'AA2',
          rules: g_rule(),
          children: []
        }
      ]
    },
    {
      id: random(),
      name: 'B',
      sum: 0,
      rules: g_rule(),
      children: [
        {
          id: random(),
          name: 'BB1',
          rules: g_rule(),
          children: []
        },
        {
          id: random(),
          name: 'BB2',
          rules: g_rule(),
          children: []
        }
      ]
    },
    {
      id: random(),
      name: 'C',
      sum: 0,
      rules: g_rule(),
      children: []
    }
  ]
}

// console.log(JSON.stringify(data))

function dfs(node) {
  if (node.children) {
    forEach(node.children, dfs)
  }
  node.sum = reduce(node.children, (acc, curr) => {
    acc += curr.sum
    return acc
  }, node.rules.length)
}

dfs(root)
console.log(root)