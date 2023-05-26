import Image from "next/image"
import Logo from '@/assets/logo.png'

import { ArchiveBoxIcon, ArrowLeftIcon, ArrowRightOnRectangleIcon, ChartBarIcon, PaintBrushIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="flex w-full h-screen font-sans text-gray-900 bg-white ">
      <aside className="rounded-3xl mx-4 my-4 flex flex-col py-4 px-6 w-52 border border-gray-200">
        <a href="#">
          <Image src={Logo} alt="logo" className="w-24"/>
        </a>
        <ul className="flex flex-col gap-y-5 pt-12">
            <li>
              <a href="#" className="flex gap-x-3 items-center group">
                <ChartBarIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500"/>
                <span className="inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-x-3 items-center group">
                <PaintBrushIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500"/>
                <span className="inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold">Design</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-x-3 items-center group">
                <ShoppingBagIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500"/>
                <span className="inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold">Orders</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-x-3 items-center group">
                <ArchiveBoxIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500"/>
                <span className="inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold">Inventory</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-x-3 items-center group">
                <ArrowRightOnRectangleIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500"/>
                <span className="inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold">Log out</span>
              </a>
            </li>
        </ul>
      </aside>
      <main className="flex flex-col flex-1 py-4 px-10">
        <button className="flex gap-x-1 items-center text-gray-400">
          <ArrowLeftIcon className="w-4 h-4 fill-content" />
          <span className="inline-block pt-0.5 text-sm leading-6">Back to orders</span>
        </button>
        <section className="mt-4">
          <h1 className="text-2xl font-bold">Products</h1>
          <div className="grid grid-cols-1 mt-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">

            <a href="#" className="group">
              <div className="w-32 h-32 rounded-xl border text-center border-gray-200">
                <ArchiveBoxIcon className="w-10 h-10 mt-3 mx-auto" />
                <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-32 h-32 rounded-xl border text-center border-gray-200">
                <ArchiveBoxIcon className="w-10 h-10 mt-3 mx-auto" />
                <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-32 h-32 rounded-xl border text-center border-gray-200">
                <ArchiveBoxIcon className="w-10 h-10 mt-3 mx-auto" />
                <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-32 h-32 rounded-xl border text-center border-gray-200">
                <ArchiveBoxIcon className="w-10 h-10 mt-3 mx-auto" />
                <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
              </div>
            </a>

          
          </div>
        </section>
      </main>
    </div>
  )
}
