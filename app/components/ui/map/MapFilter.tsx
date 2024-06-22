import React, { useEffect, useState } from 'react'
import { MenuIcon, CloseIcon } from '../SVGIcons'

const FILTERS_LIST = [
  'Bicycle Infrastructure',
  'Pedestrian Infrastructure',
  'Street Resurfacing',
  'Parks',
  'Alleys',
  'Street Redesign',
  'Sidewalk Repair',
  'Misc. CDOT',
  'Misc.',
]

const menuClassNames = `
  absolute 
  border-gray-400 
  flex
  flex-col
  flex-grow 
  focus:outline-none
  items-end
  md:px-0 
  p-3
  rounded-md
  right-10
  z-10 
`

const sluggifyCategory = (category: string) => {
  let sluggifiedCat = category.toLowerCase()

  return sluggifiedCat.replace(/\s/g, '-')
}

export default function MapFilter() {
  const [isOpen, setisOpen] = useState<boolean>(false)
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    console.log({ filters })
  }, [filters])

  const handleOpenToggle = () => {
    setisOpen((prev) => !prev)
  }

  const handleAddFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setFilters((prev) => [...prev, sluggifyCategory(target.name)])
  }

  return (
    <div className={menuClassNames}>
      <button
        className="ml-4 p-3 bg-sky-500 fill-white text-white rounded-md shadow-lg"
        onClick={handleOpenToggle}
        aria-label="Map Filters"
        title="Map Filters"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isOpen && (
        <div className="flex flex-col w-full bg-white p-4 my-3 rounded-md shadow-lg">
          <h3 className="text-lg font-bold">Filters</h3>
          <ul>
            {FILTERS_LIST.map((category, idx) => (
              <li className="my-1 flex items-center" key={category + idx}>
                <input
                  type="checkbox"
                  name={category}
                  id={`${category}-filter`}
                  className="mr-2 cursor-pointer"
                  onChange={(e) => handleAddFilter(e)}
                />
                <label
                  htmlFor={category + '-filter'}
                  className="cursor-pointer"
                >
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
