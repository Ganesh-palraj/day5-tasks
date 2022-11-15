//PROGRAMS SOLVED IN IIFE FUNCTION

// a. PRINT ODD NUMBERS IN ARRAY

(function(array2){
    array2.forEach((data) => {   //for each loop to feed data individually
        if (data%2!=0){          // condition
            console.log(data)
            }
        })
})([1,2,3,4,5,6,7,8,9,10]);

//OUTPUT

// 1
// 3
// 5
// 7
// 9

// B. TO CONVERT SRTINGS TO TITLE CAPS IN STRING ARRAY

(function(string){
    string = string.toLowerCase().split(' ');                        // converts string to lowercase and splits them
    for (var i = 0; i < string.length; i++) {                       // looping through the string array
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);    
    }
    console.log(string.join(" "))
})("to convert string to title caps");

// OUTPUT

// To Convert String To Title Caps

 //C. SUM OF ALL NUMBERS IN THE ARRAY
 
(function(array3){
    let sum=0
    for (let i=0;i<array3.length;i++){    //for loop to loop through the array 
        sum+=array3[i]
    }
    console.log(sum)                      // displays sum of the array
  })([1,2,3,4,5]);
  
          
  
  // OUTPUT
  
  //15

  // D.RETURN ALL PRIME NUMBERS IN THE ARRAY

  (function(array){
    let primes=[]                      //empty array to save prime in array
    array.forEach((data)=>{  
        if(data<2){                    //pre-condition to find prime
            return false
        }
        else{          
        for(let i=2;i<data;i++){       //looping mechanism
            if(data%i==0){             //condition to see if a value is prime or not
                return false
            }
        }
    }
    primes.push(data)
    })
console.log(primes)
}([2,3,4,5,6,7,8,11,13,15]));

// OUTPUT
// [ 2, 3, 5, 7, 11, 13 ]

// E.RETURN ALL PALINDROMES IN ARRAY


(function(array){
    palin=[]                                                //empty array to store palindromes from array
    array.forEach((data)=>{
        let rev= data.split('').reverse().join(''); //reverses the string
        if(data==rev){                              //condition to see if palindrome or not
        palin.push(data)
    }
    })
    console.log(palin)
}(['maam','ganesh','hoover','oppo']));

// OUTPUT

// [ 'maam', 'oppo' ]

// F.RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE

(function(ar1,ar2){                                 //creating an IIFE function with two arrays
    if(ar1.length==ar2.length){                     //checker to see if arrays are of same length
        let ar3 = ar1.concat(ar2).sort((a,b)=>a-b)  //concatenating arrray2 in array1 and sorting it
        let v1=(ar3.length)/2                       //finding middle values since it is even
        let v2=v1-1
        var median=(ar3[v1]+ar3[v2])/2              //finding median
    }
    console.log("The Median of the two sorted array is" ,median)
}([1,3,5,7],[2,4,6,8]))

 //1,2,3,4,5,6,7,8   //calling get median function

//OUTPUT

// The Median of the two sorted array is 4.5

// G. REMOVE DUPLICATES FROM THE ARRAY



(function(array1){                        
    let original=[]                      //array to store original values
    let duplicates=[]
    for(let i=0;i<array1.length;i++){                   //looping mechanism to get the data
        if(original.includes(array1[i])){      //condition to find the duplicates
            duplicates.push(array1[i])
        }else{
            original.push(array1[i])
        }
    }
    console.log("The array without duplicates is",original)
}([1,2,3,3,3,3,1,2,2,1,4]));


// OUTPUT

// The array without duplicates is [ 1, 2, 3, 4 ]

// H. ROTATE AN ARRAY K TIMES 

(function(array1){                       //IIFE Function
    let rotatedarray=[];
    let n = array1.length;   
    let k=2;                   //if rotation more than array size the rotation starts repeating
    k=k % n;                                     //to see if the rotation exceeds size of array 
    for(let i=0;i<n;i++);{
        if(i<k){                              //printing the rightmost element
            rotatedarray.push(array1[n+i-k]);
        }
        else{
            rotatedarray.push(array1[i-k]);       
        };
    };
    console.log("The Rotated array is",rotatedarray)                                          
}([1,2,3,4,5]));



// OUTPUT

// The Rotated array is [ 4, 5, 1, 2, 3 ]

   