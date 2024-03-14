// export default function Todo({task, isDone}) {
//     // props.task = 'Playing UNO';
//     task = 'Play UNO';
//     return (
//         <>
//         <li>{task}</li>
//         </>
//     );
// }

// Conditional rendering option 1:
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>{task} ✔️</li>
//     }
//     else {
//         return <li>{task} ❌</li>
//     }
// }

// Conditional rendering option 2:
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>{task} ✔️</li>
//     }
//     return <li>{task} ❌</li>
// }

// Conditional rendering option 3:
// export default function Todo({ task, isDone }) {
//     return (<li>{task} {isDone ? '✔️' : '❌'}</li>)
// }

// Conditional rendering option 4:
// export default function Todo({ task, isDone }) {
//     return (<li>{task} {isDone && '✔️'}</li>);
// }

// Conditional rendering option 5:
// export default function Todo({ task, isDone }) {
//     return (<li>{task} {isDone || '❌'}</li>);
// }


// Conditional rendering option 6:
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>{task} ✔️</li>
    }
    else {
        listItem = <li>{task} ❌</li>
    }
    return listItem;
}