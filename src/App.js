import React, {Component} from 'react';
import profile_img from './img/my_pic.jpg';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1 className="title">My book collection</h1>
        <img className="profile-pic" src={profile_img} alt="profile-pic"/>
      
        <ol className="list">
        <p>Books I've read</p>
          <li>
            <a href="http://www.google.com/search?q=The+Da+Vinci+Code">The Da Vinci Code</a>
          </li>
          <li>
            <a href="http://www.google.com/search?q=Digital+Fortress">Digital Fortress</a>
          </li>
          <li>
            <a href="http://www.google.com/search?q=Thus+spoke+Zarathustra">Thus spoke Zarathustra</a>
          </li>
          <li>
          <a href="http://www.google.com/search?q=Frankenstein">Frankenstein</a>
          </li>
          <li>
          <a href="http://www.google.com/search?q=Sherlock+Holmes">Sherlock Holmes</a>
          </li>
        </ol>
        
        <ul className="list">
          <p>Currently reading</p>
          <li>
          <a href="http://www.google.com/search?q=Ultimate+Hitchhiker%27s+guide+to+the+galaxy">Ultimate Hitchhiker's guide to the galaxy</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default App;