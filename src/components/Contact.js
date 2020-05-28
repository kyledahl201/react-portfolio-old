import React from "react";
import {Redirect, Link} from "react-router-dom"
// import axios from "axios";
// import {search} from "./Search.js";
// require('dotenv').config();


class Contact extends React.Component {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TREFLE SEARCH
    // componentDidMount() {
    //     var userQuery = ({search}).val().trim();
    //     var trefleUrl = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants?q=' + userQuery + '&token=' + process.env.REACT_APP_TREFLE_KEY;
    //     axios.get(trefleUrl)
    //       .then(res => {
    //         const plants = res.data;
    //         this.setState({ plants });
    //       })
    //   }
   
    render() {
        return (
            <div className="Contact">Search results!
            
            
            
            <br/>
            
            <Link to="/main">Main page</Link>
            
            
            </div>
           


            
        );
    }

}

export default Contact;