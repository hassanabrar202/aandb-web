import { Button, Card, Image, Input, Link } from '@nextui-org/react'
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
                <Button
                    as={Link}
                    href='/dashboard'
                    showAnchorIcon
                    color='primary'
                    variant='solid'
                >
                  Get Started
                </Button>
                <Button href='/signup' as={Link} color='primary' variant='ghost'>
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

        <SwiperComponent/>

        <div
            className='bg-gray-900 py-4 flex flex-col gap-3 items-center text-center text-xl font-bold text-white sm:flex-row justify-evenly'>
          <div className='flex flex-col'>
            <CountUp start={0} end={73} duration={4} suffix='M+'/>
            <div>Birds</div>
          </div>
          <div className='flex flex-col'>
            <CountUp start={0} end={1} duration={2} suffix='B+'/>
            <div>Contributors</div>
          </div>
          <div className='flex flex-col'>
            <CountUp start={0} end={4} duration={6} suffix='M+'/>
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
                    <div
                        className='inline-block bg-gray-900 w-max text-white text-3xl align-middle justify-center items-center rounded-md p-4'>
                      {data.icons}
                    </div>
                    <h5 className='mt-8'>{data.title}</h5>
                    <p>{data.content}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <Testimonials/>

        <div className='py-8'>
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
        </div>

        <OurTeam/>

        <footer className="bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8">
          <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
            &copy; 2019-2024{" "}
            <a
                href="https://google.com/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
            >
              A&B Mart
            </a>
            . All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-1">
            <a
                href="#"
                data-tooltip-target="tooltip-facebook"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
              >
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <div
                id="tooltip-facebook"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
            >
              Like us on Facebook
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
            <a
                href="#"
                data-tooltip-target="tooltip-twitter"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
              >
                <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <div
                id="tooltip-twitter"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
            >
              Follow us on Twitter
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
            <a
                href="#"
                data-tooltip-target="tooltip-github"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
              >
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Github</span>
            </a>
            <div
                id="tooltip-github"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
            >
              Star us on GitHub
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
            <a
                href="#"
                data-tooltip-target="tooltip-dribbble"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble</span>
            </a>
            <div
                id="tooltip-dribbble"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
            >
              Follow us on Dribbble
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
          </div>
        </footer>
      </>
  )
}

export default Home
