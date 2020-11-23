import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Header className='headerContainer' />
          </div>

          <div className='bodyContainer'>
            <Route exact path='/' component={Homepage} />
            {/* <Route exact path='/poses' component={PosesManager} /> */}
            {/* <Route exact path='/poses/:id' component={Pose} /> */}
          </div>
          {/* <div className='footerContainer'>
            <Footer />
          </div> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
