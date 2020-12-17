const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = record => {
  let results = record.find(object => {
      if (object.result === "W") {
        return object.year
      }
  })
}

// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }