import { Fragment } from "react";

// Components
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
