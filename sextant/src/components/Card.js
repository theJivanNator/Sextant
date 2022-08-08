
import './banner.css'
import React, { useEffect, useState ,Component } from "react";
class Card extends Component {
    render() {
        return (
            <div className="blocks">
                <h2  >{this.props.name}</h2>
                <div >
                    {this.props.cardconent}
                </div>
            </div>
        );
    }
}

export default Card;
