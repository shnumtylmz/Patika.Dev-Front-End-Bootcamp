import { useState } from 'react'
import './App.css'

import dice1 from './assets/img/dice1.png'
import dice2 from './assets/img/dice2.png'
import dice3 from './assets/img/dice3.png'
import dice4 from './assets/img/dice4.png'
import dice5 from './assets/img/dice5.png'
import dice6 from './assets/img/dice6.png'

const diceImg = [dice1, dice2, dice3, dice4, dice5, dice6];
function App() {

  const [userDice, setUserDice] = useState(null);
  const [pcDice, setPcDice] = useState(null);
  const [winner, setWinner] = useState('');

  const throwDice = () => {
    const userRes = Math.floor(Math.random() * 6) + 1;
    const pcRes = Math.floor(Math.random() * 6) + 1;

    setUserDice(userRes);
    setPcDice(pcRes);

    if(userRes > pcRes){
      setWinner('User wins!');
    } else if( userRes < pcRes){
      setWinner('PC wins!');
    }else{
      setWinner('Draw!');
    }
  };

  return (
    <>
     <div className="App">
      <h1>Dice Game</h1>
      <button onClick={throwDice}>Throw</button>
      <div className="zarSonucu">
        {userDice && (
          <>
            <div>
              <h2>User</h2>
              <img src={diceImg[userDice - 1]} alt={`User dice: ${userDice}`} />
            </div>
            <div>
              <h2>PC</h2>
              <img src={diceImg[pcDice - 1]} alt={`PC dice: ${pcDice}`} />
            </div>
          </>
        )}
        {winner && <h2>{winner}</h2>}
      </div>
    </div>
    </>
  )
}

export default App
