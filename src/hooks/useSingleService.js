
import { useEffect } from 'react';
import { useState } from 'react';
const useSingleService = (props) => {
    const id = props;
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [id]);
    // console.log(services, id);
    return [services];
}

export default useSingleService;