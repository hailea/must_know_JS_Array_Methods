// const fruits = "Orange";

// switch(fruits){
//     case 'Orange':
//         console.log("This is Orange!!!");
//         break;
//     case 'Papaye':
//         console.log("This is Papaye!!!");
//         break;
//     case 'Apple':
//         console.log("This is Apple!!!");
//         break;
//     default:
//         console.log("None of the above");

//}

// //Scope Important
// let age = 30, height=5.6;
// if(true){
// age=40; height = 6.5; let name = "Tom";
//     console.log("First", age, height,name);
    
// if(true){
//     height = 7.5;
//         console.log("Second", age, height, name);
//     }
// } 
// console.log("Third",age, height,name); 


// //Hoisting Part I
// console.log(area(4,6)) //cannot access area before Initialization
// const area = function(x,y){
//     return x*y;
// }
//Hoisting Part II hoisting works if it is declared as function myFunc(){}
// console.log(area(4,6)) //access area before Initialization
// function area(x,y){
//     return x*y;
// }
//Works fine because the declaration is at the top

// function area(x,y){
//     return x*y;
// }
// console.log(area(4,6));

// //Hoisting Part III ... This works fine
// const area = function(x,y){
//     return x*y;
// }
// console.log(area(4,6))

// // Recursion
// var x = 0;
// while (x < 10) { // "x < 10" is the loop condition
//    // do stuff
//    x++;
// }
// //This can be converted
// function loop(x) {
//     if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//       return;
//     // do stuff
//     loop(x + 1); // the recursive call
//   }
//   loop(0);

//Default value


