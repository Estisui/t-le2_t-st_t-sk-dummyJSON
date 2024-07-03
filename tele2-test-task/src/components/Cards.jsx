import Card from './Card';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

function Cards({ error, isLoaded, items }) {
  if (error) {
    return <Message>Error: {error.message}</Message>;
  } else if (!isLoaded) {
    return <Message>Loading...</Message>;
  } else if (items.length === 0) {
    return <Message>Nothing found</Message>;
  } else {
    return (
      <CardsContainer>
        {items.map(item => (
          <Card key={item.id} cardInfo={item} />
        ))}
      </CardsContainer>
    );
  }
}

export default Cards;
