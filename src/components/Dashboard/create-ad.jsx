import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {productApi} from "../../api/product";
import {toast} from "react-toastify";

const CreateAd = () => {
    const navigate = useNavigate();

    // State variables to store form data
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");

    // Event handlers to update state variables
    const handleNameChange = (e) => setName(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleCityChange = (e) => setCity(e.target.value);
    const handleCountryChange = (e) => setCountry(e.target.value);
    const handleStateChange = (e) => setState(e.target.value);
    const handleZipcodeChange = (e) => setZipcode(e.target.value);

    // Submit handler
    const handleSubmit = async () => {
        try {
          const  response= await productApi.createAd({
                name,
                description,
                category,
                price,
                userDetails: {
                    // Assuming userDetails is an object containing username, email, phone, address, city, and country
                    username: "awais", // Add the username value here
                    email: "test@gmail.com", // Add the email value here
                    phone: "03221491133", // Add the phone value here
                    address: "scsadsa", // Add the address value here
                    city: "sdsfs", // Add dthe city value here
                    country: "sdsfdsf", // Add the country value here
                }
            })
            console.log(response)
            toast.success("Ad created successfully")
            console.log('sdfsdf')
            console.log('sdfsdf')
            // Optionally, you can redirect the user to another page after successful submission
            navigate('/dashboard');
        } catch (error) {

            console.error('Error:', error);
            // Handle error scenarios, such as displaying an error message to the user
        }
    };


    return (
        <div>
            <div className="min-h-screen py-2 bg-gray-100 px-16">
                <div className="">
                    <div className="min-h-screen bg-white rounded shadow-lg  px-4 md:p-8 mb-6">
                        <div className="lg:col-span-2">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <label htmlFor="full_name">Name</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        id="full_name"
                                        className="h-10 border mt-1 rounded px-4 w-full"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className="md:col-span-5">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        rows={4}
                                        cols={50}
                                        className="border mt-1 rounded px-4 w-full"
                                        value={description}
                                        onChange={handleDescriptionChange}
                                    />
                                </div>
                                <div className="md:col-span-5">
                                    <label htmlFor="category">Select category</label>
                                    <select
                                        id="category"
                                        className="border mt-1 rounded px-4 w-full"
                                        value={category}
                                        onChange={handleCategoryChange}
                                    >
                                        <option value="">Choose a category</option>
                                        <option value="bird">Bird</option>
                                        <option value="live_stock">Live Stock</option>
                                    </select>
                                </div>
                                <div className="md:col-span-5">
                                    <label htmlFor="price">Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        className="h-10 border mt-1 rounded px-4 w-full"
                                        value={price}
                                        onChange={handlePriceChange}
                                    />
                                </div>
                                <div className="md:col-span-3">
                                    <label htmlFor="address">Address / Street</label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="h-10 border mt-1 rounded px-4 w-full"
                                        value={address}
                                        onChange={handleAddressChange}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        className="h-10 border mt-1 rounded px-4 w-full"
                                        value={city}
                                        onChange={handleCityChange}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="country">Country / region</label>
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        className="h-10 border mt-1 rounded px-4 w-full"
                                        value={country}
                                        onChange={handleCountryChange}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="state">State / province</label>
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        className="h-10 border mt-1 rounded px-4 w-full"
                                        value={state}
                                        onChange={handleStateChange}
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <input
                                        type="text"
                                        name="zipcode"
                                        id="zipcode"
                                        className="h-10 border mt-1 rounded px-4 w-full"
                                        value={zipcode}
                                        onChange={handleZipcodeChange}
                                    />
                                </div>
                                <div className="md:col-span-5 text-right">
                                    <div className="inline-flex items-end px-6">
                                        <button onClick={() => navigate('/dashboard')} className="border font-bold py-2 px-4 rounded">Cancel</button>
                                    </div>
                                    <div className="inline-flex items-end">
                                        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAd;
