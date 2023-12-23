

const products = [
  {
    id: "1",
    name: 'Funko Pop! Toji Fushiguro',
    category: 'yuyutsu',
    price: 15.99,
    stock: 10,
    img: '../public/nanami.jpg',
    description: "Figura de vinilo de Toji Fushiguro en todo su esplendor"
  },
  {
    id: "2",
    name: 'Funko Pop! Satoru Gojo',
    category: 'yuyutsu',
    price: 14.99,
    stock: 10,
    img: '../public/satoru.jpg',
    description: "Figura de vinilo de Satoru Gojo en todo su esplendor"
  },
  {
    id: "3",
    name: 'Funko Pop! Naruto',
    category: 'naruto',
    price: 17.99,
    stock: 10,
    img: '../public/naruto.jpg',
    description: "Figura de vinilo de Naruto en todo su esplendor"
  },
  {
    id: "4",
    name: 'Funko Pop! Hinata',
    category: 'naruto',
    price: 17.99,
    stock: 10,
    img: '../public/naruto2.jpg',
    description: "Figura de vinilo de Hinata en todo su esplendor"
  },
  {
    id: "5",
    name: 'Funko Pop! Luffy',
    category: 'one',
    price: 17.99,
    stock: 10,
    img: '../public/onepiece1.jpg',
    description: "Figura de vinilo de Luffy en todo su esplendor"
  },
  {
    id: "6",
    name: 'Funko Pop! Namy',
    category: 'one',
    price: 17.99,
    stock: 10,
    img: '../public/onepiece2.jpg',
    description: "Figura de vinilo de Namy en todo su esplendor"
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(prod => prod.category === category);
      resolve(filteredProducts);
    }, 2000);
  });
};
