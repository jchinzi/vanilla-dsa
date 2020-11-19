'use strict'

const readTable = ['Anteater', 'Banana Slug', 'Capybara', 'Dingo', 'Echidna'];

let readIndex = document.getElementById('array-read-index');

console.log('Read Index:', readIndex);

function readArray(){
  let readIndex = document.getElementById('array-read-index').value;
  let indexValue = readTable[readIndex];
  let returnValue = document.getElementById('array-read-result');
  indexValue ? returnValue.textContent=indexValue : returnValue.textContent = `Please select a valid index value.  For the given array, valid index values range from 0 to ${readTable.length-1}`;
  
}