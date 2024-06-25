import { Card, Input, Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Birds from './Birds/Birds';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { productApi } from '../../api/product';
import { getLocalData } from "../../utils/utils";

const tabs = [
  { label: 'All Pets', key: 'all', to: 'http://localhost:3000/dashboard?tab=all' },
  { label: 'A&B Own Pets', key: 'selfstock', to: 'http://localhost:3000/dashboard?tab=selfstock' },
  { label: 'Live Stock', key: 'livestock', to: 'http://localhost:3000/dashboard?tab=livestock' },
  { label: 'Birds', key: 'bird', to: 'http://localhost:3000/dashboard?tab=bird' },
];

const selfTabs = [
  { label: 'All Ads', key: 'all', to: 'http://localhost:3000/dashboard?tab=all' },
  { label: 'My Ads', key: 'my', to: 'http://localhost:3000/dashboard?tab=my' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState();
  const [selfActiveTab, setSelfActiveTab] = useState();
  const [search] = useSearchParams('tab=all');
  const [selfSearch] = useSearchParams('tab=all');
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [filteredBirds, setFilteredBirds] = useState([]);
  const [totalCounts, setTotalCounts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getData = async () => {
    const response = await productApi.getByCategory({
      limit: itemsPerPage,
      offset: (currentPage - 1) * itemsPerPage,
      category: search.get('tab'),
      email: getLocalData('dbUser').email,
    });
    console.log(response.data)
    setData(response?.data?.data.products || []);
    setTotalCounts(response?.data?.data.totalCount || 0);
  };

  useEffect(() => {
    getData();
  }, [search, currentPage]);

  useEffect(() => {
    setActiveTab(search.get('tab') || 'all');
    setSelfActiveTab(selfSearch.get('tab') || 'all');
  }, [search.get('tab')]);

  useEffect(() => {
    setFilteredBirds(data);
  }, [data]);

  const handleInputChange = (e) => {
    setSearchName(e.target.value);
    if(e.target.value === '') {
      const newFilteredBirds = data.filter((bird) =>
          bird.name.toLowerCase().includes(searchName.trim().toLowerCase())
      );
      setFilteredBirds(newFilteredBirds);
    }
  };

  const handleSearch = () => {
    const newFilteredBirds = data.filter((bird) =>
        bird.name.toLowerCase().includes(searchName.trim().toLowerCase())
    );
    setFilteredBirds(newFilteredBirds);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(totalCounts / itemsPerPage);

  return (
      <div className='max-w-[1500px] m-auto py-20'>
        <div className='flex w-full justify-end item-center pb-10'>
          <ul className='flex w-max flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
            {selfTabs.map((tab) => (
                <li key={tab.key} className='me-2'>
                  <a
                      href={tab.to}
                      aria-current='page'
                      className={`inline-block p-4 rounded-t-lg ${selfActiveTab === tab.key ? 'text-blue-600 bg-gray-100' : ''}`}
                  >
                    {tab.label}
                  </a>
                </li>
            ))}
            <li>
              <Button
                  onClick={() => navigate('/ad-create')}
                  color='primary'
                  variant='solid'
              >
                Create Ad
              </Button>
            </li>
          </ul>
        </div>
        {selfActiveTab !== 'my' ? (
            <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
              {tabs.map((tab) => (
                  <li key={tab.key} className='me-2'>
                    <a
                        href={tab.to}
                        aria-current='page'
                        className={`inline-block p-4 rounded-t-lg ${activeTab === tab.key ? 'text-blue-600 bg-gray-100' : ''}`}
                    >
                      {tab.label}
                    </a>
                  </li>
              ))}
              <li>
                <a className='inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500'>
                  Coming Soon
                </a>
              </li>
            </ul>
        ) : null}
        <div className='py-6'>
          <div className='flex item-center gap-4'>
            <input
                placeholder='Search by name'
                onChange={handleInputChange}
                className='flex items-center outline-none focus-none w-full px-5 py-4 mb-5 mr-2 text-sm font-medium border focus:bg-grey-400 rounded-2xl'
            />
            <Button onClick={handleSearch} auto type='success'>
              Search
            </Button>
          </div>
          <Birds birds={filteredBirds} />
          <div>
            <ul className='flex items-center justify-center py-10 h-12 text-sm'>
              <li>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='flex items-center justify-center px-8 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  <span className='sr-only'>Previous</span>
                  <svg
                      className='w-2.5 h-2.5 rtl:rotate-180'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 6 10'
                  >
                    <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 1 1 5l4 4'
                    />
                  </svg>
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index + 1}>
                    <button
                        onClick={() => handlePageChange(index + 1)}
                        className={`flex items-center justify-center px-8 h-12 leading-tight ${currentPage === index + 1 ? 'text-blue-600 bg-blue-50 border border-blue-300' : 'text-gray-500 bg-white border border-gray-300'} hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                    >
                      {index + 1}
                    </button>
                  </li>
              ))}
              <li>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='flex items-center justify-center px-8 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  <span className='sr-only'>Next</span>
                  <svg
                      className='w-2.5 h-2.5 rtl:rotate-180'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 6 10'
                  >
                    <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 9 4-4-4-4'
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
