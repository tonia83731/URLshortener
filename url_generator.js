function sample(arr){
  let index = Math.floor(Math.random() * arr.length);
  return arr[index]
}


function URLgenerator(){
  const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseLetter = lowercaseLetter.toUpperCase()
  const number = '0123456789'

  let collection = lowercaseLetter + uppercaseLetter + number
  let collectionArr = collection.split('')
  // console.log(collectionArr);
  let password = ''
  for(let i=0; i<6; i++){
    password += sample(collectionArr)
  }
  // console.log(password)
  return password
}

export default URLgenerator