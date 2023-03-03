import React from "react";
import DisplayInfor from "./Displayinfor";
import AddUserInfor from "./AddUseinfor";
class MyComponent extends React.Component{

    state = {
        listUsers:[
            {id: 1, name: "Hoi Dan It", age: "16"},
            {id: 2, name: "Eric", age: "26"},
            {id: 3, name: "HaryPhamDev", age: "69"},
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(">>> check data from parent: ", userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }
    render() {
        return (
            <>
            <br />
            <div className="a">
                <AddUserInfor 

                 handleAddNewUser={this.handleAddNewUser}
                
                />
                <br /><br />

                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
         </>
        );
    }
}
export default MyComponent;