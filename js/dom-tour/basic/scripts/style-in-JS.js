const divs = document.querySelectorAll('div');
for (const div of divs) {
    //console.log(div);
    div.style.border = '2px solid steelblue';
    div.style.borderRadius = '10px';
    div.style.padding = '10px';
    div.style.marginBottom = '10px';
    
}

// const fullStack = document.getElementById('full-stack');
// fullStack.style.backgroundColor = 'gold';

const fullStack = document.getElementById('full-stack');
fullStack.classList.add('gold-bg');

const greet = document.getElementById('greet');
greet.classList.add('blue-bg');
