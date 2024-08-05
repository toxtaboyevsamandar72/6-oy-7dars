import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("известный");

  const getDataAPI = async (url) => {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        return await response.json();
      }
      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchAndFilterProducts = async (selectedCategory) => {
    const data = await getDataAPI("https://cars-pagination.onrender.com/products");
    const filteredProducts = data.filter(product => product.category === selectedCategory);
    setProducts(filteredProducts);
  };

  useEffect(() => {
    fetchAndFilterProducts(category);
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className="container">
        {products.length > 0 &&
          products.map((product) => (
            <Card key={product.id || product.name} data={product} />
          ))}
      </div>
    </>
  );
}

export default Home;
