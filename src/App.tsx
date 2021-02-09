import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import About from './view/components/About/About';
import AllRecipes from './view/components/AllRecipes/AllRecipes';
import Contact from './view/components/Contact/Contact';
import Home from './view/components/Home/Home';
import RecipeRoot from './view/components/Recipes/RecipeRoot';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
        <HashRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path={["/about"]}>
                    <About />
                </Route>
                <Route exact path={["/contact"]}>
                    <Contact />
                </Route>
                <Route exact path={["/"]}>
                    {/* <Home /> */}
                    <AllRecipes />
                </Route>
                <Route exact path={["/recipes/"]}>
                    <AllRecipes />
                </Route>
                <Route path={["/recipes/:recipeId"]}>
                    <RecipeRoot />
                </Route>
            </Switch>
        </HashRouter>
    </div>
  )
}
export default App;
