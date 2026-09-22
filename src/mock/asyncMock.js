export const products = [
  {
    id: 1,
    name: 'Guitarra eléctrica',
    title: 'Guitarra eléctrica',
    price: 320000,
    category: 'Guitarras',
    img: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=800&q=80',
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=800&q=80',
    stock: 6,
    description: 'Guitarra eléctrica ideal para ensayos y shows en vivo.'
  },
  {
    id: 2,
    name: 'Guitarra acústica',
    title: 'Guitarra acústica',
    price: 280000,
    category: 'Guitarras',
    img: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80',
    image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80',
    stock: 4,
    description: 'Con preamplificador, de diferentes procedencias, con funda incluída.'
  },
  {
    id: 3,
    name: 'Bajo eléctrico',
    title: 'Bajo eléctrico',
    price: 350000,
    category: 'Bajos',
    img: 'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?auto=format&fit=crop&w=800&q=80',
    image: 'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?auto=format&fit=crop&w=800&q=80',
    stock: 5,
    description: 'Importadores directo de Fender. Jazz-bass, Precission, Vintage y de 5 cuerdas.'
  },
  {
    id: 4,
    name: 'Batería acústica',
    title: 'Batería acústica',
    price: 790000,
    category: 'Baterías',
    img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80',
    stock: 2,
    description: 'Set acústico para practicar y tocar en vivo.'
  },
  {
    id: 5,
    name: 'Teclado digital',
    title: 'Teclado digital',
    price: 410000,
    category: 'Teclados',
    img: 'https://images.unsplash.com/photo-1634286050107-567499885ff9?auto=format&fit=crop&w=800&q=80',
    image: 'https://images.unsplash.com/photo-1634286050107-567499885ff9?auto=format&fit=crop&w=800&q=80',
    stock: 7,
    description: 'Teclado digital versátil para estudiar y crear música.'
  }
]

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}
