// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে।
/* var price1 = 20;
let price2 = 30;
const price3 = 40; */
// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে|
/* var num = 0;
while (num <= 100) {
  console.log(num);
  num++;
}
for (let i = 0; i <= 100; i++) {
  console.log(i);
} */
// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
/* let odd = 50;
while (odd < 80) {
  console.log(odd);
} 
for (let i = 51; i <= 80; i += 2) {
  console.log(i);
}*/
// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো|
// function subtraction(num) {}
// let yNumber = [3, 2, 1];
// for (let i = 0; i < yNumber.length; i++) {
//   let result = yNumber[i];
//   console.log(result);
// }
// let num = subtraction(yNumber);
// ১. ফাংশন কি জিনিস। এইটা কি কাজে লাগে এবং কিভাবে ফাংশন ডিক্লেয়ার করতে হয়
// ২. ফাংশনে কেন প্যারামিটার ব্যবহার করা হয়
// ৩. কেন ফাংশন থেকে রিটার্ন করা হয়
// ৪. রিটার্ন এর পর কিছু না লিখলে কি হয়
// ৫. রিটার্ন এর পর কি কি জিনিস লেখা যায়?
// 1.Name
// 2.valiable data
// 3.boolean datatype
// 4;

/* 
৬. এইটা আমরা বলিনি--তারপরেও গুগলে সার্চ দিয়ে দেখো: function declaration vs function expression এই দুইটা মধ্যে ডিফারেন্স কি  */

/* ৭. Arrow function নিয়ে আমরা ফিউচারে শিখবো। এই কোর্স এ ই শিখবো। তারপরেও গুগলে সার্চ দাও: regular function vs arrow function */
// ৮. ফাংশন এবং লুপ এর মধ্যে পার্থক্য কি
// ৯. অবজেক্ট এবং array এর মধ্যে ডিফারেন্স কি?
/* Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values
 */
// ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান পাওয়া যেতে পারে?
// ১১. ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান বের করা যেতে পারে?
/* let object = {
  Name: "Rs Rahaman",
  Age: 24,
  FatherName: "Sultan",
  MatherName: "Jesmin",
};
console.log(object.FatherName); */
/* 
১২.একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও।  */
/* let object = {
  Name: "Rs Rahaman",
  Age: 24,
  FatherName: "Sultan",
  MatherName: "Jesmin",
};
console.log(Object.values(object)); */
/* 
এছাড়াও আজকের ভিডিওতে চারটা প্রব্লেম এর কথা বলেছি। সেগুলা মাস্ট প্রাকটিস করো। নিজে নিজে চিন্তা করো  */
/* 
১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে  */
/*To convert Celsius to Fahrenheit multiply by 1.8 and add 32. */
/* function convertCalsiusToFahrenheit(num) {
  let Calsius = num;
  let Fahrenheit = num * 1.8;
  Fahrenheit += 32;
  console.log(Fahrenheit);
}
let num = convertCalsiusToFahrenheit(1); */
/* 

২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। */
/* function fahrenheitHeitToCalsius(num) {
  let Fahrenheit = num;
  Fahrenheit -= 32;
  let result = Fahrenheit * 0.5556;
  console.log(result);
}
let num = fahrenheitHeitToCalsius(2); */
/* ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।  */
/* function marks(mark) {
  if (mark >= 80) {
    console.log("A+");
  } else {
    if (mark >= 70) {
      console.log("A");
    } else if (mark >= 60) {
      console.log("A-");
    } else if (mark >= 50) {
      console.log("B");
    } else if (mark >= 40) {
      console.log("C");
    } else if (mark >= 33) {
      console.log("D");
    } else {
      console.log("F");
    }
  }
}
let mark = marks(54); */
/* ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।  */
/* 
১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  */
// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।
/* ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।  */
/*  ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে। */
/* 
৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  */
/* 
৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।  */
/* ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */
// ===========================================
// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে।
/* var price1 = 20;
let price2 = 30;
const price3 = 40; */
// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে|
/* var num = 0;
while (num <= 100) {
  console.log(num);
  num++;
}
for (let i = 0; i <= 100; i++) {
  console.log(i);
} */
// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
/* let odd = 50;
while (odd < 80) {
  console.log(odd);
} 
for (let i = 51; i <= 80; i += 2) {
  console.log(i);
}*/
// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো|
// function subtraction(num) {}
/* let yNumber = [3, 2, 1];
for (let i = 0; i < yNumber.length; i++) {
  let result = yNumber[i];
  console.log(result);
} */
// let num = subtraction(yNumber);
// ১. ফাংশন কি জিনিস। এইটা কি কাজে লাগে এবং কিভাবে ফাংশন ডিক্লেয়ার করতে হয়
// ২. ফাংশনে কেন প্যারামিটার ব্যবহার করা হয়
// ৩. কেন ফাংশন থেকে রিটার্ন করা হয়
// ৪. রিটার্ন এর পর কিছু না লিখলে কি হয়
// ৫. রিটার্ন এর পর কি কি জিনিস লেখা যায়?
// 1.Name
// 2.valiable data
// 3.boolean datatype
// 4;
/* 
৬. এইটা আমরা বলিনি--তারপরেও গুগলে সার্চ দিয়ে দেখো: function declaration vs function expression এই দুইটা মধ্যে ডিফারেন্স কি  */
/* ৭. Arrow function নিয়ে আমরা ফিউচারে শিখবো। এই কোর্স এ ই শিখবো। তারপরেও গুগলে সার্চ দাও: regular function vs arrow function */
// ৮. ফাংশন এবং লুপ এর মধ্যে পার্থক্য কি
// ৯. অবজেক্ট এবং array এর মধ্যে ডিফারেন্স কি?
/* Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values
 */
// ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান পাওয়া যেতে পারে?
// ১১. ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান বের করা যেতে পারে?
/* let object = {
  Name: "Rs Rahaman",
  Age: 24,
  FatherName: "Sultan",
  MatherName: "Jesmin",
};
console.log(object.FatherName); */
/* 

১২.একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও।  */
/* let object = {
  Name: "Rs Rahaman",
  Age: 24,
  FatherName: "Sultan",
  MatherName: "Jesmin",
};
console.log(Object.values(object)); */
/* 
এছাড়াও আজকের ভিডিওতে চারটা প্রব্লেম এর কথা বলেছি। সেগুলা মাস্ট প্রাকটিস করো। নিজে নিজে চিন্তা করো  */
/* 
১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে  */
/*To convert Celsius to Fahrenheit multiply by 1.8 and add 32. */
/* function convertCalsiusToFahrenheit(num) {
  let Calsius = num;
  let Fahrenheit = num * 1.8;
  Fahrenheit += 32;
  console.log(Fahrenheit);
}
let num = convertCalsiusToFahrenheit(1); */
/* 

২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। */
/* function fahrenheitHeitToCalsius(num) {
  let Fahrenheit = num;
  Fahrenheit -= 32;
  let result = Fahrenheit * 0.5556;
  console.log(result);
}
let num = fahrenheitHeitToCalsius(2); */
/* ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।  */
/* function marks(mark) {
  if (mark >= 80) {
    console.log("A+");
  } else {
    if (mark >= 70) {
      console.log("A");
    } else if (mark >= 60) {
      console.log("A-");
    } else if (mark >= 50) {
      console.log("B");
    } else if (mark >= 40) {
      console.log("C");
    } else if (mark >= 33) {
      console.log("D");
    } else {
      console.log("F");
    }
  }
}
let mark = marks(54); */
/* ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।  */
// প্রাকটিস চ্যালেঞ্জ-৩ টা:
/* ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
 */
/* ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
 */
/* ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
 */

// Extra প্রাকটিস চ্যালেঞ্জ|

