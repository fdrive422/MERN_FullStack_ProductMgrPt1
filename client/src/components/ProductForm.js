import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8000/api/products', {
                title,
                price,
                description
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="border rounded p-3 m-5">
            <h2 className="text-center">Product Manager</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3 text-left">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="Price" className="form-label">
                        Price:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="Price"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    ></textarea>

                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ProductForm;