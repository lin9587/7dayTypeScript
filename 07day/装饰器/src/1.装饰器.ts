// function log(target: Function, name: string, descriptor: PropertyDescriptor) {
//   /**
//    * target: 被装饰器的方法所属类
//    * name: 被装饰的方法名称
//    * descriptor: 描述符
//    */

//   console.log(target, name, descriptor)

//   // 把原始的方法提取出来
//   let fn = descriptor.value
//   descriptor.value = function(a: number, b: number) {
//     // console.log('这是新的方法')

//     let result = fn(a, b)
//     console.log('日志', {
//       name,
//       a,
//       b,
//       result
//     })

//     return result
//   }
// }

// // 原始类
// class M {
//   @log
//   static add(a: number, b: number) {
//     return a + b;
//   }

//   @log
//   static sub(a: number, b: number) {
//     return a - b;
//   }
// }

// let v1 = M.add(1, 2)
// console.log(v1 )
// let v2 = M.sub(4, 2)
// console.log(v2)
