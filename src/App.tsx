import { Switch, Route } from "react-router-dom";
import routes from "@/routes";
import { Header, Main, Footer, CenterText } from "@/components/Styled";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header>BROCCOLI &amp; CO.</Header>
      <Main>
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
      </Main>
      <Footer>
        <div>
          <CenterText>
            <span className="text">Made With </span>
            &hearts;
            <span className="text"> in Melbourne.</span>
          </CenterText>
          <CenterText>
            &copy;
            <span className="text">
              2016 Broccoli &amp; Co. All rights reserved.
            </span>
          </CenterText>
        </div>
      </Footer>
    </div>
  );
}

export default App;
