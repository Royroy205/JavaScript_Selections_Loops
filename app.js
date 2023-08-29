// Exercise 1 Section
for(let i = 0; 1 < 100; i++){
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
for(let i = 0; 1 < 100; i++){
   if (1 % 3 == 0 && i % 5 == 0){
    console.log("FUZZBUZZ");
   } else {
    if (i % 3 == 0){
        console.log("FIZZ");
    }
    if (i % 5 == 0){
        console.log("BUZZ");
    }
   } 
}

//Exercise 3 Section
let i = 1;

while (i <= 100){
    let ouput = "";

    if (1 % 3 == 0){
        output += "FIZZ";
    }
    if (i % 5 == 0){
        output += "BUZZ";
    }

    console.log('${i} ${output}');

    i++;

}

let x = 1;
do{
    let ouput = "";

    if (x % 3 == 0){
        output += "FIZZ";
    }
    if (x % 5 == 0){
        output += "BUZZ";
    }

    console.log('${x} ${output}');

    x++;

}while (i <= 100);

//Exercise 4 Section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;

for(let i= 1; i <= n; i++) {
    if(i === value) {
          console.log("Found value!");
          found = true;
          break;
    }
}

if(!found){
    console.log("No value find");
}