import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';

const Information = () => {
    const {serviceId} = useParams();

    const[service, setService]= useState({});
    useEffect( ()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[]);
    return (
        <div>
            <h2>details of: {service.name}</h2>
           <h2>Our service details: {serviceId}</h2>
        </div>
    );
};

export default Information;