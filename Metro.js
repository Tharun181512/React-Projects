import React, { useState } from "react";
import "./Metro.css";
import logo from "../../Assets/hyderabad logo.jpeg";
import metro from "../../Assets/hyderabad metro bg.jpg";
function Ticketcounter() {
  const [ticketCount, setTicketCount] = useState(0);

  const increaseCount = () => {
    setTicketCount(ticketCount + 1);
  };

  const decreaseCount = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };
  return (
    <div>
        <div className="image"><img src={metro} alt="metroimage" /></div>
      <div className="metroticket">
        <img src={logo} alt="metrologo"/>
        <h1>Metro Ticket Counter</h1>
        <p>{ticketCount}</p>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
}
export default Ticketcounter;
