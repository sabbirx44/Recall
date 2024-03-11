// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json()) // .json is not similar but close to JSON.parse
//     .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}