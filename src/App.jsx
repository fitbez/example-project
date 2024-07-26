import "./App.css";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/hero";
import Nav from "./components/Nav/Nav";
import ProductList from "./components/ProductList/ProductList";
import { data, dataTwo } from "./data";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [resData, setResData] = useState(null);
  const moreProductData = data;
  const initialProductData = [
    {
      id: 5,
      title: "Water bottle",
      description: "A nice water",
      image:
        "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 5.0,
    },
    {
      id: 6,
      title: "Coffee",
      description: "A nice coffee",
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 5.0,
    },
  ];

  const baseUrl = "https://fakestoreapi.com/products";

  const getProductData = async () => {
    try {
      const response = await axios.get(baseUrl);
      console.log("response", response);
      setResData(response?.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const [productData, setProductData] = useState(initialProductData);

  const handleProduct = () => {
    setProductData([...productData, ...resData]);
  };

  const handleViewLessProduct = () => {
    setProductData(initialProductData);
  };

  return (
    <>
      <Nav />
      <Hero />
      <ProductList
        productData={productData}
        handleProduct={handleProduct}
        handleViewLessProduct={handleViewLessProduct}
      />
    </>
  );
}

export default App;
