import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 35px;
  font-family: "Roboto", sans-serif;
`;

const Container = styled.div`
  margin: auto;
  height: 300px;
  width: 600px;
  border: 5px solid lightblue;
  text-align: center;
  border-radius: 5px;
`;

const Prod_details = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const Prod_name = styled.h3`
  font-family: "Roboto", sans-serif;
  color: red;
  font-size: 28px;
`;

const Prod_price = styled.h3`
  font-family: "Roboto", sans-serif;
  color: orange;
  font-size: 25px;
`;

const Button = styled.button`
  background-color: dodgerblue;
  color: white;
  border: 0;
  height: 30px;
  width: 100px;
`;

function Product_Id() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const prod = fetch(`http://localhost:3001/data/${id}`)
      .then((res) => res.json())
      .then((result) => setData(result));
    console.log(data);
  }, []);

  return (
    <Container>
      <Title>Product Details</Title>
      <Prod_details>
        <Prod_name>Product - {data.name}</Prod_name>
        <h1>-</h1>
        <Prod_price>Price - {data.price}</Prod_price>
      </Prod_details>
      <Link to="/products">
        <Button>Go back</Button>
      </Link>
    </Container>
  );
}

export default Product_Id;
