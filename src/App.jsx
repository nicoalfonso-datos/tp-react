import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a Musical Store 2.0!" />
      <ItemDetailContainer />
    </>
  )
}

export default App
