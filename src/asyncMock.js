const products = [
  {
    id: 1,
    name: "Blanco Cristalino",
    price: 62,
    category: "blanco",
    image: "/images/products/blanco-cristalino.jpeg",
    stock: 8,
    description:
      "Utilizando la mejor planta de agave azul y un proceso de destilación tradicional, el Tequila Don Julio® Blanco es tequila en su forma más auténtica.",
  },
  {
    id: 2,
    name: "Reposado 1990",
    price: 72,
    category: "reposado",
    image: "/images/products/reposado-1990.jpeg",
    stock: 8,
    description:
      "Envejecido durante ocho meses en barricas de roble blanco americano, el Tequila Reposado Don Julio® es de color ámbar dorado y ofrece un acabado rico y suave: la esencia misma del tequila perfecto añejado en barrica.",
  },
  {
    id: 3,
    name: "Private Cask Reposado",
    price: 98,
    category: "reposado",
    image: "/images/products/private-cask-reposado.webp",
    stock: 8,
    description:
      "Envejecido durante ocho meses en barricas de roble blanco americano, el Tequila Reposado Don Julio® es de color ámbar dorado y ofrece un acabado rico y suave: la esencia misma del tequila perfecto añejado en barrica.",
  },
  {
    id: 4,
    name: "Agave Añejo",
    price: 78,
    category: "añejo",
    image: "/images/products/agave-anejo.jpeg",
    stock: 8,
    description:
      "Envejecido en lotes más pequeños durante dieciocho meses en barricas de roble blanco americano, el Tequila Don Julio® Añejo es un testimonio del arte de elaborar un tequila añejo de sabor superior.",
  },
  {
    id: 5,
    name: "70 Cristalino",
    price: 91,
    category: "blanco",
    image: "/images/products/70-cristalino.jpeg",
    stock: 8,
    description:
      "Don Julio 70® Añejo Cristalino Tequila es la culminación de 70 años de conocimiento, experiencia e innovación que reúnen la suavidad de un tequila Blanco y la complejidad de un tequila Añejo para una experiencia tequilera totalmente única.",
  },
  {
    id: 6,
    name: "Alma Miel",
    price: 100,
    category: "reposado",
    image: "/images/products/alma-miel.jpeg",
    stock: 8,
    description:
      "Continuando con el legado de Don Julio González de vivir Por Amor para elaborar sólo lo excepcional, Tequila Don Julio rinde homenaje al corazón y al alma del tequila con la introducción de Tequila Don Julio Alma Miel, una mezcla de tequila Blanco destilado con miel de agave tostada al horno y Tequila añejo con una crianza mínima de 14 meses y acabado en barricas de Crémant du Limoux.",
  },
  {
    id: 7,
    name: "Primavera",
    price: 121,
    category: "reposado",
    image: "/images/products/primavera.jpeg",
    stock: 8,
    description:
      "En 1942, Don Julio González decidió establecer sus raíces en Atotonilco El Alto, México donde adquirió su Destilería “La Primavera”. Tequila Don Julio Primavera honra el legado de nuestro difunto fundador, quien creía que el tequila reposado era el tequila en su máxima expresión. Esta expresión deliciosamente suave toma el tradicional Reposado de Tequila Don Julio y lo termina en una codiciada barrica europea, que anteriormente contenía vino infusionado con cáscara de naranja macerada, para lograr un sabor cítrico ligero, sofisticado y sedoso.",
  },
  {
    id: 8,
    name: "Rosado",
    price: 144,
    category: "blanco",
    image: "/images/products/rosado.jpeg",
    stock: 8,
    description:
      "Don Julio Rosado es un tequila reposado terminado en barricas de vino de Oporto Ruby de la encantadora región vinícola del Duero, en el norte de Portugal. El resultado es un tequila reposado deliciosamente único con un delicado tono rosado y notas dulces de frutos rojos secos y caramelo.",
  },
  {
    id: 9,
    name: "1942 Añejo",
    price: 180,
    category: "añejo",
    image: "/images/products/1942-anejo.jpeg",
    stock: 8,
    description:
      "Celebrado en exclusivos bares de copas, restaurantes y discotecas, el icónico Tequila Don Julio 1942® es la elección de los conocedores de todo el mundo.",
  },
  {
    id: 10,
    name: "Ultima Reserva",
    price: 677,
    category: "añejo",
    image: "/images/products/ultima-reserva.jpeg",
    stock: 8,
    description:
      "En 2006, Don Julio, con su familia, plantó su último campo de agave. En honor a su devoción y artesanía, esta cosecha de agave fue cuidadosamente destilada, envasada en barriles y reservada para un uso especial. Para preservar este tequila y las exquisitas piñas de agave que hay detrás, hemos implementado un sistema de añejamiento Solera.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

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
