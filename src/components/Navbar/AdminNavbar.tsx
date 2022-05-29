import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsList } from 'react-icons/bs'
import { HiBell, HiMail } from 'react-icons/hi'

const AdminNavbar = ({ handleSidebar }: { handleSidebar: any }) => {
  return (
    <div className="bg-white flex items-center shadow-md justify-between px-5 py-3 relative">
      <div>
        <Link href="/">
          <a>
            <Image src="/brandLogo.svg" alt="" width="136" height="42" />
          </a>
        </Link>
      </div>
      <div className="items-center lg:flex hidden">
        <button>
          <HiMail className="text-xl text-gray-500 mr-5" />
        </button>
        <button>
          <HiBell className="text-xl text-gray-500 mr-8" />
        </button>
        <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-blueTwo" />
      </div>
      <div
        className="p-3 rounded-md bg-gradient-to-r from-blueOne to-blueTwo shadow-3xl lg:hidden block cursor-pointer"
        onClick={handleSidebar}
      >
        <BsList style={{ color: 'white', width: '18px', height: '15.5px' }} />
      </div>
    </div>
  )
}

export default AdminNavbar
