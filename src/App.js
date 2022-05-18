import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from "./Components/Login/Login"
import Register from './Components/Register/Register';

class App extends React.Component{

  constructor(){
    super()

    //app state
    this.state = {
      default_page : localStorage.getItem("current-page"),
      is_user_logged_in: false,
      is_client_verified: false
    }
  }

  loadPage = (pagename) =>{
      // this.setState({
      //   default_page: pagename
      // })

      if(pagename === "register"){
        this.setState({
          default_page: 'register'
        })
      }else{
        this.setState({
          default_page: 'login'
        })

      }

      //persistence
      localStorage.setItem("current-page", pagename);

      

  }

  render(){

    let current_page = this.state.default_page
    
    let displayPage;
    if(current_page == "login"){
        displayPage = <Login loader={this.loadPage} />
    }else{
      displayPage = <Register loader={this.loadPage} />
    }
  

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
              {displayPage}
        </header>
      </div>
    );


  }


}

export default App;
