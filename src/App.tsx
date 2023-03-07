import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {

  const [Atext, setAtext] = useState([]);
  const [count, setCount] = useState(0);
  const [Dtext, setDtext] = useState("");

  //useEffect(() => {
    
    fetch("https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f")
  .then((response) => response.text())
  .then((data) => setAtext([...data]));
    
//}, [])

  const timer = setInterval(() => {
    console.log("Atext:",Atext.length())
    console.log("count:",count)
    if (Atext.length() < count) clearInterval(timer);
    else {
      setDtext(Dtext+Atext[count])
      setCount(count+1)
      
    }
  }, 3000)

  



  return (
    <div>
      <p style={{color:"black"}}>{Dtext}_</p>
    </div>
  );
}

export default App;
