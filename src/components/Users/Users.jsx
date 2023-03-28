import axios from "axios";
import User from "./User/User"
import React from "react";
import classes from './Users.module.css';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged(p){
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }


    render() {

        //let pages = Math.ceil(this.totalUsersCount / this.pageSize);
        let userElements = this.props.users.map(u => <User data={u} 
            follow={this.props.follow} unfollow={this.props.unfollow} />);
        let pagesCount = [];

        for (let i = 1; i <=10 ; i++){
            pagesCount.push(i);
        }

        let pagesCountElements = pagesCount
            .map(p => {
                return (<span 
                    className={this.props.currentPage === p && classes.active}
                    onClick = {(e) => {this.onPageChanged(p)}} >{p}</span>)
            })
        return (
            <div>
                {pagesCountElements}
                {userElements}
            </div>
        );
    }
}

export default Users;