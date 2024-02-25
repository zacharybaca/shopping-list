// Grab list of items
let listOfItems = document.getElementById('list');

// Grab Input of Form
let inputText = document.getElementById('title');

// Grab Button Inside of Form
let submitButton = document.querySelector('#add-todo > button');

// Add Event Listener on Button Inside of Form
submitButton.addEventListener('click', (e) => {
 // Prevent Form Default Behavior
 e.preventDefault();
 if (inputText.value) {
    // Create New List Item Element
    let listItem = document.createElement('li');
    // Create A New Div That will Hold Value of Text
    let divText = document.createElement('div');
    // Create Edit Button
    let editButton = document.createElement('button');
    // Create Delete Button
    let deleteButton = document.createElement('button');
    // Set Edit Button Text to "edit"
    editButton.innerHTML = 'edit';
    // Set Delete Button Text to "X"
    deleteButton.innerHTML = 'X';
    // Set Div Element Text to Equal Input Value
    divText.innerHTML = inputText.value;
    // Append Div Element to listItem Element
    listItem.appendChild(divText);
    // Append editButton Element to listItem Element
    listItem.appendChild(editButton);
    // Append deleteButton Element to listItem Element
    listItem.appendChild(deleteButton);
    // Append listItem Element to listOfItems
    listOfItems.appendChild(listItem);
    console.log('list: ', listOfItems);
 } else {
    alert('Please Enter a Value in the input box!')
 }
})
