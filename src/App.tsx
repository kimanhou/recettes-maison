import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import AllRecipes from './view/components/AllRecipes/AllRecipes';
import Home from './view/components/Home/Home';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
        <HashRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path={["/about"]}>
                    {/* <About /> */}
                </Route>
                <Route exact path={["/contact"]}>
                    {/* <Contact /> */}
                </Route>
                <Route exact path={["/"]}>
                    <Home />
                </Route>
                <Route exact path={["/recipes/"]}>
                    <AllRecipes />
                </Route>
                {/* <Route path={["/recipes/:recipeId"]}>
                    <PostRoot />
                </Route> */}
            </Switch>
        </HashRouter>
    </div>
  )
}
export default App;
