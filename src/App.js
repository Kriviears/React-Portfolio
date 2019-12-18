import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AppContext from "./AppContext";
import "./App.css";

import Header from "./Header/Header";
import ProjectListMain from "./ProjectsMain/ProjectListMain";
import HomeNav from "./HomeNav/HomeNav";
import ProjectsNav from "./ProjectsNav/ProjectsNav";
import CoverPage from "./CoverPage/CoverPage";
import About from "./About/About";
import data from "./data";

class App extends Component {
  state = {
    projects: data.projects,
    currentPage: "Full Stack Developer",
    currentProject: {},
    currentTab: {}
  };

  chooseProject = name => {
    let current = this.state.projects.filter(proj => proj.name === name);
    this.setState({
      currentProject: current
    });
  };

  renderNavRoutes(){
    return (
      <>
        <Route key="/" path="/" component={HomeNav} />
        <Route path="/projects" component={ProjectsNav} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path='/' component={CoverPage}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={ProjectListMain}/>
      </>
    )
  }

  render() {
    const appContext = {
      projects: this.state.projects,
      currentPage: this.state.currentPage,
      currentProject: this.state.currentProject,
      currentTab: this.state.currentTab,
      setTab: this.setTab,
      chooseProject: this.chooseProject
    };
    
    return (
      <AppContext.Provider value={appContext}>
        <div className="App">

          <header className="App_header">
            <h1>
              <Link to='/'>Khari Riviears Portfolio</Link>
              <Header />
            </h1>
          </header>

        
          <nav className='App_nav'>
            {this.renderNavRoutes()}
          </nav>

        
          <main className='App_main'>
            {this.renderMainRoutes()}
          </main>
        
        
          
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
