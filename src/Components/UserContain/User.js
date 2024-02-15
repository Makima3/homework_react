
export const User = ({user}) => {
    const {id, name} = user

    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <button>User Details</button>
        </div>
    );
};
