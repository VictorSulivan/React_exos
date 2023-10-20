import { NavLink } from "react-router-dom"
import users from "../../Components/profil/user"

const UserList = () => {
    return ( 
        <div>
            <ul>
            {users.map((user) => (
                <div key={user.id} className="card">
                <li>{user.tache}</li>
                <NavLink
                to={`/user/${user.id}`}
                >
                Link {user.id}
                </NavLink>
                </div>
            ))}
            </ul>
        </div>
    )
}

export default UserList