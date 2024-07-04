import styled from "styled-components";

const PagesSwitchContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0px;
  gap: 20px;
  background-color: var(--main-bg-color);
`;

const PageButton = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  &:disabled:hover {
    cursor: default;
  }
`;

function PagesSwitch({ skip, limit, itemsTotal, onPrevClick, onNextClick }) {
  const disableLeft = skip - limit < 0;
  const disableRight = skip + limit >= itemsTotal;

  return (
    <PagesSwitchContainer>
      <PageButton disabled={disableLeft} onClick={onPrevClick}>
        Previous page
      </PageButton>
      <PageButton disabled={disableRight} onClick={onNextClick}>
        Next page
      </PageButton>
    </PagesSwitchContainer>
  );
}

export default PagesSwitch;
