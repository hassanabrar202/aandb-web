import React, { useState, useEffect } from "react";
import { productApi } from "../../api/product";

const ProductDetails = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            const response = await productApi.getById('667a814128474d57393ead61');
            console.log(response)
            setData(response.data.data);
        } catch (error) {
            console.error("Failed to fetch product data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []); // Empty dependency array to run once on mount

    if (!data) {
        return <div className="text-center text-gray-500">Loading...</div>; // Render loading state
    }

    return (

        <>
            <div className="font-sans bg-white">
                <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                    <div
                        className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center flex flex-wrap">

                            <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                                <img src={data?.image ?? ''} alt="Product"
                                     className="w-3/4 rounded object-cover mx-auto"/>
                            </div>

                            <div className="lg:col-span-2">
                                <h2 class="text-2xl font-extrabold text-gray-800">{data.name}</h2>
                                <div className="flex space-x-2 mt-4">
                                    <h4 className="text-gray-800 text-base">
                                        <strong>Description:</strong> {data.description}</h4>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    <p className="text-gray-800 text-3xl font-bold">
                                        <strong>Price:</strong> {data.price} rupees</p>
                                </div>
                                <div className="flex space-x-2 mt-4">
                                    <h4 className="text-gray-800 text-base"><strong>Category:</strong> {data.category}
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    <button type="button"
                                            className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">
                                        Chat Here
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                        <h3 className="text-xl font-bold text-gray-800">Information</h3>
                        <ul className="mt-4 space-y-6 text-gray-800">

                            {data.livestockDetails && (
                                <>
                                    <li className="text-sm">Weight <span
                                        className="ml-4 float-right">{data.livestockDetails.weight}</span></li>
                                    <li className="text-sm">Age <span
                                        className="ml-4 float-right">{data.livestockDetails.age}</span></li>
                                    <li className="text-sm">Color <span
                                        className="ml-4 float-right">{data.livestockDetails.color}</span></li>
                                    <li className="text-sm">Health Condition <span
                                        className="ml-4 float-right">{data.livestockDetails.healthCondition}</span>
                                    </li>
                                    <li className="text-sm">Breed <span
                                        className="ml-4 float-right">{data.livestockDetails.breed}</span></li>
                                    <li className="text-sm"> Gender <span
                                        className="ml-4 float-right">{data.livestockDetails.gender}</span>
                                    </li>
                                    <li className="text-sm">Origin <span
                                        className="ml-4 float-right">{data.livestockDetails.origin}</span>
                                    </li>
                                </>
                            )}

                            {data.birdDetails && (
                                <>
                                    <li className="text-sm">Wingspan <span
                                        className="ml-4 float-right">{data.birdDetails.wingspan}</span></li>
                                    <li className="text-sm">Beak Length <span
                                        className="ml-4 float-right">{data.birdDetails.beakLength}</span></li>
                                    <li className="text-sm">Feather Color <span
                                        className="ml-4 float-right">{data.birdDetails.featherColor}</span></li>
                                    <li className="text-sm">Singing Ability <span
                                        className="ml-4 float-right">{data.birdDetails.singingAbility}</span>
                                    </li>
                                    <li className="text-sm">Lifespan <span
                                        className="ml-4 float-right">{data.birdDetails.lifespan}</span></li>
                                    <li className="text-sm"> Diet <span
                                        className="ml-4 float-right">{data.birdDetails.diet}</span>
                                    </li>

                                    <li className="text-sm">Weight <span
                                        className="ml-4 float-right">{data.birdDetails.weight}</span></li>
                                    <li className="text-sm">Age <span
                                        className="ml-4 float-right">{data.birdDetails.age}</span></li>
                                    <li className="text-sm">Color <span
                                        className="ml-4 float-right">{data.birdDetails.color}</span></li>
                                    <li className="text-sm">Health Condition <span
                                        className="ml-4 float-right">{data.birdDetails.healthCondition}</span>
                                    </li>
                                    <li className="text-sm">Breed <span
                                        className="ml-4 float-right">{data.birdDetails.breed}</span></li>
                                    <li className="text-sm"> Gender <span
                                        className="ml-4 float-right">{data.birdDetails.gender}</span>
                                    </li>
                                    <li className="text-sm">Origin <span
                                        className="ml-4 float-right">{data.birdDetails.origin}</span>
                                    </li>

                                </>
                            )}

                        </ul>
                    </div>

                    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                        <h3 className="text-xl font-bold text-gray-800">Customer Information</h3>
                        <ul className="mt-4 space-y-6 text-gray-800">

                            {data.userDetails && (
                                <>
                                    <li className="text-sm">Username <span
                                        className="ml-4 float-right">{data.userDetails.username}</span></li>
                                    <li className="text-sm">Email <span
                                        className="ml-4 float-right">{data.userDetails.email}</span></li>
                                    <li className="text-sm">Phone <span
                                        className="ml-4 float-right">{data.userDetails.phone}</span></li>
                                    <li className="text-sm">Address <span
                                        className="ml-4 float-right">{data.userDetails.address}</span>
                                    </li>
                                    <li className="text-sm">City <span
                                        className="ml-4 float-right">{data.userDetails.city}</span></li>
                                    <li className="text-sm"> Country <span
                                        className="ml-4 float-right">{data.userDetails.country}</span>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                        <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                        <div className="grid md:grid-cols-2 gap-12 mt-4">
                            <div>
                                <div className="flex items-start">
                                    <img src="https://readymadeui.com/team-2.webp"
                                         className="w-12 h-12 rounded-full border-2 border-white"/>
                                    <div className="ml-3">
                                        <h4 className="text-sm font-bold text-gray-800">John Doe</h4>
                                        <div className="flex space-x-1 mt-1">
                                            <p className="text-xs !ml-2 font-semibold text-gray-800">2 mins ago</p>
                                        </div>
                                        <p className="text-sm mt-4 text-gray-800">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna
                                            aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
        ;
};

export default ProductDetails;
