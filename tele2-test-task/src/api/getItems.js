import defaultLink from "./defaultLink";

const getItems = (link = defaultLink) => {
  return fetch(link).then((res) => res.json());
};

export default getItems;
