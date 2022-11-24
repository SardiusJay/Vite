import Sammy from "../img/sammy.jpg";
import "../CSS/main.css"


export default function Welcome() {
    return (
      <>
        <div className="wrapper">
          <h1>Welcome King Sardius🤴🏼</h1>
          <p>This is going to be the coolest app in the world!</p>
          <img src={Sammy} alt="Sammy image" width={200} height={200} />
        </div>
        <div className="wrapper">
        <h1>Welcome King Sardius🤴🏼</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={Sammy} alt="Sammy image" width={200} height={200} />
      </div>
      <div className="wrapper">
      <h1>Welcome King Sardius🤴🏼</h1>
      <p>This is going to be the coolest app in the world!</p>
      <img src={Sammy} alt="Sammy image" width={200} height={200} />
    </div>
    <div className="wrapper">
    <h1>Good Bye King Sardius🤴🏼</h1>
    </div>
      </>
    );
  }