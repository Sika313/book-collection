import React, {Component} from 'react';
import profile_img from './img/my_pic.jpg';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>My book collection</h1>
        <img src={profile_img} alt="PROFILE IMAGE" />
      </div>
    )
  }
}

export default App;