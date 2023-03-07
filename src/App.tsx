import { useState, useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";

function App() {

  const [Atext, setAtext] = useState([]);
  const [count, setCount] = useState(0);
  const [Dtext, setDtext] = useState("");

  useCallback(() => { 
    console.log("executed!")
    fetch("https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f")
  .then((response) => response.text())
  .then((data) => setAtext([...data]));
  }, [])

  useEffect(() => {

  const timer = setInterval(() => {
    if (count > Atext.length-1) clearInterval(timer);
    else {
      console.log("We are in business")
      setDtext(Dtext+Atext[count])
      setCount(count+1)
      
    }
  }, 3000)

  }, [Atext])



  return (
    <div>
      <p style={{color:"black"}}>{Dtext}_</p>
    </div>
  );
}

export default App;
