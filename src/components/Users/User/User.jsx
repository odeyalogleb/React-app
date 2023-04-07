import classes from './User.module.css';
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + props.data.id}>
                    <img className={classes.image} src={props.data.photos.small != null ?
                        props.data.photos.small : userPhoto} alt="" />
                </NavLink>
            </div>
            <div>
                {props.data.followed ?
                    <button onClick={() =>{
                        
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.data.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY":"e5ac2163-79b7-4c5e-83c4-80e218bc188d"
                            }
                        }).then(response => {
                            if (response.data.resultCode == 0){
                                props.unFollow(props.data.id) ;
                            }
                                
                        })
                    } }>Unfollow</button>
                    : <button onClick={() =>{
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.data.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY":"e5ac2163-79b7-4c5e-83c4-80e218bc188d"
                            }
                        }).then(response => {
                            if (response.data.resultCode == 0){
                                props.follow(props.data.id);
                            }
                            
                        })  
                    } }>Follow</button>}
            </div>
            <div>
                {props.data.name}
            </div>
            <div>
                {props.data.status}
            </div>
            <div>
                {"props.data.location.country"}
                {"props.data.location.city"}
            </div>
        </div>
    );
}

export default User;