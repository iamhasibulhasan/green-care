
import { useState } from 'react';
import { useEffect } from 'react';


const useSingleService = (props) => {
    const { id } = props;
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);

    // return necessary things
    return [service];

}

export default useSingleService;