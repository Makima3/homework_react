import {useNavigate} from "react-router-dom";

export const Detail = ({user}) => {
    const {id, name, username, email, address: {street, city, zipcode}, phone, website} = user

    const navigate = useNavigate()
    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>USERNAME: {username}</div>
            <div>E-MAIL: {email}</div>
            <div>ADDRESS:</div>
            <div>STREET: {street}</div>
            <div>CITY: {city}</div>
            <div>ZIPCODE: {zipcode}</div>
            <div>PHONE: {phone}</div>
            <div>WEBSITE: {website}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>Post of current user</button>
        </div>
    );
};

