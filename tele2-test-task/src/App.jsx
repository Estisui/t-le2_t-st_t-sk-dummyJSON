import styled from "styled-components";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import getItems from "./api/getItems";

const Title = styled.h1`
  text-align: center;
  margin: 30px 0;
`;

const Subtitle = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // function to get items from api and update states
  const updateItems = (link) => {
    setIsLoaded(false);
    getItems(link).then(
      (result) => {
        setIsLoaded(true);
        if (!result.error) {
          setItems(result.products);
        } else {
          setItems([]);
        }
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  };

  // get items during first load
  useEffect(() => updateItems(), []);

  return (
    <>
      <Title>DummyJSON API App</Title>
      <Subtitle>Stepan Sukhachev for Tele2</Subtitle>
      <Cards error={error} isLoaded={isLoaded} items={items}></Cards>
    </>
  )
}

export default App
