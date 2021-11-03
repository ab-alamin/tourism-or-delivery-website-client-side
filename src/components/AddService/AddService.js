import React from 'react';
import './AddService.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        axios.post('https://serene-ravine-03031.herokuapp.com//services',data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    return (
        <div className="add-service">
            <h2>Please Add a Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} 
      placeholder="Name" />
      <textarea {...register("description")} placeholder="Description" />
      <input type="number" {...register("price")} placeholder="Price" />
      <input {...register("img")} placeholder="image url" />
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddService;