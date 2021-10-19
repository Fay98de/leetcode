interface TrieNode extends Record<string, TrieNode | true> {}

class Trie {
  node: TrieNode = {}

  constructor() {}

  insert(word: string): void {
    let { node } = this
    for (let c of word) {
      node[c] = node[c] || {}
      node = node[c] as TrieNode
    }
    node.isLeaf = true
  }

  searchWord(word: string): TrieNode | false {
    let { node } = this
    for (let c of word) {
      if (!node[c]) return false
      node = node[c] as TrieNode
    }
    return node
  }

  search(word: string): boolean {
    const result = this.searchWord(word)
    return result ? !!result.isLeaf : false
  }

  startsWith(prefix: string): boolean {
    const result = this.searchWord(prefix)
    return !!result
  }
}

export default Trie
