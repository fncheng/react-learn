/**
 * @description:
 * @param {*} handles 存储 event 类型的 click、dblclick、change等
 */
export default class PubSub {
  constructor() {
    this.handlers = {}
  }
  // 注册事件监听器
  /**
   * @description: 注册事件监听器
   * @param {*} type 监听的事件类型
   * @param {*} listener 回调函数
   */  
  addListener(type, listener) {
    if (!(type in this.handlers)) {
      // handlers内不存在，就存储
      this.handlers[type] = []
    }
    // 将对应的事件处理函数存入 handlers[type]中
    this.handlers[type].push(listener)
  }
  // 移除事件监听器
  removeListener(type) {
    const length = this.handlers[type].length
    if (length === 1) {
      // delete
    }
  }
  emit(type) {
    // args 为回调函数传入的参数
    const args = [...arguments].slice(1)
    const eventList = this.handlers[type]
    /**
     * 循环遍历触发handlers中对应type的所有事件处理函数
     * for (const item of this.handlers[type])
     * item()
     * args 为事件处理函数传入的参数的集合:Array
     */
    for (const item of eventList) {
      // item(args)
      item.apply(this, args)
    }
  }
}
