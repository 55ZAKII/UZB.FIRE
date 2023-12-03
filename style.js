// let narx = 10000;

// if (narx < 10000) {
//   console.log('nok');
// } else if (narx >= 10000 && narx < 12000) {
//   console.log('olma');
// } else if (narx >= 12000 && narx < 20000) {
//   console.log('tarvuz');
// } else if (narx >= 20000) {
//   console.log('pomidor');
// } else {
//   console.log('unday meva yoq');
// }

//////////////////////////////////////////////////////////////

// var ball = 100;
// if (ball >= 86 && ball <= 100) {
//   console.log("a");
// } else if (ball >= 61 && ball <= 85) {
//   console.log("b");
// } else if (ball >= 50 && ball <= 60) {
//   console.log("c");
// } else {
//   console.log("faild");
// }

//////////////////////////////////////////////////////////////

// function onefunction(a, b) {
//     return a * b;
//   }

//   console.log(onefunction(500, 2));

//////////////////////////////////////////////////////////////

// function twofunction( a, b, c,) {
//     return `${a}  ${b}  ${c}`
// }

// const a = [1234];
// const b = [5678];
// const c = [90];

// console.log(twofunction(a,b,c));

//////////////////////////////////////////////////////////////

// function threefunction(a) {
//     return a
// }

// var a = '1234567890qwertyuiopASDFGHJKLZXCVBrtyu2345678'

// a = a.match(/[A-z]/g)

// console.log(threefunction(a));

//////////////////////////////////////////////////////////////

// console.log(parseFloat(230.000));

// console.log(parseInt('00402'));

// console.log(parseInt('03.1400'));

////////////////////////////////////////////////////////////

// const testJackpot = (data) => data.every(element => element === data[0]);

// console.log(testJackpot(["@", "@", "@", "@"]));
// console.log(testJackpot(["abc", "abc", "abc", "abc"]));
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));
// console.log(testJackpot(["&&&&", "&&&&", "&&&&", "&&&&"]));
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));

///////////////////////////////////////////////////////

// function reverseAndNot(i) {
//     const reversed = parseInt(i.toString().split('').reverse().join(''));
//     return Number(reversed + '' + i);
//   }

//   console.log(reverseAndNot(222)); // Output: 321123
//   console.log(reverseAndNot(152)); // Output: 251152
//   console.log(reverseAndNot(123456789)); // Output: 987654321123456789

////////////////////////////////////////////////////////////////////

// function insertWhitespace(str) {
//     return str.replace(/([a-z])([A-Z])/g, '$1 $2');
//   }

//   console.log(insertWhitespace('SheWalksToTheBeach'));

///////////////////////////////////////////////////////////////////////

// const meva = ['olma', 'nok', 'behi', 'banan']

// const deleteFun = () =>{

// }
// deleteFun('olma')

/////////////////////////////////////////////////////////////////

// const name = '@dilbek Z@kirj@n@v';
// const res = name.match(/[@]/g);
// console.log(res);

// ////////////////////////////////////////////////

// function findOccurrences(arr, symbol) {
//   let occurrences = [];
//   for (let item of arr) {
//     let chars = Array.from(item);
//     for (let char of chars) {
//       if (char === symbol) {
//         occurrences.push(char);
//       }
//     }
//   }
//   return occurrences;
// }
// const names = ["x@s@n @bdur@z@kov nnnn"];
// const symbol = "@";
// const occurrences = findOccurrences(names, symbol);
// console.log(occurrences);

// ///////////////////////////////////////

// const meva = ["olma", "nok", "behi", "banan"];
// const filteredMeva = meva.filter((fruit) => fruit !== "olma");
// filteredMeva.forEach((fruit) => {
//   console.log(fruit);
// });

// ////////////////////////////////////////////////////////////

// const name = ["x@s@n @bdur@z@@@@@@@@@@@kov"].join().split("").filter((value) => value === "@" || value=='s');
// console.log(name);

// const meva =['olma','nok','behi']

// const funMeva =(str) => {
//        return meva.filter((value) => value !== str)
// }

// console.log(funMeva('olma'));

// const  arr = [1,2,3,5,6,7].map()

console.log(arr);
disturakcha
const  name = ['olma' ,'nok','behi','anor']

const [muydinhon,n,o,l]  = name

// spretor operater
console.log(...name,'malumot','adsa');

const compny = {
  frontDev: [
    {
      name: "muydinhon",
      age: 18,
      id: 1,
      price: 400,
      status: "actice coder",
    },
    {
      name: "muydinhon",
      age: 18,
      id: 2,
      price: 500,
      status: "actice coder",
    },
    {
      name: "muydinhon",
      age: 18,
      id: 3,
      price: 600,
      status: "actice coder",
    },
    {
      name: "muydinhon",
      age: 18,
      id: 4,
      price: 700,
      status: "actice coder",
    },
  ],
  bakendDev: [
    {
      name: "muydinhon",
      age: 18,
      id: 1,
      price: 400,
      status: "actice coder",
    },
    {
      name: "muydinhon",
      age: 18,
      id: 2,
      price: 500,
      status: "actice coder",
    },
    {
      name: "muydinhon",
      age: 18,
      id: 3,
      price: 600,
      status: "actice coder",
    },
    {
      name: "muydinhon",
      age: 18,
      id: 4,
      price: 700,
      status: "actice coder",
    },
  ],
};

console.log(compny.frontDev);

const data = [
  {
    name: "muydinkhon",
    id: 1,
    hobbe: "suzuvchi",
  },
  {
    name: "xusan",
    id: 2,
    hobbe: "uchuvchi",
  },
  {
    name: "zubayir",
    id: 3,
    hobbe: "kamonchi",
  },
  {
    name: "akmalhon",
    id: 4,
    hobbe: "gamer",
  },
];

const deleteFun =(id) => {
   return data.filter((value) => value.id !== id)
}
console.log(deleteFun(1));

const searchFun = (str) => {
  return     data.filter((value)=> value.name.includes(str) || value.hobbe.includes(str))
};

console.log(searchFun("n"));;

Object.seal(object)
object.name='muydinhon'
object.add='xasan'

Object.freeze(object)
object.age=16;
delete(object.name);
console.log(object);

res= object.map((value)=> {
    // return Object.keys(value)
    // return Object.values(value)
    return Object.entries(value)

})
console.log(res);

const SelectFun = (id) => {
    return object.filter((value) => value.id == id)

}

console.log(SelectFun(1));
