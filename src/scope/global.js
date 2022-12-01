//variables

var a; //estamos declarado
var b='b'; //declaramos /asignamos
b='bb'; // reasignación
var a='aa';// redeclaración

//* global scope
var fruit='Apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countrie(){
    country='Ecuador'; // global
    console.log(country);
}
countrie();
console.log(country);
