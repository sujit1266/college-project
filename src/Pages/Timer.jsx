import "../styling/timerpage.css";
import Details from "../components/Details";
import { useEffect, useState } from "react";
import NumberSelector from "../components/NumberSelector";


const Timerpage = () => {
     const [min, setmin] = useState(0);
     const [hour, sethour] = useState(0);
     const [second, setsecond] = useState(0);
     const [stop, setstop] = useState(false);


     const onofbutton = () => {
          if (stop === false) {
               setstop(true);
               document.querySelector('.onof-button').innerHTML = 'Turn off';
          }
          if (stop === true) {
               setstop(false);
               document.querySelector('.onof-button').innerHTML = 'Turn on';
          }
     }



     useEffect(() => {
          let intervel = null;
          if (stop) {
               intervel = setInterval(() => {
                    setsecond(second + 1);
                    if (min > 59) {
                         sethour(hour + 1);
                         setmin(0);
                         clearInterval(intervel);
                    }
                    if (second > 59) {
                         setmin(min + 1);
                         setsecond(0);
                         clearInterval(intervel);
                    }
                    const minelement1 = (document.querySelector('.numberDropdown1').value)
                    const hourelement1 = (document.querySelector('.numberDropdown2').value)
                    const secondlement1 = (document.querySelector('.numberDropdown3').value)
                    if (minelement1 === min && hourelement1 === hour && secondlement1 === second) {
                         onofbutton();
                    }
                    console.log(minelement1)
                    console.log(hourelement1)
                    console.log(secondlement1)
               }, 1000)
               
          }
          else {
               clearInterval(intervel);
          }

          return () => {
               clearInterval(intervel);
          }
     })







     return (
          <div className="timer-page">
               <div className="set-time">
                    <div className="top-text">
                         <h1>Turn on Motor</h1>
                         <p>Helping You To Make The Right Decision and Seed Your Plant</p>
                    </div>
                    <div className="main-timer">
                         <div className="mainTimer-div1">
                              <div className="outr-clock">
                                   <div className="clock">
                                        <h1>{hour < 10 ? "0" + hour : hour}:{min < 10 ? "0" + min : min}:{second < 10 ? "0" + second : second}</h1>
                                   </div>
                              </div>
                              <button onClick={onofbutton} className="onof-button">Turn on</button>
                         </div>
                         <div className="mainTimer-div2">
                              <div className="timer-options">
                                   <NumberSelector timername="Timer1" />
                                   <NumberSelector timername="Timer2" />
                                   <NumberSelector timername="Timer3" />
                              </div>
                         </div>
                    </div>
               </div>
               <Details />
          </div>
     )
}

export default Timerpage;