import React, { useState } from 'react'
import {
  Button,
  Card,
  Image,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from '@nextui-org/react'
import CountUp from 'react-countup'
import 'swiper/css'
import {
  GiBirdTwitter,
  GiEgyptianBird,
  GiHummingbird,
  GiKiwiBird,
  GiNestBirds,
  GiParrotHead,
} from 'react-icons/gi'
import { PiBird } from 'react-icons/pi'
import { LiaEarlybirds } from 'react-icons/lia'
import { LuBird } from 'react-icons/lu'
import { OurTeam } from './home/OurTeam'
import { Testimonials } from './home/Testimonials'
import { SwiperComponent } from './home/Swiper'
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['Home', 'Ads', 'Profile', 'Logout']
  const browserCategories = [
    {
      id: 0,
      icons: <GiBirdTwitter />,
      title: 'Animals',
      content: '802 Animals',
    },
    {
      id: 1,
      icons: <GiNestBirds />,
      title: 'Robin',
      content: '577 Birds',
    },
    {
      id: 2,
      icons: <PiBird />,
      title: 'Blue Jay',
      content: '285 Birds',
    },
    {
      id: 3,
      icons: <LiaEarlybirds />,
      title: 'Cardinal',
      content: '495 Birds',
    },
    {
      id: 4,
      icons: <GiEgyptianBird />,
      title: 'Sparrow',
      content: '1045 Birds',
    },
    {
      id: 5,
      icons: <GiParrotHead />,
      title: 'Parrot',
      content: '1516 Birds',
    },
    {
      id: 6,
      icons: <GiHummingbird />,
      title: 'Lovebird',
      content: '1516 Birds',
    },
    {
      id: 7,
      icons: <LuBird />,
      title: 'Hatebird',
      content: '1516 Birds',
    },
  ]
  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className='shadow'
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close' : 'Open'}
            className='sm:hidden'
          />
          <NavbarBrand className='justify-center sm:justify-normal'>
            <p className='font-bold text-inherit flex items-center'>
              A&B Mart
              <span className='pl-2'>
                <GiKiwiBird />
              </span>
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className='hidden md:flex md:flex-row md:gap-4'
          justify='center'
        >
          <NavbarItem>
            <Link color='foreground' href='#' className='text-inherit'>
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
          <NavbarItem>
            <a href='/signup'>
              <Button color='primary' variant='solid'>
                Sign Up
              </Button>
            </a>
          </NavbarItem>
          <NavbarItem>
            <a href='/login'>
              <Button color='primary' variant='solid'>
                Login
              </Button>
            </a>
          </NavbarItem>
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

      <div className='w-full h-screen flex flex-row bg-gray-900 text-white'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 p-8'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-4'>
              Find Your Dream Pets with A&B Mart
            </h1>
            <p className='text-lg'>
              Discover your perfect companions with A&B Mart's Dream Pets
              collection! Whether you're seeking a loyal canine companion, a
              graceful feline friend, or perhaps something more exotic, we have
              a diverse array of pets to suit every preference and lifestyle.
              Our dedicated team ensures that each animal receives the utmost
              care and attention
            </p>
            <div className='flex flex-row gap-4 py-2'>
              <Button color='primary' variant='solid'>
                Get Started ->
              </Button>
              <Button color='primary' variant='ghost'>
                Sign Up
              </Button>
            </div>
          </div>
          <Image
            src='https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with the actual path to your image
            alt='Image'
            className='p-4 rounded-[50px]'
            width={665}
            height={665}
          />
        </div>
      </div>

      <SwiperComponent />

      <div className='bg-gray-900 py-4 flex flex-col gap-3 items-center text-center text-xl font-bold text-white sm:flex-row justify-evenly'>
        <div className='flex flex-col'>
          <CountUp start={0} end={73} duration={4} suffix='M+' />
          <div>Birds</div>
        </div>
        <div className='flex flex-col'>
          <CountUp start={0} end={1} duration={2} suffix='B+' />
          <div>Contributors</div>
        </div>
        <div className='flex flex-col'>
          <CountUp start={0} end={4} duration={6} suffix='M+' />
          <div>Organizations</div>
        </div>
      </div>

      <div>
        <h1 className='pt-4 mb-4 text-gray-900 text-4xl font-extrabold tracking-tight leading-none text-center'>
          Browser Categories
        </h1>
        <div className='flex flex-wrap justify-center items-center '>
          {browserCategories.map((data) => (
            <div key={data.id} className='w-1/2 md:w-1/4 my-12 text-center'>
              <div>
                <div className='inline-block bg-gray-900 w-max text-white text-3xl align-middle justify-center items-center rounded-md p-4'>
                  {data.icons}
                </div>
                <h5 className='mt-8'>{data.title}</h5>
                <p>{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />

      <Card
        isBlurred={true}
        className='mx-8 h-max bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(real-estate-background.jpg)`,
        }}
      >
        <div className='mx-auto max-w-2xl px-8 sm:py-48 lg:px-0 text-center'>
          <h1 className='bg-white rounded-2xl py-2 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-6xl'>
            Skip the small hassels. Step seamlessly into your new space
          </h1>
          <p className='hidden sm:block bg-neutral-950/75 rounded-2xl py-2 text-white mt-6 text-lg leading-8'>
            Drop your mail and our team will hit you in a while
          </p>
          <form>
            <Input
              type='email'
              label='Email'
              placeholder='Enter your email'
              variant='flat'
            />
          </form>
        </div>
      </Card>

      <OurTeam />

      <footer className='bg-black text-white mt-4 text-center lg:text-left'>
        <div className='mx-6 py-10 text-center md:text-left'>
          <div className='flex flex-col justify-around items-center gap-8 md:flex-row'>
            <div className='w-96'>
              <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
                <span className='pr-2'>
                  <GiKiwiBird />
                </span>
                A&B Mart
              </h6>
              <p>
                Welcome to A&B Mart, where pet paradise awaits! Find everything
                your furry friend needs in one convenient spot. From tasty
                treats to cozy beds, we've got it all. Shop with confidence
                knowing each product is carefully chosen for quality and
                comfort. Join us in making tails wag and purrs rumble—welcome to
                Furry Haven, where pet happiness is our passion.
              </p>
            </div>
            <div className='w-max'>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Contact
              </h6>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='mr-3 h-5 w-5'
                >
                  <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
                  <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
                </svg>
                New York, NY 10012, US
              </p>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='mr-3 h-5 w-5'
                >
                  <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                  <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
                </svg>
                info@example.com
              </p>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='mr-3 h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                    clipRule='evenodd'
                  />
                </svg>
                + 01 234 567 88
              </p>
              <p className='flex items-center justify-center md:justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='mr-3 h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z'
                    clipRule='evenodd'
                  />
                </svg>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
