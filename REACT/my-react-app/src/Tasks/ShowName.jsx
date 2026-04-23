 import { useState } from "react";

function ShowName() {
    const [name, setName] = useState("");

   return (
      <div className="home-container">
         <h1>Home</h1>

        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

         <h2>Hello {name}!</h2>
      </div>
   );
}
export default ShowName;