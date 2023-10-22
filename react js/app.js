import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/catalog" exact component={Catalog} />
            <Route path="/catalog/:category" component={Catalog} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

const Home = () => <h2>Home</h2>;

export default App;
