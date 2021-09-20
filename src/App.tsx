import { Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <header>这里是头部</header>
      <main>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </main>
      <footer>这里是底部</footer>
    </>
  );
}

export default App;
