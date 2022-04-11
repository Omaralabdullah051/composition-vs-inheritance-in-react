//here we inherits all the methods ands properties from Counter component 

import React from "react";
import Counter from "./Counter";

class ClickCounter extends Counter {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>Click {this.state.count} times</button>
            </div>
        )
    }
}


export default ClickCounter;