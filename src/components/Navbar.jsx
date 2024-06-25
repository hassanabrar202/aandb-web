import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { GiKiwiBird } from 'react-icons/gi'
import React, {useContext, useState} from 'react'
import {AuthContext} from "../utils/ContextProvider";

export const NavbarComponent = ({ currentPath }) => {
  const { logoutUser } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['Home', 'Ads', 'Profile', 'Logout']

  const handleLogout = async (e) => {
    try {
      e.preventDefault();
      await logoutUser()
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth={'2xl'}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close' : 'Open'}
            className='sm:hidden'
          />
          <NavbarBrand className='justify-center sm:justify-normal'>
            <Link href='/' color={'foreground'}>
              <p className='font-bold text-inherit flex items-center'>
                A&B Mart
                <span className='pl-2'>
                  <GiKiwiBird />
                </span>
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className='hidden md:flex md:flex-row md:gap-4'
          justify='center'
        >
          <NavbarItem>
            <Link href='/' color='foreground' className='text-inherit'>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              href='/dashboard'
              aria-current='page'
              className='text-inherit'
            >
              Ads
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link
              href='/chat'
              aria-current='page'
              className='text-inherit'
            >
              Chat
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className='hidden sm:flex sm:flex-row' justify='end'>
          {/*<NavbarItem>*/}
          {/*  <Button color='primary' variant='solid'>*/}
          {/*    Sold Pets*/}
          {/*  </Button>*/}
          {/*</NavbarItem>*/}
            <NavbarItem>
              <Link >
                <Button color='primary' variant='solid' onClick={handleLogout}>
                  Log out
                </Button>
              </Link>
            </NavbarItem>
        <NavbarItem>
            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                 alt="Default avatar"/>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='pt-12'>
          <NavbarMenuItem>
            <Link
                color='primary'
                href='/'
                aria-current='page'
                className='text-inherit w-full'
                size='lg'

            >
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
                color='primary'
                href='/dashboard'
                aria-current='page'
                className='text-inherit w-full'
                size='lg'

            >
              Ads
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem >
            <Link
                color='primary'
                href='/chat'
                aria-current='page'
                className='text-inherit w-full'
                size='lg'

            >
              Chat
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
                color='primary'
                href='/dashboard'
                aria-current='page'
                className='text-inherit w-full'
                size='lg'

            >
              Profile
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
                color='danger'
                aria-current='page'
                className='text-inherit w-full'
                size='lg'
            >
              <Button color='primary' variant='solid' onClick={handleLogout}>
                Log out
              </Button>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  )
}
