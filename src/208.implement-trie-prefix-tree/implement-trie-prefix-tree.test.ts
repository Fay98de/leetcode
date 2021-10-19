import Trie_0 from './implement-trie-prefix-tree.0'

const arr = [Trie_0]

arr.forEach((Trie, index) => {
  describe(`[208. 实现 Trie (前缀树](implement-trie-prefix-tree) - ${index}`, () => {
    test(`Trie - 0`, () => {
      const received: (boolean | null)[] = []
      const trie = new Trie()
      received.push(null)
      trie.insert('apple')
      received.push(null)
      received.push(trie.search('apple'))
      received.push(trie.search('app'))
      received.push(trie.startsWith('app'))
      trie.insert('app')
      received.push(null)
      received.push(trie.search('app'))
      expect(received).toEqual([null, null, true, false, true, null, true])
    })
  })
})
