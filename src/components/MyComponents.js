import React from "react";

class MyComponent extends React.Component{

    state={
        name:'HarryPhamDev',
        address: 'Hoi dan IT',
        age: 26
    };

    //JSX
    render(){
        return(
            <div>
                My first component

                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}
export default MyComponent;