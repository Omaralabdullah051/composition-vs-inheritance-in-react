//parent component

import React from "react";

class Counter extends React.Component {

    state = { count: 0 };

    handleEvent = () => this.setState((prevState) => ({ count: prevState.count + 1 }));

    render() {
        return (
            <div>
                <h2>Thi is a Counter Component</h2>
            </div>
        );
    }
}

export default Counter;