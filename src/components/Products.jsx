import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log(cat);
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        //console.log(products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    switch (sort) {
      case "newest":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
        console.log(filteredProducts);
        break;
      case "priceAsc":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
        console.log(filteredProducts);
        break;
      case "priceDesc":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
        console.log(filteredProducts);
        break;

      default:
        break;
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item, index) => (
            <Product item={item} key={index} />
          ))
        : products.map((item, index) => <Product item={item} key={index} />)}
    </Container>
  );
};

export default Products;