/* 
১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
*/
/* function multiplication13(a, b, c, d, e, f, g, h, i, j) {
  var multi1 = a * 13;
  var multi2 = b * 13;
  var multi3 = c * 13;
  var multi4 = d * 13;
  var multi5 = e * 13;
  var multi6 = f * 13;
  var multi7 = g * 13;
  var multi8 = h * 13;
  var multi9 = i * 13;
  var multi10 = j * 13;
  console.log(multi1);
  console.log(multi2);
  console.log(multi3);
  console.log(multi4);
  console.log(multi5);
  console.log(multi6);
  console.log(multi7);
  console.log(multi8);
  console.log(multi9);
  console.log(multi10);
  return multi1;
}
let numbers = multiplication13(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */

// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
/* function multiplication13(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    let tero = element * 13;
    console.log(tero);
  }
  return numbers;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers = multiplication13(arr); */
/* function namta(number) {
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(result);
  }
}
namta(13); */

/* ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
 */
/* function convertNameToLowercase(convertToUpperCase) {
  let convertToLoweCase = convertToUpperCase.toLowerCase();
  console.log(convertToLoweCase);
  return convertToLoweCase;
}
let text = convertNameToLowercase("Rs Rahaman");
let convertToUpperCase = text.toUpperCase(); */

/* ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।
 */
/* function fullName(num1, num2) {
  let yourName = num1 + num2;
  return yourName;
}
let name = fullName("rs ", "rahaman");
console.log(name); */

/* ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।
 */
/* function square(numbers) {
  let number = numbers * numbers;
  return number;
}
let numbers = square(10);
console.log(numbers); */

/* 
৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা : 
*/

/* 
৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
*/

/* let books = [120, 497, 23, 200, 89, 56, 20, 500];
for (let i = 0; i < books.length; i++) {
  let element = books[i];
  if (element < 200) {
    console.log(element);
  } else {
    continue;
  }
}
let books2 = [120, 497, 23, 200, 89, 56, 20, 500];
for (var i = 0; i < books2.length; i++) {
  var book = books2[i];
  if (book >= 200) {
    continue;
  }
  console.log(book);
} */
/* 
৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।  
/* 
/* let learned = ["html", "CSS", "bootstrap", "Tailwind", "Javascript"];
for (let i = 0; i < learned.length; i++) {
  let element = learned[i];
  console.log(element);
} */

/* ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও?
 */
/* let mobiles = ["Iphone", "itel", "Qphone", "Nokia"];
while (mobiles <= 0) {
  mobiles.length;
  mobiles++;
  console.log(mobiles);
} */
/* ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
 */
/* for (let i = 30; i <= 86; i++) {
  if (i > 44) {
    break;
  }
  console.log(i);
} */
/* 
১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
 */
/*
let num = "rs rahaman";
let age = 20;
let yes = ture; */

/* 
২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
 */
/* 
৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 
 */
/* 
৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
 */
/* let num1 = 20;
let num2 = 30;
// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num1 == num2);
// console.log(num1 != num2);
// console.log(num1 <= num2);
// console.log(num1 >= num2); */

/* 
৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
 */
/* let video = prompt("Enter your exam number");
let practic = prompt("Enter your exam number");
if (video > 70 && practic > 80) {
  document.write("you w`ll get a job");
} else if (video < 70 || practic > 80) {
  document.write("gating a job posible");
} else {
  document.write("not job for you");
} */
/* 
৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 
 */
/* let yonger = 20;
let small = 30;
if (yonger > small) {
  console.log("you know math");
} else if (yonger === small) {
  console.log("you need to math");
} else {
  console.log("you need to mathmatics");
} */
/* 
৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
 */
/* let num = 7;
while (num <= 19) {
  console.log(num);
  num += 2;
} */
/* 
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করতে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
 */
/*
let arr = [220, 240, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 230];
 console.log(arr.length);
console.log((arr[3] = "rs"));
console.log(arr.unshift(11, 22));
// console.log(arr.push(11, 22));
console.log(arr.pop(13, 14));
console.log(arr); */
/* 
৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
 */
