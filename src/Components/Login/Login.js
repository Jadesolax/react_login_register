import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Login extends React.Component{

    constructor(props){
        super(props)

        this.props = props
    }

    render(){

        let registerStyle = {
            textDecoration: "underline",
            color: 'red',
            cursor: 'pointer'
        }


        return <form className="form">
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" />
                </div>

                <div className="form-group mt-2">
                    <button className="btn btn-md btn-primary">Log in</button>
                </div>

                <h5 className="mt-2">Not registered? <strong style={registerStyle} onClick={() => this.props.loader('register')}>Register</strong> now</h5>
            </form>
    }


}

export default Login