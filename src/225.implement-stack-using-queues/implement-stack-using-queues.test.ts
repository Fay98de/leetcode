import MyStack_0 from './implement-stack-using-queues.0'

const Collections = [MyStack_0]

Collections.forEach((MyStack, index) => {
  describe(`[225. 用队列实现栈](implement-stack-using-queues) - ${index}`, () => {
    test(`MyStack`, () => {
      const myStack = new MyStack()
      myStack.push(1)
      myStack.push(2)
      expect(myStack.top()).toBe(2)
      expect(myStack.pop()).toBe(2)
      expect(myStack.empty()).toBe(false)
    })
  })
})
