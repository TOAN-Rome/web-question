import React from "react";
import DisplayInfor from "./Displayinfor";
import UserInfor from "./Useinfor";
class MyComponent extends React.Component{

    state = {
        listUsers:[
            {id: 1, name: "Hoi Dan It", age: "16"},
            {id: 1, name: "Eric", age: "26"},
            {id: 1, name: "HaryPhamDev", age: "69"},
        ]
    }
    render(){
        return(
            <div>
                <UserInfor />
                <br /><br />

                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}
export default MyComponent;