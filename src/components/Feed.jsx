import React from 'react'

export default function Feed() {
    return (
        <div class="col-span-6 px-2 py-3">
            <h2 class="border-b text-2xl font-semibold pb-2 mb-5">Latest</h2>
          <div class="card grid grid-cols-3 ">
            <div class="overflow-hidden col-span-1 bg-slate-300 ">
              <img class=" object-cover h-full " src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div class="col-span-2 mx-3">
              <div class="font-bold text-gray-600 my-1 text-lg sm:text-xl 2xl:text-2xl">Set up Tailwind CSS with Vanila JS in 2022</div>
              <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div>
              <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl max-sm:line-clamp-2">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
              <div class="2xl:text-lg p-2">
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <div class="card grid grid-cols-3 ">
            <div class="overflow-hidden col-span-1 bg-slate-300 ">
              <img class=" object-cover h-full " src="https://images.unsplash.com/photo-1566475955255-404134a79aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NCUzQTN8ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div class="col-span-2 mx-3">
              <div class="font-bold text-gray-600 my-1 text-lg sm:text-xl 2xl:text-2xl">Set up Tailwind CSS with Vanila JS in 2022</div>
              <div class="text-gray-500 my-1 ml-1 sm:text-md 2xl:text-lg">7th Janurary 2022</div>
              <div class="text-gray-600 my-1 text-md sm:text-lg 2xl:text-xl max-sm:line-clamp-2">In this blog we'll set up Tailwind CSS v3 with vanilla JS with the help of watch package. v3 with vanilla JS with the help of watch package</div>
              <div class="2xl:text-lg p-2">
                <a href="">Read more</a>
              </div>
            </div>
          </div>
         </div>
    )
}
