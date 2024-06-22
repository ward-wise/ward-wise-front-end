import { useState } from 'react'
import { MenuIcon, CloseIcon } from '../SVGIcons'

const menuClassNames = `
  absolute 
  flex
  flex-col
  z-10 
  md:px-0 
  border-gray-400 
  p-3
  flex-grow 
  focus:outline-none
  rounded-md
  right-10
`

export default function MapFilter() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleMenuOpenToggle = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className={menuClassNames}>
      <button
        className="ml-4 p-3 shadow-lg bg-sky-500 fill-white text-white rounded-md"
        onClick={handleMenuOpenToggle}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {menuOpen && (
        <div className="flex flex-col bg-white">
          <h3>Filters</h3>
          <div></div>
        </div>
      )}
    </div>
  )
}
