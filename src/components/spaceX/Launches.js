import {Launch} from "./Launch";
import {useEffect, useState} from "react";
import {spaceService} from "../../services/spaceService";

const Launches = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        spaceService.getAll().then(({data}) => {
            const filtered = data.filter(item => item.launch_year !== '2020')
            setLaunches(filtered)
        })

    }, [])
    return (
        <div>
            {
                launches.map(launch => <Launch item={launch} key={launch.flight_number}/>)
            }
        </div>
    );
};

export {Launches};

