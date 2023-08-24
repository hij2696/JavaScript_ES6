// this keyword
console.log(this);

function myFunc() {
  console.log(this);
}
myFunc();

var obj = {
  data : {
    myFunc() {
      console.log(this);
    }
  }
};
console.log(obj.data.myFunc());

function machine() {
  this.name = 'hwang';
}
var object = new machine();

document.getElementById('button').addEventListener('click', function(e) {
  console.log(this);
  var arr = [1,2,3];
  arr.forEach(function(input) {
    console.log(this);
  });
});

var temp1 = {
  names : ['kim', 'lee', 'park'],
  myFunction : function() {
    temp1.names.forEach(function() {
      console.log(this);
    });
  }
};
temp1.myFunction();

// Arrow function
var func = input => input * 5;

func();

var person = {
  name: 'son',
  sayHi : function() {
    console.log('안녕 나는 ' + this.name);
  }
}

// practice
person.sayHi();

var data = {
  data: [1,2,3,4,5],
};

data.plusAll = function() {
  var sum = 0;
  this.data.forEach(function(i) {
    sum += i;
  });
  console.log(sum);
};

data.plusAll();

document.getElementById('button').addEventListener('click', function() {
  setTimeout( () => { console.log(this.innerHTML) }, 1000);
});

// var, let, const
var name1 = 'hwang';
let name2 = 'hwang';
const name3 = 'hwang';

const notebook = { kind : 'LG' };
Object.freeze(notebook);

var age = 30;
window.age = 20;

// template literals, tagged literals
var name = 'hwanginjae';
var str = `hello, My name is ${name}`;

var name = 'hwang';
function dismantle(strings, variables){
  console.log(strings);
  console.log(variables);
}
dismantle`hello. my name is ${name}`;

// spread operator
var arr = ['hello', 'world'];
console.log(...arr);

var str = 'hello';
console.log(...str);

var a = [1,2,3];
var b = [4,5];
var c = [...a, ...b];
console.log(...c);

var d = [1,2,3];
var e = d;
var f = [...a];
e[3] = 4;
console.log(d);
console.log(e);
console.log(f);

var o1 = { a : 1, b : 2 };
var o2 = { ...o1, c : 3 };
console.log(o2);

var o3 = { a : 3, b : 4 };
var o4 = { a : 2, ...o3 };
var o5 = { ...o3, a : 2 };
console.log(o3);
console.log(o4);
console.log(o5);

function plus(a, b, c) {
  console.log(a + b + c);
}
var arrTemp = [10, 20, 30];
plus (arrTemp[0], arrTemp[1], arrTemp[2]); // 주먹구구식 버전
plus.apply(undefined, arrTemp); // 예전 버전
plus (...arrTemp); // 요즘 버전


var person = {
  greeting : function() {
    console.log(this.name + ' hi');
  }
}

var person2 = {
  name: 'injae',
}

person.greeting();
person.greeting.apply(person2);
person.greeting.call(person2);

// default parameter / arguments
function tempFunc() { return 10; }

function plusAll(a, b = tempFunc()) { console.log(a + b); }
plusAll(1, 2);
plusAll(1);

function tempFunction(a, b, c) { console.log(arguments); }
tempFunction(1, 2, 3);

function tempFunction2(a, b, c) {
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
}
tempFunction2(1, 2, 3);

function tempFunction3(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
tempFunction3(1, 2, 3);

// rest parameter

// constructor, prototype
function Machine() {
  this.name = 'Kim';
  this.age = 15;
}
var student1 = new Machine();
var student2 = new Machine();

function Machine2() {
  this.name = 'Kim';
  this.age = 15;
  this.sayHi = function() {
    console.log('hello~ My name is ' + this.name);
  }
}

var student1 = new Machine2();
var student2 = new Machine2();

student2.sayHi();

function Machine3(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log('hello~ My name is ' + this.name);
  }
}

Machine3.prototype.gender = 'man';

var student1 = new Machine3('Park', 15);
var student2 = new Machine3('Kim', 17);

console.log(student1.gender);

function Machine() {
  this.name = 'hwang';
  this.age = 26;
}
Machine.prototype.gender = 'man';

var student = new Machine();

console.log(student);

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log('hi, my name is ' + this.name);
  }
}

