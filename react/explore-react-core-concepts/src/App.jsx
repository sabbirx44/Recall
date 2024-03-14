import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Movies from './Movies'

// Component
function App() {
  const actors = ['Razzak', 'Bapparaz', 'Jashim', 'Alamgir', 'Tele Samad']
  
  const singers = [
    { name: 'Habib', hitSong: 'Nodi' },
    { name: 'Minar', hitSong: 'Jhoom' },
    { name: 'Tahsan', hitSong: 'Alo' },
    { name: 'Pritom', hitSong: 'Deora' },
    { name: 'Hero Alom', hitSong: 'Babu Khaico' }
  ];

  const movies = [
    { title: "Pather Panchali", releaseDate: "1955" },
    { title: "Aparajito", releaseDate: "1956" },
    { title: "Apur Sansar", releaseDate: "1959" },
    { title: "Jalsaghar", releaseDate: "1958" }
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <Movies movies={movies}></Movies>

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      {/* <h2>Learn React</h2>
      <Todo task="Introduction to JSX (JavaScript XML)" isDone={true}></Todo>
      <Todo task="Components and Props" isDone={true}></Todo>
      <Todo task="State and Lifecycle" isDone={false}></Todo> */}

      {/* <Person></Person>
      <Student year="Freshman" cgpa={3.5}></Student>
      <Developer></Developer>
      <Devices name="Mobile" price="40000"></Devices>
      <Devices name="Laptop" price="100000"></Devices> */}
    </>
  )
}

function Person() {
  const name = 'Sabbir';
  const details = { age: 19, money: 20 };
  return <h3>I am {name}, {details.age} years old. I have {details.money * 20} taka.</h3>
}

// const {year, cgpa} = {year: 'Freshman', cgpa: 3.5};
function Student({ year = 0, cgpa = 0 }) {
  console.log({ year, cgpa });
  return (
    <div className='student'>
      <h3>Study Information</h3>
      <p>Program: BS in Computer Science and Engineering</p>
      <p>Year: {year}</p>
      <p>CGPA: {cgpa}</p>
      <p>University: Example University</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    border: '2px solid crimson',
    borderRadius: '16px',
    padding: '20px',
    marginTop: '20px'
  }
  return (
    <div style={developerStyle}>
      <h3>Learning Web Development</h3>
      <p>Languages: HTML, CSS, JavaScript</p>
      <p>Frameworks: Tailwind, MongoDB, Express, React, Node</p>
    </div>
  );
}

function Devices(props) {
  // console.log(props);
  return <h4>I have a {props.name}, price {props.price} tk</h4>
}

export default App
