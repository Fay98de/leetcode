import LRUCache_0 from './lru-cache.0'

const arr = [LRUCache_0]

arr.forEach((LRUCache, index) => {
  describe(`[146. LRU 缓存机制](lru-cache) - ${index}`, () => {
    test(`LRUCache - 0`, () => {
      const received: (number | null)[] = []
      const cache = new LRUCache(2)
      received.push(null)
      cache.put(1, 1)
      received.push(null)
      cache.put(2, 2)
      received.push(null)
      received.push(cache.get(1))
      cache.put(3, 3)
      received.push(null)
      received.push(cache.get(2))
      cache.put(4, 4)
      received.push(null)
      received.push(cache.get(1))
      received.push(cache.get(3))
      received.push(cache.get(4))

      expect(received).toEqual([null, null, null, 1, null, -1, null, -1, 3, 4])
    })

    test(`LRUCache - 1`, () => {
      const received: (number | null)[] = []
      const cache = new LRUCache(2)
      received.push(null)
      cache.put(2, 1)
      received.push(null)
      cache.put(1, 1)
      received.push(null)
      cache.put(2, 3)
      received.push(null)
      cache.put(4, 1)
      received.push(null)
      received.push(cache.get(1))
      received.push(cache.get(2))

      expect(received).toEqual([null, null, null, null, null, -1, 3])
    })
  })
})