var student1 = new Student('Kim', 20);
var student2 = new Student('Park', 21);
var student3 = new Student('Lee', 22);

// reference data type
var name_1 = 'hwang';
var name_2 = name_1;
name_1 = 'park';

var name_1 = { name : 'hwang' };
var name_2 = name_1;
name_1.name = 'park';

var name_1 = { name : 'hwang' };
var name_2 = { name : 'hwang' }; // 위 코드와 비교했을 때 false

var names = { name : 'hwang' };
function changeName(obj) {
  obj.name = 'lee';
}

changeName(names);
console.log(names);

// inheritance (ES5)
var parents = { name : 'Hwang', age : 56 };
var children = Object.create(parents);
children.age = 26;

var grandson = Object.create(children);
console.log(children.age); // 26
console.log(grandson.age); // 26

// inheritance (ES6)
class Parents1 {
  constructor(name) {
    this.name = name;
    // this.sayHi = function() { console.log('hi'); }
  }
  sayHi() {
    console.log('hi');
  }
  sayHello() {
    console.log('hello');
  }
}

var children = new Parents1('hwang');
console.log(children);

console.log(children.__proto__);
console.log(Object.getPrototypeOf(children)); // 위 코드와 동일함

// extends, super
class Grandfather {
  constructor(firstName) {
    this.lastName = 'Hwang';
    this.firstName = firstName;
  }
  sayHi() { console.log('hi grandfater!'); }
}
// var grandfather = new Grandfather('injae');

class Father extends Grandfather {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  sayHi() {
    super.sayHi();
    console.log('hi father!');
  }
}
var father = new Father('kwang', 56);
father.sayHi();

// getter / setter
class Person {
  constructor() {
    this.name = 'Hwang';
    this.age = 26;
  }
  get nextAge() {
    return this.age + 1;
  }
  set setAge(age) {
    this.age = parseInt(age);
  }
}

var newPerson = new Person();
newPerson.setAge = 30;
console.log(newPerson.nextAge);

//destructuring
var arr = [2,3,4];
var [a,b,c] = arr; // 1
var [a,b,c] = [2,3,4]; // 2
var [a,b,c = 10] = [2,3];

var { name, age } = { name : 'hwang', age : 26 };
var { name : changeName = 'park', age = 27 } = { name : 'hwang' };

var names = 'Kim';
var ages = 30;
var obj = { names : names, ages : ages };
var obj = { names, ages };

function myFunc1({ name, age }) {
  console.log(name);
  console.log(age);
}
var obj = { name : 'hwang', age : 26 };
myFunc1({ name : 'hwang', age : 26 });


// 동기 / 비동기 처리, 콜백함수
function firstFunc(inputFunc) {
  console.log(1);
  inputFunc();
}

function secondFunc() {
  console.log(2);
}

firstFunc(secondFunc);

// Promise
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 1000);
});

promise.then(function() {
  console.log('success!');
}).catch(function() {
  console.log('failed..');
}).finally(function() {

});

// Promise 연습문제 1 : HTML 안에 있는 이미지가 로드되면 success, 로드에 실패하면 fail을 콘솔창에 출력
// 아래 코드는 나중에 프로젝트 할 때, 함수로 만들어 유용하게 사용할 수도 있을 것 같음
var imageLoading = new Promise(function(resolve, reject) {
  var img = document.querySelector('#test');
  img.addEventListener('load', function() {
      resolve();
  });
  img.addEventListener('error', function() {
      reject();
  });
  
});

imageLoading.then(function() {
  console.log('success!');
}).catch(function() {
  console.log('fail..');
});

// Promise 연습문제 2 : Ajax 요청이 성공하면 Promise의 then 함수를 이용해서 Ajax로 받아온 인삿말을 콘솔창에 출력
var promise = new Promise((resolve, reject) => {
  $.get('https://codingapple1.github.io/hello.txt')
  .done(function(result) {
    resolve(result);
  });
});

promise.then(function(result) {
  console.log(result);
});

// Promise chaining
// Promise 연습문제 3 : 2번 문제에서 GET 요청 후 .then을 이용해 인삿말을 콘솔창에 출력해 보았는데,
// 이번엔 그 직후 또 다른 경로로 GET 요청을 하고 .then을 이용하여 인삿말을 콘솔창에 출력
var promise = substitueAjax('https://codingapple1.github.io/hello.txt');

