import React from 'react'
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import ConnectBar from "../components/Connect";
import NavBar from "../components/NavBar";
import TimeLine from '../components/TimeLine';

export default function PortfolioPage() {
    return (
        <div>
            <NavBar/>
            <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-4 my-3">
                <SideBar selected="portfolio" />
                <div class="col-span-6 px-2 py-3">
                    <h1 className='text-2xl font-bold'>Hi there,</h1>
                    <h3 className='text-xl '>I'm a Flutter and Django developer from Bhopal</h3>
                    <h3 className='text-xl '>And here is my Journey!</h3>
                    {/* <TimeLine/> */}
                </div>
                <ConnectBar/>
            </div>
        </div>
    )
}
