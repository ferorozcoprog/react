import { Header } from "./components/Header/Header"
import "./styles/styles.scss"
import "./App.css"
import { ProductCard } from "./components/ProductCard/ProductCard"

function App() {
  
  const products = [
        {
          name: "Camisa 1",
          price: 129.99,
          imageUrl: "/Camisa1.jpg",
        },
        {
          name: 'Camisa 2',
          price: 109.99,
          imageUrl: "/Camisa2.jpg",
        },
    
      ]
    
      return (
        <div>
          <Header />
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="grid gap-4 grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
        </div>
      )
    }
    export default App