//here we inherits all the methods ands properties from Counter component 

import React from "react";
import Counter from "./Counter";

class HoverCounter extends Counter {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.handleEvent}>Hovered {this.state.count} times</h2>
            </div>
        )
    }
}


export default HoverCounter;