import './App.css';
import { Home, OtherRoutes, AllItems, Cart, Details } from './layouts/Layouts';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {

  const otherRoutes = [
    {
      path: "/dresses",
      title: "Dresses"
    },
    {
      path: "/seasonal",
      title: "Seasonal"
    },
    {
      path: "/denims",
      title: "Denims"
    },
    {
      path: "/t-shirts",
      title: "TShirts"
    },
    {
      path: "/tops",
      title: "Tops"
    }
  ];

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/all-items" component={AllItems} />
          <Route path="/details" component={Details} />
          {otherRoutes.map((val,key) => {
            return(
              <Route key={key} path={val.path} component={() => {
                return <OtherRoutes title={val.title} />
              }}
              />
            ) 
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
