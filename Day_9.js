// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.

document.getElementById("divId").innerText = "the div content is changed"

// Task 2: Select an HTML element by its class and change its background color.


document.querySelector(".divClass").style.backgroundColor = "green"

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.

const newDiv = document.createElement('div')
newDiv.textContent = "New Div is created using JavaScript createElement property"
document.body.appendChild(newDiv)

// Task 4: Create a new li element and add it to an existing ul list.

const Newli = document.createElement('li')
Newli.innerHTML = "Five"
document.querySelector('.listContainer').appendChild(Newli)


// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.

const removePara = document.getElementById('removePara')
removePara.remove(removePara)

// Task 6: Remove the last child of a specific HTML element.

const parentElement = document.querySelector('.listContainer')
parentElement.removeChild(parentElement.lastChild) // I will remove the last li in ul which is we named five


// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

document.querySelector('img').setAttribute("src", "newImage.jpg")


// Task 8: Add and remove a CSS class to/from an HTML element.

const element = document.getElementById("task8")
element.classList.add("newClass")
element.classList.add("oldClass")

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const changeBtnText = document.querySelector(".changeBtnText")


changeBtnText.addEventListener("click",function () {
    changeBtnText.textContent ="Text is changed"
})

// Task 10: Add a mouseover event listener to an element that changes its border color.

changeBtnText.addEventListener("mouseover",function () {
    changeBtnText.style.borderColor ="red"
})