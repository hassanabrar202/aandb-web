import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productApi } from "../../api/product";
import { toast } from "react-toastify";
import { getLocalData } from "../../utils/utils";

const CreateAd = () => {
    const navigate = useNavigate();

    // State variables to store form data
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        address: "",
        city: "",
        country: "",
        state: "",
        zipcode: "",
        phone: "",
        birdDetails: {
            wingspan: 0,
            beakLength: 0,
            featherColor: "",
            singingAbility: "",
            lifespan: 0,
            diet: "",
            weight: 0,
            age: 0,
            color: "",
            healthCondition: "",
            breed: "",
            gender: "",
            origin: "",
        },
        livestockDetails: {
            weight: 0,
            age: 0,
            color: "",
            healthCondition: "",
            breed: "",
            gender: "",
            origin: "",
        },
    });

    // Destructure formData for easier access
    const {
        name,
        description,
        category,
        price,
        address,
        city,
        country,
        state,
        zipcode,
        phone,
        birdDetails,
        livestockDetails,
    } = formData;

    // Generic handleChange function to update form state
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("birdDetails")) {
            setFormData({
                ...formData,
                birdDetails: {
                    ...birdDetails,
                    [name.split(".")[1]]: value,
                },
            });
        } else if (name.startsWith("livestockDetails")) {
            setFormData({
                ...formData,
                livestockDetails: {
                    ...livestockDetails,
                    [name.split(".")[1]]: value,
                },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Submit handler
    const handleSubmit = async () => {
        try {
            const user = getLocalData("dbUser");
            if (!user) {
                throw new Error("User data not found");
            }

            const response = await productApi.createAd({
                name,
                description,
                category,
                price,
                userDetails: {
                    username: user.username,
                    email: user.email,
                    phone: phone || "03000000000",
                    address,
                    city,
                    country,
                },
                birdDetails: category === "bird" ? birdDetails : undefined,
                livestockDetails: category === "livestock" ? livestockDetails : undefined,
            });

            console.log(response);
            toast.success("Ad created successfully");

            // Optionally, you can redirect the user to another page after successful submission
            navigate("/dashboard");
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to create ad");
            // Handle error scenarios, such as displaying an error message to the user
        }
    };

    return (
        <div className="min-h-screen py-2 bg-gray-100 px-16">
            <div className="min-h-screen bg-white rounded shadow-lg px-4 md:p-8 mb-6">
                <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="h-10 border mt-1 rounded px-4 w-full"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="md:col-span-5">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                rows={4}
                                className="border mt-1 rounded px-4 w-full"
                                value={description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="md:col-span-5">
                            <label htmlFor="category">Select category</label>
                            <select
                                name="category"
                                id="category"
                                className="border mt-1 rounded px-4 w-full"
                                value={category}
                                onChange={handleChange}
                                style={{height:"40px"}}
                            >
                                <option value="">Choose a category</option>
                                <option value="bird">Bird</option>
                                <option value="livestock">Livestock</option>
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="phone">Phone No.</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="h-10 border mt-1 rounded px-4 w-full"
                                value={phone}
                                onChange={handleChange}
                            />
                        </div>
                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="wingspan">Wingspan</label>
                                <input
                                    type="number"
                                    name="birdDetails.wingspan"
                                    id="wingspan"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.wingspan}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="beakLength">Beak Length</label>
                                <input
                                    type="number"
                                    name="birdDetails.beakLength"
                                    id="beakLength"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.beakLength}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="featherColor">Feather Color</label>
                                <input
                                    type="text"
                                    name="birdDetails.featherColor"
                                    id="featherColor"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.featherColor}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="singingAbility">Singing Ability</label>
                                <select
                                    name="birdDetails.singingAbility"
                                    id="singingAbility"
                                    className="border mt-1 rounded px-4 w-full"
                                    value={birdDetails.singingAbility}
                                    onChange={handleChange}
                                    style={{height:"40px"}}
                                >
                                    <option value="">Select singing ability</option>
                                    <option value="excellent">Excellent</option>
                                    <option value="good">Good</option>
                                    <option value="average">Average</option>
                                </select>
                            </div>
                        )}
                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="lifespan">Lifespan</label>
                                <input
                                    type="number"
                                    name="birdDetails.lifespan"
                                    id="lifespan"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.lifespan}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="diet">Diet</label>
                                <input
                                    type="text"
                                    name="birdDetails.diet"
                                    id="diet"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.diet}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        {/*// bird details*/}
                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="weight">Weight</label>
                                <input
                                    type="number"
                                    name="birdDetails.weight"
                                    id="weight"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.weight}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    name="birdDetails.age"
                                    id="age"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.age}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="color">Color</label>
                                <input
                                    type="text"
                                    name="birdDetails.color"
                                    id="color"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.color}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="healthCondition">Health Condition</label>
                                <select
                                    name="birdDetails.healthCondition"
                                    id="healthCondition"
                                    className="border mt-1 rounded px-4 w-full"
                                    value={birdDetails.healthCondition}
                                    onChange={handleChange}
                                    style={{height:"40px"}}
                                >
                                    <option value="">Select health condition</option>
                                    <option value="healthy">Healthy</option>
                                    <option value="unhealthy">Unhealthy</option>
                                    <option value="vaccinated">Vaccinated</option>
                                </select>
                            </div>
                        )}

                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="breed">Breed</label>
                                <input
                                    type="text"
                                    name="birdDetails.breed"
                                    id="breed"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.breed}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="gender">Gender</label>
                                <select
                                    name="birdDetails.gender"
                                    id="gender"
                                    className="border mt-1 rounded px-4 w-full"
                                    value={birdDetails.gender}
                                    onChange={handleChange}
                                    style={{height:"40px"}}
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        )}

                        {category === "bird" && (
                            <div className="md:col-span-2">
                                <label htmlFor="origin">Origin</label>
                                <input
                                    type="text"
                                    name="birdDetails.origin"
                                    id="origin"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={birdDetails.origin}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        {category === "livestock" && (
                            <div className="md:col-span-2">
                                <label htmlFor="weight">Weight</label>
                                <input
                                    type="number"
                                    name="livestockDetails.weight"
                                    id="weight"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={livestockDetails.weight}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {category === "livestock" && (
                            <div className="md:col-span-2">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    name="livestockDetails.age"
                                    id="age"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={livestockDetails.age}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {category === "livestock" && (
                            <div className="md:col-span-2">
                                <label htmlFor="color">Color</label>
                                <input
                                    type="text"
                                    name="livestockDetails.color"
                                    id="color"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={livestockDetails.color}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {category === "livestock" && (
                            <div className="md:col-span-2">
                                <label htmlFor="healthCondition">Health Condition</label>
                                <select
                                    name="livestockDetails.healthCondition"
                                    id="healthCondition"
                                    className="border mt-1 rounded px-4 w-full"
                                    value={livestockDetails.healthCondition}
                                    onChange={handleChange}
                                    style={{height:"40px"}}
                                >
                                    <option value="">Select health condition</option>
                                    <option value="healthy">Healthy</option>
                                    <option value="unhealthy">Unhealthy</option>
                                    <option value="vaccinated">Vaccinated</option>
                                </select>
                            </div>
                        )}
                        {category === "livestock" && (
                            <div className="md:col-span-2">
                                <label htmlFor="breed">Breed</label>
                                <input
                                    type="text"
                                    name="livestockDetails.breed"
                                    id="breed"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={livestockDetails.breed}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        {category === "livestock" && (
                            <div className="md:col-span-2">
                                <label htmlFor="gender">Gender</label>
                                <select
                                    name="livestockDetails.gender"
                                    id="gender"
                                    className="border mt-1 rounded px-4 w-full"
                                    value={livestockDetails.gender}
                                    onChange={handleChange}
                                    style={{height:"40px"}}
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        )}
                        {category === "livestock" && (
                            <div className="md:col-span-2">
                                <label htmlFor="origin">Origin</label>
                                <input
                                    type="text"
                                    name="livestockDetails.origin"
                                    id="origin"
                                    className="h-10 border mt-1 rounded px-4 w-full"
                                    value={livestockDetails.origin}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        <div className="md:col-span-5 text-right">
                            <div className="inline-flex items-end px-6">
                                <button onClick={() => navigate("/dashboard")} className="border font-bold py-2 px-4 rounded">
                                    Cancel
                                </button>
                            </div>
                            <div className="inline-flex items-end">
                                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAd;
