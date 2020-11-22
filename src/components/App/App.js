import React from "react";
import Header from "./Header/Header";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {" "}
        <BrowserRouter>
          <div>
            <Header className='headerContainer' />
          </div>

          <div className='bodyContainer'>
            {/* <Route exact path='/' component={Homepage} />
            <Route exact path='/poses' component={PosesManager} />
            <Route exact path='/poses/:id' component={Pose} />

            <Route exact path='/workouts' component={WorkoutsManager} />
            <Route exact path='/workouts/:id' component={Workout} />

            <Route exact path='/session' component={Session} /> */}
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
