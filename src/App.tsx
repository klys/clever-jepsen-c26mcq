/*
  I used this on the browser JavaScript console to get the URL

  var flags2 = $("section main article p.flag");
  var url = "";
  for(var i =0; i < flags2.length; i++) {
    url += $(flags2[i]).attr("value")
}
*/
import { useState, useEffect } from "react";



function App() {

  const [Atext, setAtext] = useState([]);  
  const [count, setCount] = useState(0);
  const [Dtext, setDtext] = useState("");

 
  useEffect(() => {
    // Fetching the url and processing the information
    fetch("https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f")
    .then(async (response) =>setAtext([...await response.text()])

    )
    

    
  }, [])

  useEffect(() => {
    // processing the desired effect on the rendering side
    const timer = setInterval(() => {

      if ((count) >= Atext.length) clearInterval(timer);
      else {
        setDtext(Dtext+Atext[count])
        setCount(count+1)
      }
    }, 1500)

    return () => clearInterval(timer)
  },[Atext, count, Dtext])

  return (
    <div>
      <p style={{color:"auto"}}>{Dtext}_</p>
    </div>
  );
}

export default App;


