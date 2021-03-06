import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/home', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Portfolio', href: '/portfolio', current: false },
  { name: 'Teams', href: '/teams', current: false },
  { name: 'News', href: '/news', current: false },
  { name: 'Contact', href: '/contact', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
    return (
        
            <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://media-exp1.licdn.com/dms/image/D5603AQHd0Bvl9UFykQ/profile-displayphoto-shrink_200_200/0/1631652314470?e=1639612800&v=beta&t=Oe8sXmufvMcBATgjce6VNUW_4eQam0D8L2cMl4qtPE8"
                    alt="Workflow"
                  /> */}
                  <h2 className="text-purple-600">SHAFIKUL</h2>
                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://media-exp1.licdn.com/dms/image/D5603AQHd0Bvl9UFykQ/profile-displayphoto-shrink_200_200/0/1631652314470?e=1639612800&v=beta&t=Oe8sXmufvMcBATgjce6VNUW_4eQam0D8L2cMl4qtPE8"
                    alt="Workflow"
                  /> */}
                  {/* <h2>Shafikul</h2> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 ">
                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                        <NavLink className="text-pink-500 hover:text-blue-500" exact to="/home">Home</NavLink>
                        <NavLink exact to="/about">About</NavLink>
                        <NavLink exact to="/portfolio">Portfolio</NavLink>
                        <NavLink exact to="/news">News</NavLink>
                        <NavLink exact to="/teams">Teams</NavLink>
                        <NavLink exact to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                  type="button"
                  className="text-white hover:text-red-500  border border-indigo-600 ..."
                >Login</button>
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>


                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://media-exp1.licdn.com/dms/image/D5603AQHd0Bvl9UFykQ/profile-displayphoto-shrink_200_200/0/1631652314470?e=1639612800&v=beta&t=Oe8sXmufvMcBATgjce6VNUW_4eQam0D8L2cMl4qtPE8"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
    );
};

export default Header;