import React, { Component } from "react";
import './Popup.css';

class Popup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.popupData !== null) {
            return (
                <div onClick={() => { this.props.closePopup()}} id="popupWrapper">
                    <div id="popup">
                        <span onClick={() => { this.props.closePopup()}} className="popupClose">X</span>
                        <p>kek</p>
                    </div>
                </div>
            )
        }
    }
}

export default Popup