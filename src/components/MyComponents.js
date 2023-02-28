import React from "react";

class MyComponent extends React.Component{

    state={
        name:'HarryPhamDev',
        address: 'Hoi dan IT',
        age: 26
    };
    handledClick=(event) => {
        console.log(">> click me my button")

        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random()*100)+1)
        })

        // this.setState({
        //     age: Math.floor((Math.random()*100)+1)
        // })
    }

    handleOnMoverOver(event){
        // console.log(event.pageX)
    }

    //JSX
    render(){
        return(
            <div>
                My first component

                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={(event)=> {this.handledClick(event)} }>Click me</button>
            </div>
        );
    }
}
export default MyComponent;