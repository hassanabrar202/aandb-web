import {useNavigate} from "react-router-dom";

const CreateAd = () => {
    const navigate=useNavigate()
    return(
        <div>
            <div className="min-h-screen py-2 bg-gray-100">
                    <div className=''>
                        <div className="min-h-screen bg-white rounded shadow-lg  px-4 md:p-8 mb-6">
                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="full_name">Name</label>
                                            <input type="text" name="full_name" id="full_name"
                                                   className="h-10 border mt-1 rounded px-4 w-full "
                                                   value=""/>
                                        </div>
                                        <div className="md:col-span-5">
                                            <label htmlFor="full_name">Description</label>
                                            <textarea name="full_name" id="full_name" rows={12} cols={12}
                                                   className=" border mt-1 rounded px-4 w-full "
                                                   value=""/>
                                        </div>
                                        <div>
                                            <label htmlFor="countries"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                                                category</label>
                                            <select id="countries"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Choose a category</option>
                                                <option value="US">Bird</option>
                                                <option value="CA">Live Stock</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="email">Price</label>
                                            <input type="number" name="email" id="email"
                                                   className="h-10 border mt-1 rounded px-4 w-full " value=""
                                                   placeholder="10000"/>
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="address">Address / Street</label>
                                            <input type="text" name="address" id="address"
                                                   className="h-10 border mt-1 rounded px-4 w-full " value=""
                                                   placeholder=""/>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="city">City</label>
                                            <input type="text" name="city" id="city"
                                                   className="h-10 border mt-1 rounded px-4 w-full " value=""
                                                   placeholder=""/>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="country">Country / region</label>
                                            <div
                                                className="h-10  flex border border-gray-200 rounded items-center mt-1">
                                                <input name="country" id="country" placeholder="Country"
                                                       className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                       value=""/>
                                                <button tabIndex="-1"
                                                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                         stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                                <button tabIndex="-1" htmlFor="show_more"
                                                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                         stroke-linejoin="round">
                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="state">State / province</label>
                                            <div
                                                className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input name="state" id="state" placeholder="State"
                                                       className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                       value=""/>
                                                <button tabIndex="-1"
                                                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                         stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                                <button tabIndex="-1" htmlFor="show_more"
                                                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                         stroke-linejoin="round">
                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="md:col-span-1">
                                            <label htmlFor="zipcode">Zipcode</label>
                                            <input type="text" name="zipcode" id="zipcode"
                                                   className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                   placeholder="" value=""/>
                                        </div>


                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end px-6">
                                                <button
                                                    onClick={()=>navigate('/dashboard')}
                                                    className="border font-bold py-2 px-4 rounded">Cancel
                                                </button>
                                            </div>
                                            <div className="inline-flex items-end">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default CreateAd