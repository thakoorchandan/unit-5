import React, { useState, useEffect } from "react";
import styled from "styled-components";
import history from "../history";
import { Link } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
`;

const Prod_container = styled.div`
  margin: auto;
  height: auto;
  width: 50%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  text-align: center;
`;

const Prod_Box = styled.div`
  height: auto;
  border: 2px solid dodgerblue;
  border-radius: 5px;
`;

const Name = styled.p`
  width: 300px;
  font-size: 20px;
  color: red;
  font-family: "Roboto", sans-serif;
`;

const View = styled.button`
  background-color: dodgerblue;
  height: 30px;
  width: 120px;
  color: white;
  border: 0.5px solid black;
  margin-top: 20px;
  font-size: 17px;
  margin-bottom: 20px;
`;

function All_Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const list = fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <Title>All Products</Title>
      <Prod_container>
        {data.map((item) => (
          <>
            <Prod_Box>
              <Name>{item.name}</Name>
              <h4>{item.price}</h4>
              <Link to={`/products/${item.id}`}>
                <View onClick={() => history.push(`/products/${item.id}`)}>
                  more details
                </View>
              </Link>
            </Prod_Box>
          </>
        ))}
      </Prod_container>
    </div>
  );
}

export default All_Products;
