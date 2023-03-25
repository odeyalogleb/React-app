import User from "./User/User"

const Users = (props) => {
    
    
    if (props.users.length === 0) {
        props.setUsers( 
            [{
                id: 1, followed: true,
                photoURL: "https://i.pinimg.com/originals/85/79/78/857978afa22ddb0bf7c4a6a68b7afb05.jpg",
                location: { country: "Russia", city: "Moscow" }, status: "i love rus", name: "STAS S"
            },
            {
                id: 2, followed: false,
                photoURL: "https://i.pinimg.com/originals/85/79/78/857978afa22ddb0bf7c4a6a68b7afb05.jpg",
                location: { country: "Russia", city: "SPB" }, status: "i am boss", name: "STAS A"
            },
            {
                id: 3, followed: true,
                photoURL: "https://i.pinimg.com/originals/85/79/78/857978afa22ddb0bf7c4a6a68b7afb05.jpg",
                location: { country: "Russia", city: "TLT" }, status: "i am stas", name: "STAS F"
            }]
        );
    }
    let userElements = props.users.map(u => <User data={u} follow={props.follow} unfollow={props.unfollow} />);

    

    
    return (
        <div>
            {userElements}
        </div>

    );
}

export default Users;

