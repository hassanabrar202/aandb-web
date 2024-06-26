import React from 'react'
import { Card, Button } from '@nextui-org/react'
import {Link} from "react-router-dom";
import {productApi} from "../../../api/product";
import {getLocalData} from "../../../utils/utils";

const Birds = ({ birds, handleDeleteAd }) => {

  return (
    <div className='flex flex-wrap justify-center'>
      {birds?.map((bird, index) => (
        <Card key={index} shadow style={{ width: '300px' }} className='m-4'>
          <img
            src={bird?.image || 'https://via.placeholder.com/300' }
            alt={bird?.name}
            className='w-full h-48 object-cover'
            placeholder={'https://via.placeholder.com/300'}
          />
          <div className='p-4'>
            <h2 className='text-xl font-semibold mb-2'>{bird?.name}</h2>
            <p className='text-gray-600 mb-2'>{bird?.category}</p>
            <p className='text-gray-700 mb-2'>${bird?.price}</p>
            <p className='text-gray-700 mb-2'>{'Lahore PK'}</p>
            <Link to={`/details/${bird._id}`}>
            <Button auto type='success'>
              Details
            </Button>
            </Link>
            { bird.userDetails.username == getLocalData('dbUser').username ? (
            <Button auto type='success' onClick={()=>handleDeleteAd(bird._id)} style={{marginLeft: '10px'}}>
              Delete Ad
            </Button>
            ) : (<></>)
            }
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Birds
