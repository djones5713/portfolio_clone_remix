import React, { Component } from "react";
import "./Title.css";

const title  = props => <div>Travelers</div>


class Title extends Component {
    render(){
        return (
            <div className="title-design">
                {title({})}
            </div>
        );
    }
}

export default Title;




