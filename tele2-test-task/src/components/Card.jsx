/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 460px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CardPicture = styled.img`
  width: 100%;
  height: 296px;
  object-fit: contain;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

const CardTitle = styled.h3`
  height: 2lh;
  overflow: hidden;
  margin: 0;
`;

const CardStat = styled.p`
  margin: 0;
`;

function Card({ cardInfo }) {
  return (
    <CardContainer>
      <CardPicture
        src={cardInfo.thumbnail}
        alt={cardInfo.title}
        loading="lazy"
      ></CardPicture>
      <CardText>
        <CardTitle>{cardInfo.title}</CardTitle>
        <CardStat>Price: {cardInfo.price}$</CardStat>
        <CardStat>Rating: {cardInfo.rating}</CardStat>
      </CardText>
    </CardContainer>
  );
}

export default Card;
