const products = [
  {
    id: 1,
    name: "Blanco Cristalino",
    price: 62,
    category: "blanco",
    image: "/assets/blanco-cristalino.jpg",
  },
  {
    id: 2,
    name: "Reposado 1990",
    price: 72,
    category: "reposado",
  },
  {
    id: 3,
    name: "Private Cask Reposado",
    price: 98,
    category: "reposado",
  },
  {
    id: 4,
    name: "Agave Añejo",
    price: 78,
    category: "añejo",
  },
  {
    id: 5,
    name: "70 Cristalino",
    price: 91,
    category: "blanco",
  },
  {
    id: 6,
    name: "Alma Miel",
    price: 100,
    category: "reposado",
  },
  {
    id: 7,
    name: "Primavera",
    price: 121,
    category: "reposado",
  },
  {
    id: 8,
    name: "Rosado",
    price: 144,
    category: "blanco",
  },

  {
    id: 9,
    name: "1942 Añejo",
    price: 180,
    category: "añejo",
  },

  {
    id: 10,
    name: "Ultima Reserva",
    price: 677,
    category: "añejo",
  },
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (id) => {
  return products.filter((product) => product.category == id);
};
