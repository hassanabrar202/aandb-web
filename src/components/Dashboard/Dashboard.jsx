import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  Input,
} from '@nextui-org/react'
import { Petdata } from './data'

const Dashboard = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <Card shadow className='w-full max-w-md p-6'>
          <div className='flex flex-col items-center space-y-4'>
            <Autocomplete placeholder='Select for bird' className='w-full'>
              {Petdata.map((bird) => (
                <AutocompleteItem key={bird.value} value={bird.value}>
                  {bird.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Input placeholder='Enter keyword' className='w-full' />
            <Button>Search</Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Dashboard
