import React, { useState } from 'react';

const emojiList = ['🍒', '🍋', '🍉', '🍇', '😄', '🎉', '🍌', '💎'];

const SlotM = () => {
  const [slotSet1, setSlotSet1] = useState(['😄', '🍒', '💎']);
  const [slotSet2, setSlotSet2] = useState(['🍒', '😄', '🎉']);
  const [slotSet3, setSlotSet3] = useState(['💎', '🍉', '🍋']);
  
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const [result3, setResult3] = useState('');

  // Function to get a random emoji
  const getRandomEmoji = () => {
    return emojiList[Math.floor(Math.random() * emojiList.length)];
  };

  // Function to spin slot machine 1
  const handleSpin1 = () => {
    const newSlot1 = getRandomEmoji();
    const newSlot2 = getRandomEmoji();
    const newSlot3 = getRandomEmoji();
    setSlotSet1([newSlot1, newSlot2, newSlot3]);

    if (newSlot1 === newSlot2 && newSlot2 === newSlot3) {
      setResult1('🎉 You Win ! 🎉');
    } else {
      setResult1('Try Again!!');
    }
  };

  // Function to spin slot machine 2
  const handleSpin2 = () => {
    const newSlot1 = getRandomEmoji();
    const newSlot2 = getRandomEmoji();
    const newSlot3 = getRandomEmoji();
    setSlotSet2([newSlot1, newSlot2, newSlot3]);

    if (newSlot1 === newSlot2 && newSlot2 === newSlot3) {
      setResult2('🎉 You Win ! 🎉');
    } else {
      setResult2('Try Again!!');
    }
  };

  // Function to spin slot machine 3
  const handleSpin3 = () => {
    const newSlot1 = getRandomEmoji();
    const newSlot2 = getRandomEmoji();
    const newSlot3 = getRandomEmoji();
    setSlotSet3([newSlot1, newSlot2, newSlot3]);

    if (newSlot1 === newSlot2 && newSlot2 === newSlot3) {
      setResult3('🎉 You Win ! 🎉');
    } else {
      setResult3('Try Again!!');
    }
  };

  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{' '}
        <span style={{ fontWeight: 'BOLD' }}> Slot machine game </span> 🎰
      </h1>

      {/* Slot machine 1 */}
      <div className="slotmachine">
        <h1>{slotSet1[0]} {slotSet1[1]} {slotSet1[2]}</h1>
        <h2>{result1}</h2>
        <button onClick={handleSpin1} className="spin_button">
          Spin Slot Machine 1!!
        </button>
        <hr />
     

      {/* Slot machine 2 */}
      
        <h1>{slotSet2[0]} {slotSet2[1]} {slotSet2[2]}</h1>
        <h2>{result2}</h2>
        <button onClick={handleSpin2} className="spin_button">
          Spin Slot Machine 2!!
        </button>
        <hr />
    

      {/* Slot machine 3 */}
      
        <h1>{slotSet3[0]} {slotSet3[1]} {slotSet3[2]}</h1>
        <h2>{result3}</h2>
        <button onClick={handleSpin3} className="spin_button">
          Spin Slot Machine 3!!
        </button>
        <hr />
      </div>
    </>
  );
};

export default SlotM;
