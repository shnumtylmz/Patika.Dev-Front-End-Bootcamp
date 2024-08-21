import { useState } from'react';
import './App.css'
import dice1 from '../public/img/dice1.png';
import dice2 from '../public/img/dice2.png';
import dice3 from '../public/img/dice3.png';
import dice4 from '../public/img/dice4.png';
import dice5 from '../public/img/dice5.png';
import dice6 from '../public/img/dice6.png';


let diceImg = [dice1, dice2, dice3, dice4, dice5, dice6];
function App() {
  const [userDice, setUserDice] = useState(null);
  const [pcDice, setPcDice] = useState(null);
  const [winner, setWinner] = useState('');

  const throwDice = () => {
    let userRes = Math.floor(Math.random() * 6 + 1);
    let pcRes = Math.floor(Math.random() * 6 + 1);

    setUserDice(userRes);
    setPcDice(pcRes);

    if(userRes > pcRes){
      setWinner('User wins!');
    } else if(userRes < pcRes){
      setWinner('PC wins!');
    } else{
      setWinner('It is a tie!');
    }
  }


  return (
    <>
      <div className='app'>
        <div className='result'>
          { ( 
            <>
          <div className='userResult'>
            <h2>User</h2>
            <img src={diceImg[userDice - 1]} alt="" />
          </div>
          <div className='pcResult'>
            <h2>PC</h2>
            <img src={diceImg[pcDice - 1]} alt="" />
          </div>
          </>
          )}
          
        </div>
      </div>
      {winner && <h2>{winner}</h2>}
      <button onClick={throwDice}>Throw Dice!</button>
    </>
  )
}

export default App
