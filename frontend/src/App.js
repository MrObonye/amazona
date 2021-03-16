import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="">
            <a href="/" className="brand">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </Switch>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
