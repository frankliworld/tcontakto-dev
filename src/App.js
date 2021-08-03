import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import "./App.css";
import { Home } from "./screens/home";
import { Work } from "./screens/work";
import { Blog } from "./screens/blog";
import { DetailWork } from "./screens/detailWork";
import { DetailBlog } from "./screens/detailBlog";

function App() {
  const AppInside = (props) => (
    <Router>
      <Switch>
        <Route {...props} key={1} exact={true} path="/" component={(props) => <Home {...props} />}/>
        <Route {...props} key={2} exact={true} path="/work-info" component={(props) => <DetailWork {...props} />}/>
        <Route {...props} key={2} exact={true} path="/blog-info" component={(props) => <DetailBlog {...props} />}/>

        <Route {...props} key={10} exact={true} path="/work" component={(props) => <Work {...props} />}/>
        
        <Route {...props} key={20} exact={true} path="/blog" component={(props) => <Blog {...props} />}/>
        
        <Route path="*" component={Home}/>
      </Switch>
    </Router>
  );
  return <AppInside />;
}

export default App;
