import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/home";
import { Services } from "./screens/services";

function App() {
  const AppInside = (props) => (
    <Router>
      <Switch>
        <Route {...props} key={1} exact={true} path="/" component={(props) => <Home {...props} />}/>
        <Route {...props} key={2} exact={true} path="/services" component={(props) => <Services {...props} />}/>
        <Route {...props} key={3} exact={true} path="/clients" component={(props) => <Home {...props} />}/>
        <Route key={4} exact={true} path="/contact" component={(props) => <Home {...props} />}/>

        <Route key={20} exact={true} path="/politicas-de-privacidad" component={(props) => <Home {...props} />}/>
        <Route key={21} exact={true} path="/trabaja-con-nosotros" component={(props) => <Home {...props} />}/>
        <Route path="*" component={Home}/>
      </Switch>
    </Router>
  );
  return <AppInside />;
}

export default App;
