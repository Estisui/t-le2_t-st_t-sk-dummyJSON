import { useState, useEffect } from "react";
import styled from "styled-components";
import Cards from "./components/Cards";
import PagesSwitch from "./components/PagesSwitch";
import getItems from "./api/getItems";
import Search from "./components/Search";

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
  const [skip, setSkip] = useState(0);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [searchProp, setSearchProp] = useState("");
  const limit = 30;

  // function to get items from api and update states
  const updateItems = (props = {}) => {
    setIsLoaded(false);
    getItems(props).then(
      (result) => {
        setIsLoaded(true);
        if (!result.error) {
          setItems(result.products);
          setSkip(result.skip);
          setItemsTotal(result.total);
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

  // get items for the first render
  useEffect(() => updateItems(), []);

  const onPrevClick = () => {
    updateItems({ skip: skip - limit, q: searchProp });
  };

  const onNextClick = () => {
    updateItems({ skip: skip + limit, q: searchProp });
  };

  return (
    <>
      <Title>DummyJSON API App</Title>
      <Subtitle>Stepan Sukhachev for Tele2</Subtitle>
      <Search
        updateItems={updateItems}
        setSearchProp={setSearchProp}
        setSkip={setSkip}
      />
      <PagesSwitch
        skip={skip}
        limit={limit}
        itemsTotal={itemsTotal}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
      <Cards error={error} isLoaded={isLoaded} items={items}></Cards>
    </>
  );
}

export default App;