promise.then(function(result) {
  console.log(result);
  return substitueAjax('https://codingapple1.github.io/hello2.txt');
}).then(function(result) {
  console.log(result);
});

function substitueAjax(URL) {
  return new Promise((resolve, reject) => {
    $.get(URL)
    .done(function(result) {
      resolve(result);
    });
  });
}

// async, await
async function asyncPlus() {
  var promise = new Promise((resolve, reject) => {
    var carculation = 1 + 1;
    resolve(100);
  });

  var result = await promise;
  console.log(result);
}

asyncPlus();

// asyncPlus().then(function(result) {
//   console.log(result);
// });

// for in / for of 반복문과 enumerable, iterable 속성
// for (var i = 0; i < 3; i++) {} // 일반 반복문
// [1,2,3].forEach(function() { }); // forEach() 반복문 (array 전용)
// for (var key in object) {} // for in 반복문 (object 전용)
// for of 반복문 (iterable 전용)

var obj = { name : 'hwang', age : 20 };

for (var key in obj) {
  console.log(obj[key]);
}


var products = [
  {
    name1 : 'chair',
    price1 : 7000,
  },
  {
    name2 : 'sofa',
    price : 5000,
  },
  {
    name1 : 'desk',
    price3 : 9000,
  },
];

let newValue;
let newKey;

for (let item of products) {
  for (let key in item) {
     //마지막 글자를 숫자로 변환했을 때 NaN이 안나오면 (숫자면)
     if (isNaN(parseInt(key.slice(-1))) == false ) {
       newValue = item[key];
       newKey = key.slice(0, -1); // 맨 뒷 문자 제거 방법
       item[newKey] = newValue;
       delete item[key]; // 원래 있던 key 제거
     }
  }
}

console.log(products);

// symbol 자료형
var symbol = Symbol('explanation');

var height = Symbol('secret height');
var weight = Symbol('secret weight');

var newPerson = { name : 'kim', [height] : 180 };
newPerson.weight = 100;
newPerson[weight] = 200;

for (var key in newPerson) {
  console.log(newPerson[key]);
}

var a = Symbol('Explanation');
var b = Symbol('Explanation');
console.log(a === b);

var c = Symbol.for('Explanation');
var d = Symbol.for('Explanation');

// map, set
var person = new Map();
person.set('name', 'Kim');
person.set('age', 20);
console.log(person);

var person = new Map();
person.set([1,2,3], 'Kim');
person.set('age', 20);

var person = new Map();
person.set('age', 20);

person.get('age'); // 자료 꺼내는 법
person.delete('age'); // 자료 삭제하는 법
person.size; // 자료 몇개인지 알려줌

// Map자료 반복문 돌리기
for (var key of person.keys()) {
  console.log(key);
}

// 자료를 직접 집어넣고 싶으면
var person = new Map([
  ['age', 20],
  ['name', 'Kim']
]);

var attendanceBook = new Set([ 'john' , 'tom', 'andy', 'tom' ]);

attendanceBook.add('sally'); // 자료 더하기 
attendanceBook.has('tom'); // 자료 있는지 확인
attendanceBook.size; // 자료 몇갠지 세기

var attendanceBook = [ 'john' , 'tom', 'andy', 'tom' ];

var newAttendanceBook = new Set(attendanceBook); // Array를 Set으로 바꾸기

attendanceBook = [...newAttendanceBook]; //Set을 Array로 바꾸기

// Web Components : 커스텀 HTML 태그 만들기
class CustomComponent extends HTMLElement {
  connectedCallback() {
    // let customInput = document.createElement('label');
    // this.appendChild(customInput);
    let name = this.getAttribute('name');
    this.innerHTML = `<label>${name} e-mail-input </label><input/>`; // 위에 주석 처리한 코드보다 훨씬 느림
  }
  static get observedAttributes() {
    return ['name'];
  }
  attributeChangedCallback() {
    console.log(this.getAttribute('name'));
  }
}
customElements.define('custom-input', CustomComponent);

// ?./?? 연산자 (optional chaining)
var user = {
  name : 'hwang',
  age : 26,
};

console.log(user.age);
console.log(user?.age);