import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {



  //useEffect(() => {
    
    fetch("https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f")
  .then((response) => response.text())
  .then((data) => setAtext([...data]));
    
//}, [])

  const timer = setInterval(() => {
    if (Atext === Dtext) clearInterval(timer);
    else {
      setDtext(Dtext+Atext[count])
      setCount(count+1)
      
    }
  }, 3000)

  const [Atext, setAtext] = useState([]);
  const [count, setCount] = useState(0);
  const [Dtext, setDtext] = useState("");



  return (
    <div>
      <p>{Dtext}_</p>
    </div>
  );
}

export default App;
