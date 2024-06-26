import {GStateItem} from "../g-state-item/g-state-item";
import React, {useEffect, useState} from "react";
import {productApi} from "../../api/product";
import {getLocalData} from "../../utils/utils";
import {authApi} from "../../api/auth";
import {Link} from "react-router-dom";

export const AdminDashboard = () => {
    const [tab, setTab] = useState('users')
    const [users, setUsers] = useState([])
    const [totalUsersCounts, setTotalUsersCounts] = useState(0);
    const [userCurrentPage, setUserCurrentPage] = useState(1);

    const [products, setProducts] = useState([])
    const [totalProductsCounts, setTotalProductsCounts] = useState(0);
    const [productCurrentPage, setProductCurrentPage] = useState(1);

    const [productInformation , setProductInformation] = useState({activeAds: 0, inActiveAds: 0,  totalSelfAds: 0, totalBirdAds: 0, totalLiveStockAds: 0})

    const [userInformation , setUserInformation] = useState({ totalUser: 0, totalAdmin: 0})



    const itemsPerPage = 10;

    const getProductData = async () => {
        const productsResponse = await productApi.getByCategoryAdmin({
            limit: itemsPerPage,
            offset: (productCurrentPage - 1) * itemsPerPage,
            category: 'all'
        });

        setProductInformation({...productInformation, activeAds: productsResponse?.data?.data.totalActive,
            inActiveAds: productsResponse?.data?.data.totalInActive,
            totalSelfAds: productsResponse?.data?.data.totalSelfAds,
            totalBirdAds: productsResponse?.data?.data.totalBirdAds,
            totalLiveStockAds: productsResponse?.data?.data.totalLivestockAds})

        setProducts(productsResponse?.data?.data.products || []);
        setTotalProductsCounts(productsResponse?.data?.data.totalCount || 0);
    };


    const getUserData = async () => {

        const usersResponse = await authApi.users({
            limit: itemsPerPage,
            offset: (userCurrentPage - 1) * itemsPerPage,
        });

        setUserInformation({...userInformation, totalAdmin: usersResponse.data.data.totalAdmin, totalUser: usersResponse.data.data.totalUser})

        setUsers(usersResponse?.data?.data.users || []);
        setTotalUsersCounts(usersResponse?.data?.data.totalCount || 0);
    };


    useEffect(() => {
        getProductData()
        getUserData()
    }, []);

    useEffect(() => {
        getUserData()
    }, [userCurrentPage]);

    useEffect(() => {
        getProductData()
    }, [productCurrentPage]);

    const handleUserPageChange = (newPage) => {
        setUserCurrentPage(newPage);
    };

    const handleProductrPageChange = (newPage) => {
        setProductCurrentPage(newPage);
    };

    const userTotalPages = Math.ceil(totalUsersCounts / itemsPerPage);
    const productTotalPages = Math.ceil(totalProductsCounts / itemsPerPage);

    const handleUpdateRole = async (v)=>{
        await authApi.updateUser(v._id,{
           role: v.role === 'admin' ? 'user' : 'admin'
        });

        getUserData()
    }

    const handleDeleteUser = async (id)=>{
        await authApi.deleteUser(id);
        getUserData()
    }

    const handleUpdateStatus = async (v)=>{
        await productApi.update(v._id,{
            status: v.status === 'active' ? 'inactive' : 'active'
        });

        getProductData()
    }

    const handleDeleteAd = async (id)=>{
        await productApi.delete(id);
        getProductData()
    }


    return (
        <div className="container mx-auto px-4">
            <div className='py-6'>
                <div className='flex item-center gap-4'>
                    <GStateItem label='Active Ads' value={productInformation.activeAds}/>
                    <GStateItem label='In Active Ads' value={productInformation.inActiveAds}/>
                    <GStateItem label='Total Users' value={userInformation.totalUser}/>
                    <GStateItem label='Total Admins' value={userInformation.totalAdmin}/>
                    <GStateItem label='Total Self Ads' value={productInformation.totalSelfAds}/>
                    <GStateItem label='Total Bird Ads' value={productInformation.totalBirdAds}/>
                    <GStateItem label='Total Livestock Ads' value={productInformation.totalLiveStockAds}/>
                </div>


                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 py-6">
                    <li className="me-2">
                        <p onClick={() => setTab('users')}
                           className={`inline-block cursor-pointer p-4  rounded-t-lg ${tab === 'users' ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50 '}`}>Users</p>
                    </li>
                    <li className="me-2">
                        <p onClick={() => setTab('ads')}
                           className={`inline-block p-4 cursor-pointer rounded-t-lg ${tab === 'ads' ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50 '}`}>Ads</p>
                    </li>
                    <li className="me-2">
                        <Link to={`/ad-create`}>
                        <p onClick={() => {}}
                           className={`inline-block p-4 cursor-pointer rounded-t-lg hover:text-gray-600 hover:bg-gray-50 `}>Create Ad</p>
                        </Link>
                    </li>
                </ul>

                <div className='py-6'>
                    {tab === 'users' ?
                        (
                            <>
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
                                                    <label htmlFor="checkbox-all-search"
                                                           className="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                User Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Role
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
                                            users.map((v, i) => (
                                                <tr id={i}
                                                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="w-4 p-4">
                                                        <div className="flex items-center">
                                                            <input id="checkbox-table-search-3" type="checkbox"
                                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                            <label htmlFor="checkbox-table-search-3"
                                                                   className="sr-only">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <th scope="row"
                                                        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className="ps-3">
                                                            <div
                                                                className="text-base font-semibold">{v.firstname + " " + v.lastname}</div>
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {v.username}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v.email}

                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v.role}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button onClick={() => handleUpdateRole(v)}
                                                                className="font-medium dark:text-red-500 hover:underline">Make {v.role === 'admin' ? 'User' : 'Admin'}</button>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button onClick={() => handleDeleteUser(v._id)}
                                                                className="font-medium text-red-500 dark:text-red-500 hover:underline">Remove User</button>
                                                    </td>

                                                </tr>
                                            ))
                                        }

                                        </tbody>
                                    </table>
                                </div>

                                <nav
                                    className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                                    aria-label="Table navigation">
                <span
                    className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span
                    className="font-semibold text-gray-900 dark:text-white">1-{itemsPerPage}</span> of <span
                    className="font-semibold text-gray-900 dark:text-white">{totalUsersCounts}</span></span>
                                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">

                                            <li>
                                                <button   onClick={() => handleUserPageChange(userCurrentPage - 1)}
                                                          disabled={userCurrentPage === 1}
                                                   className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                                            </li>
                                    {Array.from({ length: userTotalPages }, (_, index) => (
                                        <li key={index + 1}>
                                            <button
                                                onClick={() => handleUserPageChange(index + 1)}
                                                className={`flex items-center justify-center px-3 h-8 leading-tight ${userCurrentPage === index + 1 ? 'text-blue-600 bg-blue-50 border border-blue-300' : 'text-gray-500 bg-white border border-gray-300'} hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                        <li>
                                            <button onClick={() => handleUserPageChange(userCurrentPage + 1)}
                                                    disabled={userCurrentPage === userTotalPages}
                                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                                        </li>
                                    </ul>
                                </nav>

                            </>
                        )
                        :
                        (
                            <>
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
                                                    <label htmlFor="checkbox-all-search"
                                                           className="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Description
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Category
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
                                            products.map((v, i) => (
                                                <tr id={i}
                                                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="w-4 p-4">
                                                        <div className="flex items-center">
                                                            <input id="checkbox-table-search-3" type="checkbox"
                                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                            <label htmlFor="checkbox-table-search-3"
                                                                   className="sr-only">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <th scope="row"
                                                        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <img className="w-10 h-10 rounded-full"
                                                             src={v.image}
                                                             alt="Jese image"/>
                                                        <div className="ps-3">
                                                            <div
                                                                className="text-base font-semibold">{v.name}</div>
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {v.price}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v.description}

                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v.category}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {v.status}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button onClick={() => handleUpdateStatus(v)}
                                                                className="font-medium dark:text-red-500 hover:underline">Make {v.status === 'active' ? 'InActive' : 'Active'}</button>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button onClick={() => handleDeleteAd(v._id)}
                                                                className="font-medium text-red-500 dark:text-red-500 hover:underline">Remove
                                                            Ad
                                                        </button>
                                                    </td>

                                                </tr>
                                            ))
                                        }

                                        </tbody>
                                    </table>
                                </div>

                                <nav
                                    className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                                    aria-label="Table navigation">
                <span
                    className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span
                    className="font-semibold text-gray-900 dark:text-white">1-{itemsPerPage}</span> of <span
                    className="font-semibold text-gray-900 dark:text-white">{totalUsersCounts}</span></span>
                                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">

                                        <li>
                                            <button   onClick={() => handleProductrPageChange(userCurrentPage - 1)}
                                                      disabled={productCurrentPage === 1}
                                                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                                        </li>
                                        {Array.from({ length: productTotalPages }, (_, index) => (
                                            <li key={index + 1}>
                                                <button
                                                    onClick={() => handleProductrPageChange(index + 1)}
                                                    className={`flex items-center justify-center px-3 h-8 leading-tight ${productCurrentPage === index + 1 ? 'text-blue-600 bg-blue-50 border border-blue-300' : 'text-gray-500 bg-white border border-gray-300'} hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                                >
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li>
                                            <button onClick={() => handleProductrPageChange(userCurrentPage + 1)}
                                                    disabled={productCurrentPage === userTotalPages}
                                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                                        </li>
                                    </ul>
                                </nav>

                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}