//This script manages a guest list application where users can add guests with categories and view them in a list.
const input = document.getElementById('guest-name');
const form = document.getElementById('form');
const button = document.getElementById('button');
const selector = document.getElementById('selector'); 
const list = document.getElementById('guest-list');

// Array to store guest data
// Each guest will be an object with unique properties
let guests = [];

button.addEventListener(`click`, (event) => {

    event.preventDefault()  
    
    const value = input.value  
    // Check if the input is empty
    if (value === ``) {
        alert(`Please enter a guest name.`);
        return
    }
    // Check if the value is not a number
    if (value == parseInt(value)) {
        alert(`Please enter a valid guest name.`);
        return
    }
    // check if the guest are more than 10
    if (value.length > 10) {
        alert(`You can only add up to 10 guests.`);
        return
    }
    // Create a new guest object
    const item = document.createElement(`li`);
    item.textContent = value;

    list.appendChild(item);

    input.value = ``
    let deleteButton = document.createElement('button')
    deleteButton.textContent = `Delete`
    deleteButton.addEventListener(`click`, () => {
        list.removeChild(item)
    })
    item.appendChild(deleteButton)
})