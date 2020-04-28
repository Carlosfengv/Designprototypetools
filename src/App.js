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
      functionName: Data.Contens[0],
      Decription:'',
      functionItem: [],
    }
  }
  
  getMenuIndex= (e) =>{
    this.setState({
      functionName: e.Name,
      Decription: e.Decription,
      functionItem: e.functionList
    })
    console.log(e)
    console.log(this.state.functionItem)

  }
  componentWillMount(){
     
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
                onClick={this.getMenuIndex}
                ></Menu>
                <Route
                  key={this.state.functionName}
                  path={'/:'+this.state.functionName}
                  children={
                    <Main 
                      Name={this.state.functionName}
                      Decription={this.state.Decription}
                      fuctionItem = {this.state.functionItem}
                    ></Main>
                  }

                  >
                </Route>
            </Router>
        </div>
      </div>
    );
  }
}
export default App;
