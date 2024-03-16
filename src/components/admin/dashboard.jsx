import {GStateItem} from "../g-state-item/g-state-item";
import {useState} from "react";

export const AdminDashboard = () => {
    const [tab, setTab] = useState('users')
    return (
        <div className="container mx-auto px-4">
            <div className='py-6'>
                <div className='flex item-center gap-4'>
                    <GStateItem label='Active' value={2332}/>
                    <GStateItem label='In Active' value={232}/>
                    <GStateItem label='Pending' value={2323}/>
                </div>


                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 py-6">
                    <li className="me-2">
                        <p onClick={()=>setTab('users')}
                           className={`inline-block cursor-pointer p-4  rounded-t-lg ${tab==='users'?'text-blue-600 bg-gray-100':'hover:text-gray-600 hover:bg-gray-50 '}`}>Users</p>
                    </li>
                    <li className="me-2">
                        <p onClick={()=>setTab('ads')}
                           className={`inline-block p-4 cursor-pointer rounded-t-lg ${tab==='ads'?'text-blue-600 bg-gray-100':'hover:text-gray-600 hover:bg-gray-50 '}`}>Ads</p>
                    </li>
                </ul>

                <div className='py-6'>
                    {tab==='users'?<Users/>:<Ads/>}
                </div>
                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                     aria-label="Table navigation">
                <span
                    className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span
                    className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
                    className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page"
                               className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


const Users=()=>{
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div
                className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox"
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    [1,2,3,4,5,6].map((v,i)=> (
                        <tr id={i} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full"
                                     src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                     alt="Jese image"/>
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Leslie Livingston</div>
                                    <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                SEO Specialist
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                                    Offline
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                    user</a>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}


const Ads=()=>{
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div
                className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox"
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    [1,2,3,4,5,6].map((v,i)=> (
                        <tr id={i} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full"
                                     src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                     alt="Jese image"/>
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Leslie Livingston</div>
                                    <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                SEO Specialist
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                                    Offline
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                    user</a>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}