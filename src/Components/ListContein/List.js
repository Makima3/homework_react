import css from './List.module.css'

const List = ({list}) => {
    const{userId, id, title, completed}=list

    return (
        <>
            <div className={css.List}>
                <div>userId: {userId}</div>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>completed: {completed}</div>
            </div>
            <hr/>
        </>

    );
};

export {List};

