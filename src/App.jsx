import "./App.css";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/hero";
import Nav from "./components/Nav/Nav";
import ProductList from "./components/ProductList/ProductList";
import { data, dataTwo } from "./data";

function App() {
  const productData = data;
  return (
    <>
      <Nav />
      <Hero />
      <ProductList productData={productData} />
    </>
  );
}

export default App;
