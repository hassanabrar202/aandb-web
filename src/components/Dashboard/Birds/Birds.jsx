import React from 'react'
import { Card, Button } from '@nextui-org/react'

const Birds = ({ birds }) => {
  console.log('birdssfsadsad', birds)
  return (
    <div className='flex flex-wrap justify-center'>
      {birds?.map((bird, index) => (
        <Card key={bird?.id} shadow style={{ width: '300px' }} className='m-4'>
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
            <Button auto type='success'>
              Contact Us
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Birds
