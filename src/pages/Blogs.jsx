import React from 'react'
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import ConnectBar from "../components/Connect";
import NavBar from "../components/NavBar";

export default function BlogsPage() {
    return (
        <div>
            <NavBar/>
            <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-2 my-3 max-md:px-4">
                <SideBar selected="blogs"/>
                <div class="col-span-6 px-0 py-3">
                    <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                            <div class="input-group relative flex flex-row items-stretch w-full mb-4">
                                <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                                <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='pb-5 flex flex-row items-center '>
                        <h3 className='mr-5'>Tags</h3>
                        <div className='flex flex-wrap gap-2'>
                            <button className='btn selected'>Flutter</button>
                            <button className='btn'>Django</button>
                            <button className='btn'>React</button>
                            <button className='btn'>Tailwind</button>
                            <button className='btn'>Github</button>
                        </div>
                    </div>
                <div className="grid grid-cols-3 gap-x-1 gap-y-5 max-sm:grid-cols-1 max-sm:gap-y-0 md:grid-cols-2 2xl:grid-cols-3">
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='card col-span-1 h-full'>
                        <img className='h-40 w-full object-cover' src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" alt="" srcset="" />
                        <div className='px-2'>
                            <div class="font-bold text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl">Set up Tailwind CSS with Vanila JS in 2022</div>
                            {/* <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div> */}
                            <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl line-clamp-3">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
                            <div class="2xl:text-lg ">
                            <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <ConnectBar/>
            </div>
        </div>
    )
}
