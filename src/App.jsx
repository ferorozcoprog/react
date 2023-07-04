import { Header } from "./components/Header/Header"
import  {ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import "./styles/styles.scss"

function App() {
  
  return(
<div>

<Header />

<ItemListContainer notificacion= {"Próximamente estarán los articulos a la venta"} />

</div>

  ) 
}

export default App
