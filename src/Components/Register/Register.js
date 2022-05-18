import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Register extends React.Component{

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
                    <label>Full name</label>
                    <input className="form-control" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" />
                </div>

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

                <h5 className="mt-2">Already registered? <strong style={registerStyle} onClick={() => this.props.loader('login')}>Log in</strong> now</h5>
            </form>
    }


}

export default Register