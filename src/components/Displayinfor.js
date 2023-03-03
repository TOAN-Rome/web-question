import React from "react";
import './Displayinfor.scss';
import logo1 from './../logo.svg';

class DisplayInfor extends React.Component {
    
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {

        const { listUsers } = this.props;
        // console.log(listUsers)
        // console.table(listUsers)
        return(
            <div className="display-infor-container">
                {/* <img src={logo1} /> */}
                <div>
                    <span onClick={() => {this.handleShowHide()}}> 
                         {this.state.isShowListUser === true ? "Hide list users:" :"Show list users:"}
                    </span>
            </div>
            { this.state.isShowListUser &&
            <>
                {listUsers.map((user, index) => {
                    
                    return (

                        <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name} </div>
                                    <div>My age's {user.age} </div>
                                </div>
                                <div>
                                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete </button>
                                </div>
                                <hr />
                            </div>
                    )
                })}
            </>
            }
            </div>
        )
    }
}

export default DisplayInfor;