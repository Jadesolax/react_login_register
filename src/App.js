import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from "./Components/Login/Login"
import Register from './Components/Register/Register';
import Menu from "./Components/Menu/Menu";

class App extends React.Component{

  constructor(props){
    super(props)

    
    //get the options
    let current_page = localStorage.getItem("current-page");

    let selectOptions;
    if(current_page === "login"){
      console.log("This is login")
        selectOptions = <React.Fragment>
                          <option selected>Select Page</option>
                          <option value='register'>Register</option>
                          <option value='login' selected>Log in</option>
                        </React.Fragment>
    }else{
      console.log("This is register")
      selectOptions = <React.Fragment>
                        <option>Select Page</option>
                        <option value='register' selected>Register</option>
                        <option value='login'>Log in</option>
                    </React.Fragment>

    }

    

    //app state
    this.state = {
      default_page : localStorage.getItem("current-page"),
      is_user_logged_in: false,
      is_client_verified: false,
      selectOptions: selectOptions
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

  changePage = (event) => {
    let pagename = event.target.value

    this.loadPage(pagename)
    


  }

  render(){
    

    let current_page = this.state.default_page

    console.log(current_page)

                  
    if(current_page === "login"){

      console.log(this.state)

      this.state.selectOptions = 
                  <React.Fragment>
                      <option>Select Page</option>
                      <option value='register'>Register</option>
                      <option value='login' selected>Log in</option>
                  </React.Fragment>
    }else{
      console.log('We are here Register')
      this.state.selectOptions = 
      <React.Fragment>
          <option>Select Page</option>
          <option value='register' selected>Register</option>
          <option value='login'>Log in</option>
      </React.Fragment>


    }

  

    let pageOptions =  <React.Fragment>
                        {this.state.selectOptions}
                      </React.Fragment>
    
    let displayPage;
    if(current_page == "login"){
        displayPage = <Login loader={this.loadPage} />
    }else{
      displayPage = <Register loader={this.loadPage} />
    }
  

    return (
      <div className="App">
        <header className="App-header">
        <Menu appname='Simple Application'></Menu>
          <select onChange={(event) => this.changePage(event)}>
              {pageOptions}
          </select>
          <img src={logo} className="App-logo" alt="logo" />
              {displayPage}
        </header>
      </div>
    );


  }


}

export default App;
