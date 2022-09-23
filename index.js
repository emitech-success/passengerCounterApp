/*
//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//display the value to reflect the new count
*/

let count = 0
document.getElementById('save-item').addEventListener('click', saveCount);
document.getElementById('increment').addEventListener('click', increment);
const saveNumber = document.getElementById('decrement').addEventListener('click', decrement);

function increment() {
  count++
  document.getElementById('count-item').innerText = count;
  // count = 0
}
function decrement() {
  if (count >0) {
    count--
    document.getElementById('count-item').innerText = count;
    }
  // count--
  // document.getElementById('count-item').innerText = count;
}

function saveCount() {
  let saveEl = document.getElementById('welcome')
  let saveCountEl = ` ${count} - `;
  saveEl.innerText += saveCountEl;
  document.getElementById('count-item').innerText = 0;
  count = 0
}