/* let arr = [220, 240, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 230];
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  console.log(element);
} */
/* 
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
 */
/*
sestem 1
let arr = [220, 240, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 230];
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  if (element > 80) {
    console.log(element);
    continue;
  }
}
// sestem 2
 let arry = [220, 240, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 230];
for (let i = 0; i < arry.length; i++) {
  let largest = [0];
  let element = arry[i];
  if (element > 80) {
    largest = element;
    console.log(largest);
  }
} */

/* 
১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
 */
// let multiply = [1, 8, 5];
// let temp = [1];
// for (let i = 0; i < multiply.length; i++) {
//   let element = multiply[i];
//   // console.log(element);
//   if (temp.length < multiply.length) {
//     let gonon = temp * element;
//     console.log(gonon);
//   }
// }
/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।
 */
/* let obj = {
  Name: "Rs Abdur Rahaman Sultany",
  Age: 24,
  Address: "Kaneshtala Sadar Dakhshin Comilla",
  Thana: "Sadar Dakhshin Comilla",
};
let change = (obj.Address = "Dhaka");
console.log(obj); */
/*
/* 
১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে feet নিবে, আর রিটার্ন করবে inch, অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */
// cnvert feet to inch
/* function feetToInch(pushFeet) {
  let feet = pushFeet;
  let inch = 12;
  let getInch = pushFeet * 12;
  console.log(getInch);
  return getInch;
}
let pushFeet = feetToInch(55); */
// convert farenheit to calsius
/* function calsiusToFarenheit(getCalsius) {
  const calsius = getCalsius;
  const farenheit = 1.8;
  let calsiusAndFarenheit = getCalsius * farenheit;
  let add = 32 + calsiusAndFarenheit;
  console.log(add);
  return add;
}
let getCalsius = calsiusToFarenheit(60); */
/* 
২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। */
// centimeter to milimeter
/* function centimeterToMeter(pushCentimeter) {
  let centimeter = pushCentimeter;
  let meter = 0.01;
  let getMeter = centimeter * meter;
  console.log(getMeter);
  return getMeter;
}
let pushCentimeter = centimeterToMeter(500);
 */
/* 
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

 */
/* function paperRequirements(numbers) {
  let book1Pages = 100;
  let book2Pages = 200;
  let book3Pages = 300;
  for (let i = 0; i < numbers.length; i++) {
    // let element = numbers[i];
    let totalPageForBook1 = book2Pages * numbers[0];
    let totalPageForBook2 = book3Pages * numbers[1];
    let totalPageForBook3 = book1Pages * numbers[2];
    let totalPageForAllBooks =
      totalPageForBook1 + totalPageForBook2 + totalPageForBook3;
    console.log(totalPageForAllBooks);
    return totalPageForAllBooks;
  }
}
let booksAmount = [5, 5, 5];
let numbers = paperRequirements(booksAmount); */

/* function paperRequirements(fbook, sbook, tbook) {
  let book1 = fbook * 100;
  let book2 = sbook * 200;
  let book3 = tbook * 300;
  let totalBook = book1 + book2 + book3;
  return totalBook;
}
let totalBookAmount = paperRequirements(2, 3, 4);
console.log(totalBookAmount); */

/* 
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। */
/* function bestFriend(friends) {
  let longName = friends[0];
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    // console.log(friend);
    if (longName.length < friend.length) {
      longName = friend;
    }
  }
  return longName;
}
let friendsName = [
  "Jobayar",
  "Khalid Hossain",
  "Rs Abdur Rahaman Sultany",
  "RsAbdurRahamanSultany",
  "Sumaya",
];
let friends = bestFriend(friendsName);
console.log(friends);*/
/* 
৫.একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */
/* let numbers = [10, 0, 20, 30, -20, 40, 50];
let positiveNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number > positiveNumber) {
    positiveNumber = number;
  } else if (number < 0) {
    break;
  }
  console.log(number);
} */
