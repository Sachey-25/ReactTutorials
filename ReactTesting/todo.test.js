/*import { add } from '../ReactTesting/todo'
import { sub } from '../ReactTesting/todo'
import { mul } from '../ReactTesting/todo'
import { div } from '../ReactTesting/todo'
import { total } from '../ReactTesting/todo'*/

const dimension = jest.fn(() => 3)   //React function mocking in react testing

test('dimension', () => {
    expect(dimension(1,2)).toBe(3)
    expect(dimension).toHaveBeenCalledTimes(1)  // If it is called once then this is true
    expect(dimension).toHaveBeenCalledWith(1,3) //(1,3) If it is called along with 1,3  then it is true
})


// console.log(add(10,20));
// test('add', () => {
//     const value = add(10,20)
//     expect(value).toBe(30)
// })

// test('sub', () => {
//     const result = sub(10,10)
//     expect(result).toBe(0)
// })

// test('mul', () => {    
//     expect(mul(10,20)).toBe(200)
// })

// test('div', () => {    
//     expect(div(20,10)).toBe(2)
// })

// test('total', () => {
//     expect(total(5,20)).toBe(25)
// })