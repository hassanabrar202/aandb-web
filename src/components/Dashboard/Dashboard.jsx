import { Card, Input, Button } from '@nextui-org/react'
import { useState } from 'react'
import Birds from './Birds/Birds'

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [searchName, setSearchName] = useState('')
  const [allBirds] = useState([
    {
      id: 1,
      name: 'Blue Jay',
      price: 25,
      category: 'Songbird',
      image: 'https://via.placeholder.com/300',
      location: 'North America',
    },
    {
      id: 2,
      name: 'Cardinal',
      price: 20,
      category: 'Songbird',
      image: 'https://via.placeholder.com/300',
      location: 'North America',
    },
    {
      id: 3,
      name: 'Robin',
      price: 18,
      category: 'Songbird',
      image: 'https://via.placeholder.com/300',
      location: 'North America',
    },
    {
      id: 4,
      name: 'Hummingbird',
      price: 30,
      category: 'Songbird',
      image: 'https://via.placeholder.com/300',
      location: 'North and South America',
    },
    {
      id: 5,
      name: 'Pigeon',
      price: 15,
      category: 'Urban Bird',
      image: 'https://via.placeholder.com/300',
      location: 'Worldwide',
    },
  ])
  const [filteredBirds, setFilteredBirds] = useState(allBirds)

  const handleInputChange = (e) => {
    setSearchName(e.target.value)
  }

  const handleSearch = () => {
    let newFilteredBirds = allBirds

    if (selectedOption && selectedOption.value) {
      newFilteredBirds = allBirds.filter(
        (bird) =>
          bird.name.toLowerCase() === selectedOption.value.toLowerCase(),
      )
    }

    if (searchName.trim() !== '') {
      newFilteredBirds = newFilteredBirds.filter((bird) =>
        bird.name.toLowerCase().includes(searchName.trim().toLowerCase()),
      )
    }

    setFilteredBirds(newFilteredBirds)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-y-auto'>
      <Card shadow className='w-full max-w-md p-6'>
        <div className='flex flex-col items-center space-y-4'>
          <Input
            placeholder='Search by name'
            value={searchName}
            onChange={handleInputChange}
            className='mb-4'
          />
          <Button onClick={handleSearch} auto type='success'>
            Search
          </Button>
        </div>
      </Card>
      <Birds birds={filteredBirds} />
    </div>
  )
}

export default Dashboard
