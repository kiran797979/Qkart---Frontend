import Register from "./components/Register";
import Product from "./components/Products";
import Login from "./components/Login";

import { Switch, Route } from "react-router-dom";

export const config = {
  endpoint: `https://bmkiran79-me-qkart-frontend-v2-1.onrender.com`,
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;