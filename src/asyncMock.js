const products = [
  {
    id: 1,
    name: "Blanco Cristalino",
    price: 62,
    category: "blanco",
    image: "/src/assets/blanco-cristalino.jpg",
  },
  {
    id: 2,
    name: "Reposado 1990",
    price: 72,
    category: "reposado",
    image: "",
  },
  {
    id: 3,
    name: "Private Cask Reposado",
    price: 98,
    category: "reposado",
    image: "",
  },
  {
    id: 4,
    name: "Agave Añejo",
    price: 78,
    category: "añejo",
    image: "",
  },
  {
    id: 5,
    name: "70 Cristalino",
    price: 91,
    category: "blanco",
    image: "",
  },
  {
    id: 6,
    name: "Alma Miel",
    price: 100,
    category: "reposado",
    image: "",
  },
  {
    id: 7,
    name: "Primavera",
    price: 121,
    category: "reposado",
    image: "",
  },
  {
    id: 8,
    name: "Rosado",
    price: 144,
    category: "blanco",
    image: "",
  },
  {
    id: 9,
    name: "1942 Añejo",
    price: 180,
    category: "añejo",
    image: "",
  },
  {
    id: 10,
    name: "Ultima Reserva",
    price: 677,
    category: "añejo",
    image: "",
  },
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id == id));
    }, 1000);
  });
};

export const getCategory = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category == id));
    }, 1000);
  });
};
