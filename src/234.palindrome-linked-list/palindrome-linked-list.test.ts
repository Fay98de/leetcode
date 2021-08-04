import ListNode from '../utils/ListNode'
import isPalindrome_0 from './palindrome-linked-list.0'
import isPalindrome_1 from './palindrome-linked-list.1'
import isPalindrome_2 from './palindrome-linked-list.2'

const { fromArray, toArray } = ListNode

const Functions = [isPalindrome_0, isPalindrome_1, isPalindrome_2]

Functions.forEach((isPalindrome, index) => {
  describe(`[234. 回文链表](palindrome-linked-list) - ${index}`, () => {
    test(`[1, 2] => false`, () => {
      const node = fromArray([1, 2])
      const received = isPalindrome(node)
      expect(received).toBe(false)
    })

    test(`[1, 2, 2, 1] => true`, () => {
      const node = fromArray([1, 2, 2, 1])
      const received = isPalindrome(node)
      expect(received).toBe(true)
    })

    test(`[1, 2, 3, 2, 1] => true`, () => {
      const node = fromArray([1, 2, 3, 2, 1])
      const received = isPalindrome(node)
      expect(received).toBe(true)
    })
  })
})
