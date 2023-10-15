const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseLetter = lowercaseLetter.toUpperCase()
const number = '0123456789'
const base_collection = lowercaseLetter + uppercaseLetter + number
const max = 61
const min = 0

function sample(arr){
  let index = Math.floor(Math.random() * (max - min + 1) + min);
  return arr[index]
}


function URLgenerator(length){
  

  let collection = lowercaseLetter + uppercaseLetter + number
  let collectionArr = collection.split('')
  // console.log(collectionArr);
  let password = ''
  for(let i=0; i < length; i++){
    password += sample(collectionArr)
  }
  // console.log(password)
  return password
}

export default URLgenerator