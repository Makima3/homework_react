 export const Launch = ({item}) => {

    const {mission_name, launch_year, links: {mission_patch_small} } = item

    return (
        <div>
            <div>Mission:{mission_name}</div>
            <div>Year:{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
            <hr/>
        </div>
    );
};
