import axios from "axios";
import User from "./User/User"
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        let userElements = this.props.users.map(u => <User data={u} follow={this.props.follow} unfollow={this.props.unfollow} />);
        return (
            <div>
                {userElements}
            </div>
        );
    }
}

export default Users;