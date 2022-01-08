import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar(props) {
    console.log(props)
    var defaultHome = "nav-item flex items-center justify-end md:hover:border-red-500 hover:text-red-500 ";
    var selectedHome = ""
    var defaultBlogs = "nav-item flex items-center justify-end md:hover:border-blue-500 hover:text-blue-500 ";
    var selectedBlogs = ""
    var defaultPortfolio = "nav-item flex items-center justify-end md:hover:border-green-500 hover:text-green-500 ";
    var selectedPortfolio = ""
    var defaultContact = "nav-item flex items-center justify-end md:hover:border-yellow-500 hover:text-yellow-500 ";
    var selectedContact = ""
    switch (props.selected) {
        case 'home':
            console.log("home selected");
            selectedHome = "nav-item flex items-center justify-end border-red-500 text-red-500";        
            break;
        case 'blogs':
            console.log("home selected");
            selectedBlogs = "nav-item flex items-center justify-end border-blue-500 text-blue-500";        
            break;
        case 'portfolio':
            console.log("home selected");
            selectedPortfolio = "nav-item flex items-center justify-end border-green-500 text-green-500";        
            break;
        case 'contact':
            console.log("home selected");
            selectedContact = "nav-item flex items-center justify-end border-yellow-500 text-yellow-500";        
            break;
        
        default:
            break;
    }
    return (
<div class="col-span-3 mr-5 border-b text-right mt-4 flex md:flex-col items-end bg-white max-md:fixed max-md:bottom-0 max-md:w-full max-md:justify-between max-md:px-7">
        <Link to='/' className={props.selected==="home"?selectedHome:defaultHome}>
            <h3 class="mr-5 max-md:hidden">Home</h3>
            <svg class = "w-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </Link>
        <Link to='/blogs' className={props.selected==="blogs"?selectedBlogs:defaultBlogs}>
            <h3 class="mr-5 max-md:hidden">Blogs</h3>
            <svg class = "w-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        </Link>
        <Link to='/portfolio' className={props.selected==="portfolio"?selectedPortfolio:defaultPortfolio}>
            <h3 class="mr-5 max-md:hidden">Portfolio</h3>
            <svg class = "w-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </Link>
        <Link to='/contact' className={props.selected==="contact"?selectedContact:defaultContact}>
            <h3 class="mr-5 max-md:hidden">Contact</h3>
            <svg class = "w-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
        </Link>
      </div>

    )
}
