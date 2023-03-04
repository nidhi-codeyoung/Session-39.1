import React, { useState } from "react";


function App() {
  const [secret, setMessage] = useState("Secrets");
    
  return (
    <>
    <center>
      <h1>Know your Favorite Person More:</h1>
      <h2>I love {secret}!</h2>
      <button
        type="button"
        onClick={() => setMessage("Travelling")}
      >Secret 1</button> <br/> <br/>
      <button
        type="button"
        onClick={() => setMessage("eating spicy Food")}
      >Secret 2</button> <br/> <br/>
      <button
        type="button"
        onClick={() => setMessage("watching Movies")}
      >Secret 3</button> <br/> <br/>
      <button
        type="button"
        onClick={() => setMessage("writing Dairy")}
      >Secret 4</button> <br/><br/>
      </center>
    </>
  );
}

export default App;