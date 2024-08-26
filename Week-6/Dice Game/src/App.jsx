import { useState } from 'react';
import './App.css';
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
  const [userName, setUserName] = useState('Player 1');
  const [isThrowing, setIsThrowing] = useState(false);

  const throwDice = () => {
    setIsThrowing(true);
    setWinner('');

 
    setTimeout(() => {
      let userRes = Math.floor(Math.random() * 6 + 1);
      let pcRes = Math.floor(Math.random() * 6 + 1);

      setUserDice(userRes);
      setPcDice(pcRes);

      if (userRes > pcRes) {
        setWinner(`${userName} wins!`);
      } else if (userRes < pcRes) {
        setWinner('PC wins!');
      } else {
        setWinner('It is a tie!');
      }

      setIsThrowing(false);
    }, 3000); 
  };

  return (
    <>
      <div className='app'>
        <div className='settings'>
          <input 
            type='text' 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter your name'
          />
        </div>

        <div className='result'>
          <div className='userResult'>
            <h2>{userName}</h2>
            <img 
              src={isThrowing ? diceImg[Math.floor(Math.random() * 6)] : diceImg[userDice - 1]} 
              alt="User Dice" 
            />
          </div>
          <div className='pcResult'>
            <h2>PC</h2>
            <img 
              src={isThrowing ? diceImg[Math.floor(Math.random() * 6)] : diceImg[pcDice - 1]} 
              alt="PC Dice" 
            />
          </div>
        </div>

        <button 
          onClick={throwDice}
          disabled={isThrowing}
        >
          {isThrowing ? 'Rolling...' : 'Throw Dice!'}
        </button>

        {winner && <h2>{winner}</h2>}
      </div>
    </>
  );
}

export default App;
