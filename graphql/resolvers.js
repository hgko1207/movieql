const hgko = {
  name: "hgko",
  age: 34,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => hgko
  }
};

export default resolvers;
