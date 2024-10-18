import axios from "axios";
import React, { useRef, useState } from "react";

const AddProcessor = () => {

    const[processor, setProcessor] = useState({
        name: '',
        model: '',
        cores: '',
        threads: '',
        baseClock: '',
        boostClock: '',
        price: '',
        imageUrl: ''
    });
    const[image, setImage] = useState(null);
    const[errorMessage, setErrorMessage] = useState('');
    const[successMessage, setSuccessMessage] = useState('');
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProcessor((prevProcessor) => ({
            ...prevProcessor,
            [name]: value,
        }));
    }
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', processor.name);
        formData.append('model', processor.model);
        formData.append('cores', processor.cores);
        formData.append('threads', processor.threads);
        formData.append('baseClock', processor.baseClock);
        formData.append('boostClock', processor.boostClock);
        formData.append('price', processor.price);
        formData.append('imageUrl', image);

        try{
            const response = await axios.post('http://localhost:3001/processors', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSuccessMessage('Processor successfully added!');
            setErrorMessage('');
            setProcessor({
                    name: '',
                    model: '',
                    cores: '',
                    threads: '',
                    baseClock: '',
                    boostClock: '',
                    price: ''
      });
      setImage(null);   
      if(fileInputRef.current){
        fileInputRef.current.value = '';
      }

        }catch(error){
        setErrorMessage('Faild to add processor. Error: ' +error.message);
    }
}

    return(
        <div>
            <h1>ADD PROCESSOR</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label>Name:</label>
                    <input
                    type="text"
                    name="name"
                    value={processor.name}
                    onChange={handleChange}
                    required
                    />
                    <label>Model:</label>
                    <input
                    type="text"
                    name="model"
                    value={processor.model}
                    onChange={handleChange}
                    required
                    />
                    <label>Cores:</label>
                    <input
                    type="number"
                    name="cores"
                    value={processor.cores}
                    onChange={handleChange}
                    required
                    />
                    <label>Threads:</label>
                    <input
                    type="number"
                    name="threads"
                    value={processor.threads}
                    onChange={handleChange}
                    required
                    />
                    <label>Base Clock:</label>
                    <input
                    type="number"
                    name="baseClock"
                    value={processor.baseClock}
                    onChange={handleChange}
                    required
                    />
                    <label>Boost Clock:</label>
                    <input
                    type="number"
                    name="boostClock"
                    value={processor.boostClock}
                    onChange={handleChange}
                    required
                    />
                    <label>Price:</label>
                    <input
                    type="number"
                    name="price"
                    value={processor.price}
                    onChange={handleChange}
                    required
                    />
                    <label>Image:</label>
                    <input
                    type="file"
                    name="imageUrl"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    />
                </div>
                <button type="submit">Add processor</button>
                

            </form>

    
        </div>
    )

}




export default AddProcessor;