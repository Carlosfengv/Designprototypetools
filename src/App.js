import React,{ Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Main from './Components/Main/Main';
import Data from './Contents/Contens';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      WebTitle: Data.WebTitle,
      logo: Data.imgURL,
      Contens: Data.Contens,
      functionName: Data.Contens.Name,
      functionIndex: Data.Contens.Decription,
    }
  }
  macthPath = () =>{
      const query = this.props.match
      const fuchlist = [...this.state.Contens]
      console.log(query)
  }
  render(){
    return (
      <div className="App">
        <Navbar WebTitle={this.state.WebTitle} logo={this.state.logo}></Navbar>
        <div className="wrapper">
            <Router>
              <Menu
                refs={this.Menu}
                parent={this}
                Contens={this.state.Contens}
                onClick={()=>this.macthPath(this)}
                ></Menu>
                <Route
                  key={this.state.functionName}
                  path={'/:'+this.state.functionName}
                  children={({ match }) => (
                    <Main 
                      functionName={this.state.functionName}
                      Decription={this.props.Decription}
                      ></Main>
                  )}

                  >
                </Route>
            </Router>
        </div>
      </div>
    );
  }
}
export default App;
