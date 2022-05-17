/*
const obj = {
  {
    name : "Alabama",
    abreviation : "alb"
  }
}
*/

export function objectToTab (obj, field1, field2) {
  const arr = []
  if (field2 === (null, undefined)) {
    for (const row in obj) {
      arr.push(obj[row][field1])
    }
  } else {
    for (const row in obj) {
      arr.push([obj[row][field1], obj[row][field2]])
    }
  }
  return arr
}
