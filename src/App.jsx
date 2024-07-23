import "./App.css";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/hero";
import Nav from "./components/Nav/Nav";

function App() {
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
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
