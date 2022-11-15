// THE PROGRAMS SOLVED USING ARROW FUNCTION 

//PRINT THE ODD NUMBERS IN ARRAY

let array=[1,2,3,4,5,6,7,8,9,10];
let getoddnumbers = (array) =>{
    for (let i=0;i<array.length;i++){
        if (array[i]%2!=0){
            console.log(array[i])
        }
    }
}

console.log(getoddnumbers(array))

//OUTPUT

// 1
// 3
// 5
// 7
// 9

// B. TO CONVERT SRTINGS TO TITLE CAPS IN STRING ARRAY

let titlecaps = (string) => {
    string = string.toLowerCase().split(' ');                        // converts string to lowercase and splits them
    for (var i = 0; i < string.length; i++) {                       // looping through the string array
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);    
    }
    console.log(string.join(' '));
  }
  
  titlecaps("to convert string to title caps"); 

//OUTPUT

  //To Convert String To Title Caps

  
 //C. SUM OF ALL NUMBERS IN THE ARRAY
 
 let sumofarray = (array3)=>{
    let sum=0
    for (let i=0;i<array3.length;i++){    //for loop to loop through the array 
        sum+=array3[i]
    }
    console.log(sum)                      // displays sum of the array
  }
  
  sumofarray([1,2,3,4,5])         
  
  // OUTPUT
  
  //15

  // D.RETURN ALL PRIME NUMBERS IN THE ARRAY

let primes = [];                        //creates an empty array to store the prime values in array
let isPrime = (num)=>{
  if(num < 2) return false;             //pre-condition to see if the value is greater than 1
  for (let k = 2; k < num; k++){        //looping mechanism 
    if(num % k == 0){                   // condition to see whether a value is prime or not
      return false;
    }
  }
  return true;
}
let getprimenumbers =(array)=>{   //function to find prime numbers
    for(arr of array){
        let item = isPrime(arr);         //function call to see if a particular value is prime or not
        if (item) {
            primes.push(arr);
        }
    }
    console.log(primes)                  //returns the prime values in array
}

getprimenumbers([2,3,4,5,6,7,8,9])

//OUTPUT

// [ 2, 3, 5, 7 ]


// E.RETURN ALL PALINDROMES IN ARRAY


palin=[]                                                //empty array to store palindromes from array
let getpalindrome =(array)=>{
    for(i=0;i<array.length;i++){
        let rev= array[i].split('').reverse().join(''); //reverses the string
        if(array[i]==rev){                              //condition to see if palindrome or not
        palin.push(array[i])
    }
}
    console.log(palin)
}

getpalindrome(['maam','ganesh','hoover','oppo'])

// OUTPUT

// [ 'maam', 'oppo' ]