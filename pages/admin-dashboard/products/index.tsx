import Link from 'next/link'
import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useToasts } from 'react-toast-notifications'
import useSWR, { mutate } from 'swr'
import { useRouter } from 'next/router'
import Layout from '../../../src/components/Layout'
import { authAxios } from '../../../src/utils/axiosKits'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoaderGrowing } from '../../../src/lib/loader'
import { useUser, UserNotLogin } from '../../../src/lib/useUser'

const fetchProduct = (url: any) =>
  authAxios(url).then((res) => res.data.products)

const Products = () => {
  const { loggedIn, user } = useUser()
  const [products, setProducts] = useState([])
  const [action, setAction] = useState<number>()
  const [loading, setLoading] = useState<boolean>(false)
  const [editVisibility, setEditVisibility] = useState<boolean>(false)
  const router = useRouter()
  const { addToast } = useToasts()
  const { data, error } = useSWR(`api/v1/product`, fetchProduct, {
    refreshInterval: 1000,
  })

  const handleActionVisible = (value: number) => {
    if (action === value) {
      setAction(-1)
    } else {
      setAction(value)
    }
  }

  const handleEditVisibility = (id: any) => {
    router.push(`/admin-dashboard/products/${id}`)
  }

  const handleProductDelete = async (id: number) => {
    // call swr to delete the component
    setLoading(true)
    await authAxios({
      method: 'DELETE',
      url: `/api/v1/product/${id}`,
    })
      .then((res) => {
        mutate(`api/v1/product/`)
        addToast(res.data.message, {
          appearance: 'success',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        })
        setAction(-1)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        err
          ? addToast(err.response.data.message, {
              appearance: 'error',
              autoDismiss: true,
              autoDismissTimeout: 3000,
            })
          : addToast('Something went wrong', {
              appearance: 'error',
              autoDismiss: true,
              autoDismissTimeout: 3000,
            })
      })
  }

  if (!user && !loggedIn) {
    return <UserNotLogin />
  }

  if (loggedIn && user) {
    return (
      <div>
        <Layout.AdminDashboard>
          <div
            className="py-7 px-12 bg-backgroundGrayOne overflow-y-auto"
            style={{ height: 'calc(100vh - 75px)' }}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>
              <Link href="/admin-dashboard/products/add-new-products">
                <a className="text-sm text-white py-2.5 px-4 rounded-md bg-blueTwo">
                  Add New Products
                </a>
              </Link>
            </div>
            <div className="items-center mt-8 sm:flex hidden">
              <h3 className="text-sm text-gray-900 font-semibold mr-8">
                All Products
              </h3>
              <h3 className="text-sm text-gray-600 font-semibold mr-8">
                Headless CMS
              </h3>
              <h3 className="text-sm text-gray-600 font-semibold mr-8">
                React Template
              </h3>
              <h3 className="text-sm text-gray-600 font-semibold">
                Figma Template
              </h3>
            </div>
            <div className="h-0.5 w-full mt-3 bg-[#eceef1] sm:block hidden">
              <div className="h-0.5 bg-blueTwo w-20" />
            </div>
            <div className="w-full py-4 px-5 sm:hidden block rounded-lg border border-[#DDE6F5] mt-8">
              <select
                name="cars"
                aria-label="Select a product"
                className="w-full text-gray-700 border-none outline-none bg-transparent"
              >
                <option value="volvo">All Products</option>
                <option value="saab">Headless CMS</option>
                <option value="opel">React Template</option>
                <option value="audi">Figma Template</option>
              </select>
            </div>
            <div className="mt-8 rounded-lg bg-white p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-base text-gray-900 font-bold">
                  Product List
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center mt-4 md:mt-0">
                  <div className="mr-2 xl:w-56 sm:w-44 w-full py-2.5 px-3 rounded-lg border border-[#DDE6F5]">
                    <select
                      name="cars"
                      aria-label="Category"
                      className="w-full text-gray-700 border-none outline-none"
                    >
                      <option value="volvo">Select Category</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="mr-2 xl:w-56 sm:w-44 w-full py-2.5 px-3 rounded-lg border border-[#DDE6F5] mt-2 sm:mt-0">
                    <select
                      name="cars"
                      aria-label="Category"
                      className="w-full text-gray-700 border-none outline-none"
                    >
                      <option value="volvo">Select Category</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="xl:w-56 sm:w-44 w-full py-2.5 px-3 rounded-lg border border-[#DDE6F5] flex items-center  mt-2 sm:mt-0">
                    <input
                      type="text"
                      className="border-none outline-none bg-transparent w-full"
                      placeholder="Search"
                    />
                    <div>
                      <BiSearchAlt2 className="text-gray-500 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:grid grid-cols-12 mt-8 hidden relative">
                <div className="col-span-1 py-4 pl-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">#</h3>
                </div>
                <div className="col-span-3 py-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Product Name</h3>
                </div>
                <div className="col-span-3 py-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Pricing</h3>
                </div>
                <div className="col-span-1 py-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Total Sale</h3>
                </div>
                <div className="col-span-2 py-4 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Expected Delivery</h3>
                </div>
                <div className="col-span-1 py-4 pl-3 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900">Product Type</h3>
                </div>
                <div className="col-span-1 py-4 pl-3 bg-backgroundGrayOne">
                  <h3 className="text-sm text-gray-900 text-right pr-4">
                    Action
                  </h3>
                </div>
                {data?.map((items: any, index: number) => (
                  <>
                    <div
                      key={index.toString()}
                      className="col-span-1 py-6 my-auto"
                    >
                      <h3 className="text-sm text-gray-900">{index + 1}</h3>
                    </div>
                    <div className="col-span-3 py-6 my-auto ">
                      <h3 className="text-sm text-blueTwo">{items.title}</h3>
                    </div>
                    <div className="col-span-3 py-6 my-auto  flex items-center">
                      <h3 className="text-sm text-gray-700 mr-12">
                        ${items.price.standart}
                      </h3>
                      <h3 className="text-sm text-gray-700 mr-12">
                        ${items.price.standartPlus}
                      </h3>
                      <h3 className="text-sm text-gray-700">
                        ${items.price.extended}
                      </h3>
                    </div>
                    <div className="col-span-1 py-6 my-auto ">
                      <h3 className="text-sm text-gray-700">$0</h3>
                    </div>
                    <div className="col-span-2 py-6  my-auto ">
                      <h3 className="text-sm text-gray-700">
                        {items.expectedDelivery}
                      </h3>
                    </div>
                    <div className="col-span-1 py-6 pl-3 my-auto ">
                      <h3
                        className={`text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br ${
                          items.status.isPublished
                            ? 'from-orangeOne to-orangeTwo'
                            : 'from-[#67E5A3] to-[#08994D]'
                        } inline`}
                      >
                        {items.status.isPublished ? 'Pre-Sale' : 'Completed'}
                      </h3>
                    </div>
                    <div className="col-span-1 py-6 my-auto ml-auto">
                      <button
                        aria-label="Edit"
                        type="button"
                        onClick={() => handleActionVisible(index)}
                        className="border border-grayLight bg-backgroundGrayOne p-3 rounded-lg "
                      >
                        <BsThreeDotsVertical className="w-5 h-5" />
                      </button>
                      <div
                        className={`absolute ${
                          action === index ? 'block' : 'hidden'
                        } right-0 shadow-xl p-2 rounded-lg flex flex-col bg-white`}
                      >
                        <button
                          aria-label="Edit"
                          type="button"
                          onClick={() => handleEditVisibility(items._id)}
                          className="py-2.5 px-8"
                        >
                          Edit
                        </button>
                        <button
                          aria-label="Delete"
                          type="button"
                          onClick={() => handleProductDelete(items._id)}
                          className="py-2.5 px-8 mt-1"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <hr className="w-full bg-backgroundGrayOne" />
                    </div>
                  </>
                ))}
              </div>

              <hr className="w-full mt-10 block 2xl:hidden" />
              {data?.map((items: any, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-12 container md:mt-5 mt-4 2xl:hidden"
                >
                  <div className="col-span-4 p-4 ">
                    <h3 className="text-sm text-gray-900">#</h3>
                  </div>
                  <div className="col-span-8 p-4 ">
                    <h3 className="text-sm text-gray-900">{index + 1}</h3>
                  </div>
                  <div className="col-span-4 p-4 ">
                    <h3 className="text-sm text-gray-900">Product Name</h3>
                  </div>
                  <div className="col-span-8 p-4 ">
                    <h3 className="text-sm text-blueTwo">{items.title}</h3>
                  </div>
                  <div className="col-span-4 p-4 ">
                    <h3 className="text-sm text-gray-900">Pricing</h3>
                  </div>
                  <div className="col-span-8 p-4 flex items-center">
                    <h3 className="text-sm text-gray-700 md:mr-12 sm:mr-7 mr-5">
                      ${items.price.standart}
                    </h3>
                    <h3 className="text-sm text-gray-700 md:mr-12 sm:mr-7 mr-5">
                      ${items.price.standartPlus}
                    </h3>
                    <h3 className="text-sm text-gray-700">
                      ${items.price.extended}
                    </h3>
                  </div>
                  <div className="col-span-4 p-4 ">
                    <h3 className="text-sm text-gray-900">Total Sale</h3>
                  </div>
                  <div className="col-span-8 p-4 ">
                    <h3 className="text-sm text-gray-700">$0</h3>
                  </div>
                  <div className="col-span-4 p-4 ">
                    <h3 className="text-sm text-gray-900">Expected Delivery</h3>
                  </div>
                  <div className="col-span-8 p-4 ">
                    <h3 className="text-sm text-gray-700">
                      {items.expectedDelivery}
                    </h3>
                  </div>
                  <div className="col-span-4 p-4 ">
                    <h3 className="text-sm text-gray-900">Product Type</h3>
                  </div>
                  <div className="col-span-8 p-4 ">
                    <h3
                      className={`text-white py-0.5 px-2.5 rounded-full text-xs bg-gradient-to-br ${
                        items.status.isPublished
                          ? 'from-orangeOne to-orangeTwo'
                          : 'from-[#67E5A3] to-[#08994D]'
                      } inline`}
                    >
                      {items.status.isPublished ? 'Pre-Sale' : 'Completed'}
                    </h3>
                  </div>
                  <div className="col-span-4 p-4 ">
                    <h3 className="text-sm text-gray-900">Action</h3>
                  </div>
                  <div className="col-span-8 p-4 mr-auto relative">
                    <button
                      aria-label="Edit"
                      type="button"
                      onClick={() => handleActionVisible(index)}
                      className="border border-grayLight bg-backgroundGrayOne p-3 rounded-lg "
                    >
                      <BsThreeDotsVertical className="w-5 h-5" />
                    </button>
                    <div
                      className={`absolute ${
                        action === index ? 'block' : 'hidden'
                      } shadow-xl p-2 rounded-lg flex flex-col bg-white`}
                    >
                      <button
                        aria-label="Edit"
                        type="button"
                        onClick={() => handleEditVisibility(items._id)}
                        className="py-2.5 px-8"
                      >
                        Edit
                      </button>
                      <button
                        aria-label="Delete"
                        type="button"
                        onClick={() => handleProductDelete(items._id)}
                        className="py-2.5 px-8 mt-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <hr className="w-full bg-backgroundGrayOne" />
                  </div>
                </div>
              ))}
              <div className="flex sm:flex-row flex-col justify-between items-center mt-6">
                <h2 className="tex-base font-bold text-gray-700">
                  Total 1234 Products
                </h2>
                <div className="mt-3 sm:mt-0">
                  <button
                    type="button"
                    className="text-sm text-gray-100 py-3 px-4 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo mr-2"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="text-sm text-gray-600 py-3 px-4 rounded-lg bg-backgroundGrayOne mr-2"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="text-sm text-gray-600 py-3 px-4 rounded-lg bg-backgroundGrayOne mr-2"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="text-sm text-gray-600 py-3 px-4 rounded-lg bg-backgroundGrayOne"
                  >
                    4
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout.AdminDashboard>
      </div>
    )
  }

  return <LoaderGrowing />
}

