const sections = document.querySelectorAll('section');
for (const section of sections) {
    //console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.borderRadius = '10px';
    section.style.padding = '10px';
    section.style.marginBottom = '10px';
    
}

// const topics = document.getElementById('topics');
// topics.style.backgroundColor = 'pink';

const topics = document.getElementById('topics');
topics.classList.add('gold-bg');