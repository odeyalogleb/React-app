import User from "./User/User";
import classes from './Users.module.css';

const Users = (props) => {
    debugger;
    //let pages = Math.ceil(this.totalUsersCount / this.pageSize);
    let userElements = props.users.map(u => <User data={u} 
        follow={props.follow} unFollow={props.unFollow} />);
    let pagesCount = [];

    for (let i = 1; i <=10 ; i++){
        pagesCount.push(i);
    }

    let pagesCountElements = pagesCount
        .map(p => {
            return (<span 
                className={props.currentPage === p && classes.active}
                onClick = {(e) => {props.onPageChanged(p)}} >{p}</span>)
        })
    return (
        <div>
            {pagesCountElements}
            {userElements}
        </div>
    );
}

export default Users;