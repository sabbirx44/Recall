// 1. Where to be added
const langList = document.getElementById('lang-list');
// 2. What to be added
const newLi = document.createElement('li');
newLi.innerText = 'Rust';
// 3. Add the child
langList.appendChild(newLi);

// Add div

/* System - 1
const body = document.getElementById('body');

const div = document.createElement('div');

const h1 = document.createElement('h1');
h1.innerText = 'Frameworks we want to learn - ';
div.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'MongoDB';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Express.js';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'React';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Node';
ul.appendChild(li4);

div.appendChild(ul);
parentBody.appendChild(div); */

// System 2
const body = document.getElementById('body');

const div = document.createElement('div');
div.innerHTML = `
<h1>Frameworks we want to learn -</h1>
<ul>
    <li>MongoDB</li>
    <li>Express.js</li>
    <li>React</li>
    <li>Node</li>
</ul>
`
body.appendChild(div);