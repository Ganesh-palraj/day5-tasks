//PROGRAMS SOLVED IN ANONMYOUS FUNCTION

// A. PRINT ODD NUMBERS IN ARRAY

let get_odd_numbers = function(array) {
    for (let i=0;i<array.length;i++){
        if (array[i]%2!=0){
            console.log(array[i])
            }
    }
}

get_odd_numbers([1,2,3,4,5,6,7,8,9,10])

// oOUTPUT FOR ODD NUMBERS IN ARRAY
//anonymous function

// 1
// 3
// 5
// 7
// 9

// B. TO CONVERT SRTINGS TO TITLE CAPS IN STRING ARRAY

let titlecaps = function(string) {
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
 
 let sumofarray = function(array3){
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
let isPrime = function(num){
  if(num < 2) return false;             //pre-condition to see if the value is greater than 1
  for (let k = 2; k < num; k++){        //looping mechanism 
    if(num % k == 0){                   // condition to see whether a value is prime or not
      return false;
    }
  }
  return true;
}
let getprimenumbers = function(array){   //function to find prime numbers
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
let getpalindrome = function(array){
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

// F.RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE

let getmedian = function(ar1,ar2){                //creating an anonymous function with two arrays
  if(ar1.length==ar2.length){                     //checker to see if arrays are of same length
      let ar3 = ar1.concat(ar2).sort((a,b)=>a-b)  //concatenating arrray2 in array1 and sorting it
      let v1=(ar3.length)/2                       //finding middle values since it is even
      let v2=v1-1
      var median=(ar3[v1]+ar3[v2])/2              //finding median
  }
  console.log("The Median of the two sorted array is" ,median)
}

getmedian([1,3,5,7],[2,4,6,8])  //1,2,3,4,5,6,7,8   //calling get median function

//OUTPUT

// The Median of the two sorted array is 4.5

// G. REMOVE DUPLICATES FROM THE ARRAY


let original=[]                                      //array to store original values
let duplicates=[]
let noduplicates = function(array){                  //anonymous function
    for(arr of array){                               //looping mechanism to get the data
        if(original.includes(arr)){                  //condition to find the duplicates
            duplicates.push(arr)
        }else{
            original.push(arr)
        }
    }
    console.log("The array without duplicates is",original)
}

noduplicates([1,2,3,3,3,3,1,2,2,1,4])                  //function call

// OUTPUT

// The array without duplicates is [ 1, 2, 3, 4 ]

// H. ROTATE AN ARRAY K TIMES 

let rotatearray= function(array,k){
  let rotatedarray=[]
  let n = array.length                      //if rotation more than array size the rotation starts repeating
  k=k%n                                     //to see if the rotation exceeds size of array 
  for(let i=0;i<n;i++){
      if(i<k){                              //printing the rightmost element
          rotatedarray.push(array[n+i-k])
      }else{
          rotatedarray.push(array[i-k])       
      }
  }
  console.log("The Rotated array is",rotatedarray)                                          
}

rotatearray([1,2,3,4,5],2)

// OUTPUT

// The Rotated array is [ 4, 5, 1, 2, 3 ]

//ALL OUTPUT AS DISPLAYED 

// 1
// 3
// 5
// 7
// 9
// To Convert String To Title Caps
// 15
// [ 2, 3, 5, 7 ]
// [ 'maam', 'oppo' ]
// The Median of the two sorted array is 4.5
// The array without duplicates is [ 1, 2, 3, 4 ]
// The Rotated array is [ 4, 5, 1, 2, 3 ]


