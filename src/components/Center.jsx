import { useState } from "react"
import Card from '../components/Card'

function Center() {
  const [input, setInput] = useState([])
  const [button,setButton] = useState([])
  function handleInput(e){
    setInput(e.target.value)
  }
  function handleClick(e){
    e.preventDefault();
    console.log(input);
    setInput(e.target.value)
    setButton(...button,input)
   console.log(button)
  }
  return (
    <div className="center_container">

        <div className="center_container_box">

        <div className="center_container_box_first">

        <h2 className="center_container_box_first_h2">
        Todos
        </h2>

        </div>
    {/* Ikkinchi qadam */}
        <div className="center_container_box_second">

        <div>
            <form action="">
              <input type="text" className="center_container_box_second_input" value={input} onChange={handleInput}/>
              <button className="btn" onClick={handleClick}>Submit</button>
                         <div>
                         <Card value={button}></Card>
                         </div>
            </form>
        </div>

        </div>
             

        </div>

    </div>
  )
}

export default Center