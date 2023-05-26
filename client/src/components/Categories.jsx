import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Tab, Transition } from '@headlessui/react'
import { AdjustmentsVerticalIcon, XMarkIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { classNames } from '../utils'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const tutors = [
  {
    id: 1,
    name: 'An enthusiastic economics teacher seeking to help students achieve their true potential and them the...',
    author: 'Leslie A. Peters',
    subject: 'Bsc Economics (Bachelors)',
    price: '$149',
    rating: 5,
    reviewCount: '4.2(175)',
    imageSrc: 'https://images.pexels.com/photos/8653942/pexels-photo-8653942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'An enthusiastic economics teacher seeking to help students achieve their true potential and them the...',
    author: 'Leslie A. Peters',
    subject: 'Bsc Economics (Bachelors)',
    price: '$15',
    rating: 5,
    reviewCount: '4.2(175)',
    imageSrc: 'https://images.pexels.com/photos/7869233/pexels-photo-7869233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'An enthusiastic economics teacher seeking to help students achieve their true potential and them the...',
    author: 'Leslie A. Peters',
    subject: 'Bsc Economics (Bachelors)',
    price: '$15',
    rating: 5,
    reviewCount: '4.2(175)',
    imageSrc: 'https://images.pexels.com/photos/5905486/pexels-photo-5905486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'TODO',
    href: '#',
  }
  // More products...
]

export default function Categories() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white mt-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="space-y-4">
                          {category.featured.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100"
                            >
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center group-hover:opacity-75"
                              />
                              <div className="flex flex-col justify-end">
                                <div className="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                                  <a href={item.href} className="font-medium text-gray-900">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                    Shop now
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((column, columnIdx) => (
                          <div key={columnIdx} className="space-y-10">
                            {column.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-medium text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="pb-24">
        {/* Filters */}
        <Disclosure
          as="section"
          aria-labelledby="filter-heading"
          className="grid items-center"
        >
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>
          <div className="relative col-start-1 row-start-1 py-4">
            <div className="mx-auto flex flex-wrap items-center max-w-7xl space-x-6 text-sm">
              <div>
                <Disclosure.Button className="group flex items-center text-lg font-medium text-gray-700">
                  <AdjustmentsVerticalIcon
                    className="mr-2 h-6 w-6 flex-none text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Filters
                </Disclosure.Button>
              </div>

              <div className="pl-4">
                <button type="button" className="text-gray-500 text-lg">
                  Clear all
                </button>
              </div>

              <div class="pl-4">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  autoComplete="subject-name"
                  className="relative block w-full rounded-full border-0 bg-transparent py-2 pl-2 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Subject</option>
                </select>
              </div>

              <div class="pl-4">
                <label htmlFor="subject" className="sr-only">
                  Level
                </label>
                <select
                  id="subject"
                  name="subject"
                  autoComplete="subject-name"
                  className="relative block w-full rounded-full border-0 bg-transparent py-2 pl-2 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Level</option>
                </select>
              </div>

              <div class="pl-4">
                <label htmlFor="subject" className="sr-only">
                  Level
                </label>
                <select
                  id="subject"
                  name="subject"
                  autoComplete="subject-name"
                  className="relative block w-full rounded-full border-0 bg-transparent py-2 pl-2 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Avail <span className='text-blue-400'>Mon, Tue, Wed</span></option>
                </select>
              </div>

              <div class="pl-4">
                <label htmlFor="subject" className="sr-only">
                  Price
                </label>
                <select
                  id="subject"
                  name="subject"
                  autoComplete="subject-name"
                  className="relative block w-full rounded-full border-0 bg-transparent py-2 pl-2 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Price</option>
                </select>
              </div>

              <div class="pl-4">
                <label htmlFor="subject" className="sr-only">
                  Rating
                </label>
                <select
                  id="subject"
                  name="subject"
                  autoComplete="subject-name"
                  className="relative block w-full rounded-full border-0 bg-transparent py-2 pl-2 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Rating</option>
                </select>
              </div>

            </div>
          </div>

          <div className="md:col-start-1 md:row-start-1 py-4">
            <div className="mx-auto flex flex-wrap max-w-7xl justify-end">
              <Menu as="div" className="relative inline-block">
                <div className="flex space-x-4 items-center">
                  <button className="inline-flex justify-center text-sm font-mediums text-indigo-500">
                    Clear filters
                  </button>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium py-2 rounded-full px-4 bg-indigo-700 text-white hover:text-white/600">
                    Apply filters
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </Disclosure>

        {/* Product grid */}
        <section aria-labelledby="products-heading" className="mx-auto max-w-7xl overflow-hidden">
          <h2 id="products-heading" className="mb-5 text-lg tracking-wider">
            304 tutors available
          </h2>

          <div className="-mx-px grid grid-cols-1 sm:mx-0 md:grid-cols-2 gap-x-4 lg:grid-cols-3">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="group rounded-lg flex relative border border-gray-200 p-4 sm:p-3">
                <BookmarkIcon className='h-6 w-6 absolute right-1 top-2'/>
                <div className="aspect-w-1 w-36 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <img
                    src={tutor.imageSrc}
                    alt={tutor.imageAlt}
                    className="w-full object-cover object-center"
                  />
                </div>
                <div className="ml-2 pb-4 flex-1">
                  <h3>
                    <span className='block text-xl text-black/80'>{tutor.author}</span>
                    <span className='block text-gray-500'>{tutor.subject}</span>
                  </h3>
                  <h3 className="text-sm my-4 font-medium text-gray-500">
                    <a href={tutor.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {tutor.name}
                    </a>
                  </h3>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="text-gray-500">
                      <span>$22.00/hr</span>
                    </div>
                    <div className="flex items-center">
                      {[0].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            tutor.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                      <p className="mt-1 text-sm text-gray-500">{tutor.reviewCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second line of tutors */}

          <div className="-mx-px grid grid-cols-1 sm:mx-0 md:grid-cols-2 gap-x-4 lg:grid-cols-3 pt-4">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="group rounded-lg flex relative border border-gray-200 p-4 sm:p-3">
                <BookmarkIcon className='h-6 w-6 absolute right-1 top-2'/>
                <div className="aspect-w-1 w-36 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <img
                    src={tutor.imageSrc}
                    alt={tutor.imageAlt}
                    className="w-full object-cover object-center"
                  />
                </div>
                <div className="ml-2 pb-4 flex-1">
                  <h3>
                    <span className='block text-xl text-black/80'>{tutor.author}</span>
                    <span className='block text-gray-500'>{tutor.subject}</span>
                  </h3>
                  <h3 className="text-sm my-4 font-medium text-gray-500">
                    <a href={tutor.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {tutor.name}
                    </a>
                  </h3>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="text-gray-500">
                      <span>$22.00/hr</span>
                    </div>
                    <div className="flex items-center">
                      {[0].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            tutor.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                      <p className="mt-1 text-sm text-gray-500">{tutor.reviewCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Another line of tutors */}

          <div className="-mx-px grid grid-cols-1 sm:mx-0 md:grid-cols-2 gap-x-4 lg:grid-cols-3 pt-4">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="group rounded-lg flex relative border border-gray-200 p-4 sm:p-3">
                <BookmarkIcon className='h-6 w-6 absolute right-1 top-2'/>
                <div className="aspect-w-1 w-36 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <img
                    src={tutor.imageSrc}
                    alt={tutor.imageAlt}
                    className="w-full object-cover object-center"
                  />
                </div>
                <div className="ml-2 pb-4 flex-1">
                  <h3>
                    <span className='block text-xl text-black/80'>{tutor.author}</span>
                    <span className='block text-gray-500'>{tutor.subject}</span>
                  </h3>
                  <h3 className="text-sm my-4 font-medium text-gray-500">
                    <a href={tutor.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {tutor.name}
                    </a>
                  </h3>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="text-gray-500">
                      <span>$22.00/hr</span>
                    </div>
                    <div className="flex items-center">
                      {[0].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            tutor.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                      <p className="mt-1 text-sm text-gray-500">{tutor.reviewCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
      </main>

    </div>
  )
}
