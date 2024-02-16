import {useNavigate} from "react-router-dom";
export const User = ({user}) => {
    const {id, name} = user
    const navigate = useNavigate()
    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <button onClick={() => navigate(`/users/${id}`)}>User details</button>
            <hr/>
            <hr/>
        </div>
    );
};
