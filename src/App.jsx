import  { useState } from 'react';

const FeedAMoodeng = () => {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 
  const [image, setImage] = useState('src/Moodag.jpeg'); 

  const handleFeed = (food) => {
    let levelIncrease = 0;

    if (food === 'watermelon') levelIncrease = 5;
    else if (food === 'pumpkin') levelIncrease = 10;
    else if (food === 'grass') levelIncrease = 20;

    const newLevel = level + levelIncrease;

    setLevel(newLevel);
    setSize(size + levelIncrease * 2);

  
    if (newLevel > 100) {
      setImage('src/Me.jpg');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Feed A Moodeng</h1>
      <h3 style={styles.text}>วิธีเล่น : กดปุ่มเพื่อให้อาหารน้องหมูเด้ง</h3>
      <h3>แล้วน้องจะตัวโตขึ้นตาม Lavel</h3>
      <h2 style={styles.text}>Level : {level}</h2>
      <img
        src={image}
        alt="หมูเด้ง"
        style={{ width: `${size}px`, height: `${size}px`, borderRadius: '50%', border: '5px solid white' }} // ขยายขนาดทั้งกว้างและสูงเท่ากัน
      />
      <div>
        <button style={styles.button} onClick={() => handleFeed('watermelon')}>แตงโม +5</button>
        <p></p>
        <button style={styles.button} onClick={() => handleFeed('pumpkin')}>ฟักทอง +10</button>
        <button style={styles.button} onClick={() => handleFeed('grass')}>หญ้า +20</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white',
    textAlign: 'center',
  },

  level: {
    color: '#4cffff', // 
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#d52d7c',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    margin: '10px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#33fcff',
  }
};

export default FeedAMoodeng;
