import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const TextField = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  width: 620px;
  height: 30px;

  @media (max-width: 640px) {
    width: 300px;
  }
`;

const Submit = styled.input`
  width: 620px;
  height: 40px;
  border: 2px black solid;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 300px;
  }
`;

function Search({ updateItems, setSearchProp, setSkip }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { name } = formJson;
    setSkip(0);
    setSearchProp(name);
    updateItems({ q: name });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField id="name" name="name"></TextField>
      <Submit type="submit" value="Search" />
    </Form>
  );
}

export default Search;
