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
import {getLocalData} from "../utils/utils";
import {useNavigate} from "react-router-dom";

export const NavbarUnAuthComponent = ({ currentPath }) => {
    const user=getLocalData('dbUser')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                <NavbarContent className='hidden sm:flex sm:flex-row' justify='end'>
                    {(!user && currentPath !== '/login') &&
                        <NavbarItem>
                            <Link href='/login'>
                                <Button color='primary' variant='solid'>
                                    Login
                                </Button>
                            </Link>

                        </NavbarItem>
                    }
                    { (!user && currentPath !== '/signup') && <NavbarItem>
                            <Link href='/signup'>
                                <Button color='primary' variant='solid'>
                                    Sign Up
                                </Button>
                            </Link>
                        </NavbarItem>
                    }
                    {/*{user &&*/}
                    {/*    <NavbarItem>*/}
                    {/*        <Link>*/}
                    {/*            <Button color='primary' variant='solid' onClick={handleLogout}>*/}
                    {/*                Log out*/}
                    {/*            </Button>*/}
                    {/*        </Link>*/}
                    {/*    </NavbarItem>*/}
                    {/*}*/}
                    {/*{userData && <NavbarItem>*/}
                    {/*    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"*/}
                    {/*         alt="Default avatar"/>*/}
                    {/*</NavbarItem>}*/}
                </NavbarContent>
                <NavbarMenu className='pt-12'>
                        <NavbarMenuItem>
                            {(!user && currentPath !== '/login') &&
                                <NavbarItem>
                                    <Link href='/login'
                                          className='w-full'
                                          href='#'
                                          size='lg'>
                                            Login
                                    </Link>

                                </NavbarItem>
                            }
                            { (!user && currentPath !== '/signup') && <NavbarItem>
                                <Link href='/signup'
                                      className='w-full'
                                      href='#'
                                      size='lg'>
                                        Sign Up
                                </Link>
                            </NavbarItem>
                            }
                        </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </>
    )
}
