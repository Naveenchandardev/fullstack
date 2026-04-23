 import { useState } from "react";

 function Home(){
     const [count, setCount] = useState(0);
     return (
    <div className="home-container">
      <h1 className="home-text">Home</h1>
      <h2>Count: {count}</h2>

      <div className="btn-group">
        <button onClick={() => setCount(count + 2)}>
          Click Me bro
        </button>

        <button onClick={() => setCount(0)}>
          Refresh
        </button>
      </div>
    </div>
  );
    
    }
    export default Home
    