export default Products

type Inputs = {
  title: string
  status: string
  description: string
  expectedDelivery: string
  category: string
  standard: number
  standardPlus: number
  business: number
}

const ProductUpdate = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const [loading, setLoading] = useState<boolean>(false)
  //   const router = useRouter();
  const { addToast } = useToasts()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {}
  return (
    <div className="flex items-center justify-center">
      <div className=" lg:w-auto w-full md:p-10 sm:p-7 p-5 rounded-lg bg-white">
        <div className="flex items-center justify-between">
          <h1 className="md:text-2xl sm:text-xl text-base text-gray-900 font-bold">
            Add New Products
          </h1>
          <Link href="/admin-dashboard/products">
            <a className="py-2.5 px-4 rounded-md bg-gray-500 text-gray-100 md:text-sm text-xs">
              Back
            </a>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-5 mt-10"
        >
          <div className="sm:col-span-8 col-span-12">
            <input
              {...register('title', { required: true })}
              className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none"
              placeholder="Product Title"
            />
            {errors?.title && (
              <span className="text-xss italic text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="sm:col-span-4 col-span-12">
            <div className="border border-[#DDE6F5] p-4 rounded-md ">
              <select
                aria-label="status"
                {...register('status', { required: true })}
                className="w-full text-sm outline-none"
              >
                <option value="pre-sale" className="text-sm">
                  Pre-Sale
                </option>
                <option value="ready" className="text-sm">
                  Ready
                </option>
              </select>
            </div>
            {errors?.status && (
              <span className="text-xss italic text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="col-span-12">
            <textarea
              {...register('description', { required: true })}
              className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none h-24 resize-none"
              placeholder="Product Description"
            />
            {errors?.description && (
              <span className="text-xss italic text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="sm:col-span-6 col-span-12">
            <div className="border border-[#DDE6F5] p-4 rounded-md ">
              <input
                aria-label="expectedDelivery"
                type="date"
                {...register('expectedDelivery', { required: true })}
                className="w-full text-sm outline-none"
              />
            </div>
            {errors?.expectedDelivery && (
              <span className="text-xss italic text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="sm:col-span-6 col-span-12">
            <div className="border border-[#DDE6F5] p-4 rounded-md ">
              <select
                aria-label="category"
                {...register('category', { required: true })}
                className="w-full text-sm outline-none"
              >
                <option value="MERN" className="text-sm">
                  MERN
                </option>
                <option value="Headless" className="text-sm">
                  Headless
                </option>
                <option value="React" className="text-sm">
                  React
                </option>
                <option value="Figma" className="text-sm">
                  Figma
                </option>
              </select>
            </div>
          </div>
          <h1 className="text-sm text-gray-900 col-span-12 mt-3">
            PRICING PLAN
          </h1>
          <div className="md:col-span-4 sm:col-span-6 col-span-12">
            <input
              type="number"
              {...register('standard', { required: true })}
              className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none"
              placeholder="Standard"
            />
            {errors?.standard && (
              <span className="text-xss italic text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="md:col-span-4 sm:col-span-6 col-span-12">
            <input
              type="number"
              {...register('standardPlus', { required: true })}
              className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none"
              placeholder="Standard Plus"
            />
            {errors?.standardPlus && (
              <span className="text-xss italic text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="md:col-span-4 sm:col-span-6 col-span-12">
            <input
              type="number"
              {...register('business', { required: true })}
              className="border border-[#DDE6F5] p-4 rounded-md w-full text-sm outline-none"
              placeholder="Business"
            />
            {errors?.business && (
              <span className="text-xss italic text-red-500">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="md:text-sm text-xs py-3 px-5 rounded-md bg-blueTwo md:col-span-3 sm:col-span-4 col-span-8 text-gray-100"
          >
            {loading ? 'Please Wait...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  )
}
