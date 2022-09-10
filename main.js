const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const mynub = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]
// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = numb => { 

  let reversedArr = numb.reverse() // odwrócenie szyku
  // usunięcie pierwszej liczby szyku 
  const checkDigit = reversedArr.shift() // usunięcie pierwszej liczby szyku  

  let sum = 0 
  for(let i = 0; i < reversedArr.length; i++) {
     // petla całego szyku
    if(i % 2 == 0) {  // warunek (jezeli liczba jest parzysta)
      let multiNumb = numb[i] * 2 // pomnożenie liczb spełniających warunek przez 2
      if(multiNumb > 9 ) { sum += multiNumb - 9 } 
      else {sum += multiNumb }
    }
    else {sum += numb[i]}
  }

 let result =  sum + checkDigit // uzyskanie wyniku 
 //console.log(result)
  if (result % 10 == 0) { // sprawdzenie czy wynik jest modulem z 10
    return true
  }   
    else return false
  }

    //console.log(validateCred(invalid5))
    //console.log(validateCred(valid5))
  
const findInvalidCards = (nestedArray) => {
  let invalidCards = [];
    for (let j = nestedArray.length-1; j >= 0; j--){   
        if (validateCred(nestedArray[j]) === false) { 
          invalidCards.push(nestedArray[j]);
          }
        }
          invalidCards.forEach(element => {
          element.reverse()
        });
          invalidCards.reverse()
        return invalidCards
}
      
const invalid = findInvalidCards(batch);
    //console.log(invalid)

const idInvalidCardCompanies = (company) => {
  // company = findInvalidCards(batch)
  let invalidCompanies = []
    
  for (let a = 0; a < company.length; a++) {
     let shifted =  company[a].shift()
  //console.log(shifted)
      if(shifted==3) { invalidCompanies.push('Amex (American Express)')
        }
      else if(shifted==4) { invalidCompanies.push('Visa')
        }
      else if(shifted==5) { invalidCompanies.push('Mastercard')
       }
      else if(shifted==6) { invalidCompanies.push('Discover')
      }
      else {'company not found'}
}
 
 const uniqueSet = new Set(invalidCompanies);
 const convertedArray = [...uniqueSet];
 return convertedArray;
} 

console.log(idInvalidCardCompanies(batch))