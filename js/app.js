'use strict'

const readTable = ['Apples', 'Bananas', 'Cucumbers', 'Dates', 'Elderberries'];

let readIndex = document.getElementById('array-read-index');

console.log('Read Index:', readIndex);

function readArray(){
  let readIndex = document.getElementById('array-read-index').value;
  let indexValue = readTable[readIndex];
  let returnValue = document.getElementById('array-read-result');
  indexValue ? returnValue.textContent=indexValue : returnValue.textContent = 'Please select a valid index value.  For the given array, valid index values range from 0 to 4';
  
}