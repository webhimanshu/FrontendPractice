import React from "react";

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
       
      increment = () =>{
       this.setState({count : this.state.count+4});
     }

    render() {
        return (
            <button onClick={this.increment}>
                {this.state.count}
            </button>
        )
    }
}