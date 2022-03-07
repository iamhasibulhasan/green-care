import { useState, useEffect } from "react";


const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    // return necessary things
    return [doctors];

}

export default useDoctors;