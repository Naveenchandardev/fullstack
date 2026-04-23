import { useState } from "react";

function ShowPassword() {
  const [show, setShow] = useState(false);

  return (
    <div className="home-container">
      <h1>Password Task</h1>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />

      <br /><br />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default ShowPassword;