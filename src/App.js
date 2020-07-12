import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Portfolios from "./pages/Portfolios";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
const publicPath = process.env.PUBLIC_URL;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${publicPath}/about`} component={About} />
        <Route path={`${publicPath}/resume`} component={Resumes} />
        <Route path={`${publicPath}/portfolios`} component={Portfolios} />
        <Route path={`${publicPath}/blogs`} exact component={Blogs} />
        <Route path={`${publicPath}/blogs/blog-details/:id/:title`} component={BlogDetails} />
        <Route path={`${publicPath}/contact`} component={Contact} />
        {/* have to be last */}
        <Route path={publicPath} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
