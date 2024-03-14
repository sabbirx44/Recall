import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('Button 1 clicked');
  }

  const handleClick2 = () => {
    alert('Button 2 clicked');
  }

  const addFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concepts 2</h3>
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('Button 3 clicked') }}>Click 3</button>
      <button onClick={() => addFive(5)}>Click 4</button>

      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App