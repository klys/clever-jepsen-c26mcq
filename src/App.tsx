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
    console.log("executed!")
    fetch("https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f")
    .then(async (response) => {
      let data = await response.text();
      setAtext([...data])
      console.log("response",data)
    })
    .then(() => {
      console.log("AText:",Atext)
    })
    

    
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer is running...")
      console.log("Atext:",Atext.length)
      console.log("count:", count)
      if ((count+1) >= Atext.length) clearInterval(timer);
      else {
        console.log("We are in business")
        setDtext(Dtext+Atext[count])
        setCount(count+1)
        
      }
    }, 3000)

    return () => clearInterval(timer)
  },[Atext, count, Dtext])

  return (
    <div>
      <p style={{color:"black"}}>{Dtext}_</p>
    </div>
  );
}

export default App;


