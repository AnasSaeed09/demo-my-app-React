import React from 'react'

var newData ={};
 let count=0;
export function excerciseComplete(fromData){
  newData= fromData;
}
export function exportTheValue( value){
        const functionName= `example${value}`;
         let functionResult=null;
        if(typeof window[functionName]==='function'&& functionName.includes(value)){
         functionResult = window[functionName]();
        }
        else {
          console.log("Fucntion not found for value:", value);
        }
    return functionResult;
       
}
function display(value){
  const newLegend =document.querySelector('.User_info');
  newLegend.textContent= `Example ${value}`;
}

// All examples function here ............

 window.example1=function example1(){
     const newForm = new Object();
     newForm.fname = newData.fname;
     newForm.lname = newData.lname;
     newForm.age = newData.age; 
     newForm.city = newData.city; 
    display( 1);
     return newForm;
}
window.example2=function example2(){
     const person = newData;
     person.fname='Ali';
     person.age = 10;
     person.lname='ahmad'
     person.city='Islamabad'
     display(2);
     return person;
}

window.example3=function example3(){
  function person(formData){
    this.fname= formData.fname;
    this.lname=formData.lname;
    this.age = formData.age;
    this.city=formData.city;
  
  }
  const newPerson =new person(newData); 
  display(3);
  return newPerson;
}

window.example4=function example4(){
  const person = {
    fname: "John",
    lname: "Doe",
    age: 50,
    city: "Murreee"
  };
  person.nationality = "English";
  count++;
  if(count===1){
  var newLabel = document.createElement('label');
newLabel.textContent='Nationality :';
var newSpan = document.createElement('span');
 newSpan.textContent=person.nationality ;
 var parentElement = document.querySelector('.info-item:last-child');
 parentElement.appendChild(newLabel);
  parentElement.appendChild(newSpan);
  parentElement.appendChild(document.createElement('br'));
  }
  display(4);
  delete person.age;
  
  return person;
}


window.example5 = function example5() {
  function Person(first, last, age, city) {
    this.fname = first;
    this.lname = last;
    this.age = age;
    this.city = city;
  }

  Person.prototype.nationality = "English";


  const myFather = new Person("John", "Doe", 50, "Los Angeles");
  display(5);
 return myFather;

}
window.example6 = function example6() {
  const person = {
      fname: "Ben",
      lname: "Tenison",
      age: 20,
      city: "Los Angeles"
  };
  person.name = function() {
      person.fname = person.fname.toUpperCase();
      person.lname = person.lname.toUpperCase();
  };
  person.name(); 
  display( 6);
  return person;
}

window.example7=function example7(){
  function Person(first, last, age) {
    this.fname = first;
    this.lname = last;
    this.age = age;
    
  }

  Person.prototype.city = "Suplex city";


  const myFather = new Person("John", "Cena", 50);
  display(7);
 return myFather;
}

window.example8=function example8(){
  function person(first,last,city){
    this.fname=first;
    this.lname=last;
    this.city=city;
  }
  const myFather = new person("Brock","Lesnar","Chicago");
  person.prototype.age=50;
  
  display(8);
  return myFather;
}

window.example9=function example9(){
  const myObj = {
    name: "John",
    age: 30,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
    }
  }
let pro=new Promise((resolve,reject)=>{
  resolve();
  reject();
})
pro.then(() => {
  setTimeout(() => {
    document.querySelector(".User_info").textContent = myObj.cars["car2"]; 
  }, 3000);
}).then(() => {
  setTimeout(() => {
    document.querySelector(".User_info").textContent = myObj.cars["car2"]; 
  }, 6000);
});
display(9);
  
  return myObj;
}

window.example10=function example10(){
  const person = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  }
  let p1 =new Promise((resolve,reject)=>{
    resolve();
    reject();
  })
  p1.then(()=>{
    setTimeout(()=>{
      document.querySelector(".User_info").innerHTML = txt;
    },3000);
  } ,document.querySelector(".User_info").innerHTML = "Request Rejected!"
)
  
  display(10);
  return person;
}



