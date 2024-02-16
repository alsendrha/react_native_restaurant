import sanityClient from "./sanity";

let sanityQuery = (query, params) => sanityClient.fetch(query, params);

export const getFeaturedRestaurants = () => {
  return ` 
  *[_type=='featured']{
  ...,
  restaurants[] -> {
    ...,
    dishes[] -> {
      name
    }
  }
}
`;
};

export const getCategory = () => {
  return sanityClient(`
  *[_type=='category']
  `);
};

export const getFeaturedRestaurantById = (id) => {
  return sanityQuery(
    `
  *[_type=='featured' && _id == $id]{
  ...,
  restaurants[] -> {
    ...,
    dishes[] -> {
      name
    }
  }
}[0]
  `,
    { id }
  );
};
