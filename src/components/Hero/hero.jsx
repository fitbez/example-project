import Button from "../Button/Button";
import cart from "../../assets/cart.jpg";
import "./hero.css";

function Hero() {
  const handleButtonOne = () => {
    console.log("button one has been clicked");
  };
  const handleButtonTwo = () => {
    console.log("button two has been clicked");
  };
  const handleButtonThree = () => {
    console.log("button three has been clicked");
  };
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">Sell Your Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
          adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.
          Mattis pellentesque id nibh tortor id aliquet. Ipsum dolor sit amet
          consectetur adipiscing elit. Lacinia quis vel eros donec ac odio
          tempor orci dapibus. Urna molestie at elementum eu facilisis sed odio.
          Ut tellus elementum sagittis vitae et leo. Quam viverra orci sagittis
          eu volutpat. Consequat interdum varius sit amet mattis vulputate enim
          nulla.{" "}
        </p>
        <div className="cta-buttons">
          <Button
            value="Add product"
            backgroundColor="#11CCF4"
            color="#fff"
            handleClick={handleButtonOne}
          />
          <br />
          <Button
            value="Learn more"
            backgroundColor="transparent"
            color="#000"
            handleClick={handleButtonTwo}
          />
        </div>
      </div>
      <img className="img-cart" src={cart} alt="" />
    </header>
  );
}

export default Hero;
