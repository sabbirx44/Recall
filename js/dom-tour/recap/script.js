/*

1. Get element(s) from DOM:
    i. getElementById
    ii. getElementByClassName
    iii. querySelector
    iv. querySelectorAll

2. Dynamically add element to the DOM 
    i. document.createElement
    ii. use innerHTML

4. Get and set value from/to a dom element
    i. use innerText
    ii. use value(input, textArea)

5. addeventListener (event handler) - click, focus, blur, change, keyup, down

6. Use function to reduce duplicate code

7. Event Bubble and delegate
*/

const elements = document.querySelectorAll('.parent .child span');
elements.forEach(element => {
    console.log(element.textContent);
});