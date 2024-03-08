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
import React, { useState } from 'react'

export const NavbarComponent = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['Home', 'Ads', 'Profile', 'Logout']
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
            <Link href='#' aria-current='page' className='text-inherit'>
              Ads
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className='hidden sm:flex sm:flex-row' justify='end'>
          <NavbarItem>
            <Button color='primary' variant='solid'>
              Sold Pets
            </Button>
          </NavbarItem>
          {currentPath === '/signup' && (
            <NavbarItem>
              <Link href='/login'>
                <Button color='primary' variant='solid'>
                  Login
                </Button>
              </Link>
            </NavbarItem>
          )}
          {currentPath === '/login' && (
            <NavbarItem>
              <Link href='/signup'>
                <Button color='primary' variant='solid'>
                  Sign Up
                </Button>
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarMenu className='pt-12'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                className='w-full'
                href='#'
                size='lg'
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}
