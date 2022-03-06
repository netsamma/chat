import './App.css';
import { useState } from 'react';
import Chat from './components/Chat';
import Card from './components/Card';
import Form from './components/Form';
import ClockFunc from './components/ClockFunc';
import ClockClass from './components/ClockClass';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from "./services/data";


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Chat/>
      {/* <Card/> */}
      {/* <ClockClass/>  */}
      {/* <ClockFunc/>  */}
      {/* <Form/> */}
      {/* <TodoList/> */}

      {/* <Header countCartItems={cartItems.length}></Header>
      <div className="wrapper">
        <Main 
          products={products} 
          onAdd={onAdd}>
        </Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}>
        </Basket>
      </div> */}
    </div>
  );
}


export default App;
