import React from 'react';

const NavbarTest = () => {
  return (
    <nav className='border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle='navbar-hamburger'
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-hamburger'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-5 w-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className='hidden w-full' id='navbar-hamburger'>
          <ul className='mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800'>
            <li>
              <a
                href='#'
                className='block rounded bg-blue-700 px-3 py-2 text-white dark:bg-blue-600'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-white'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTest;
