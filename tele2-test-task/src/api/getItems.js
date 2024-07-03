const defaultLink = "https://dummyjson.com/products";

const getItems = (params) => {
  return fetch(
    defaultLink + '/search?' +
      new URLSearchParams(params).toString()
  ).then((res) => res.json());
};

export default getItems;
