const divs = document.querySelectorAll('div');
for (const div of divs) {
    //console.log(div);
    div.style.border = '2px solid steelblue';
    div.style.borderRadius = '10px';
    div.style.padding = '10px';
    div.style.marginBottom = '10px';
    
}

// const topics = document.getElementById('full-stack');
// topics.style.backgroundColor = 'pink';

const topics = document.getElementById('full-stack');
topics.classList.add('gold-bg');