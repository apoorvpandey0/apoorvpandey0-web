import React from 'react'
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import ConnectBar from "../components/Connect";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div>
            <NavBar/>
            <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-4 my-3">
                <SideBar selected="home" />
                <Feed/>
                <ConnectBar/>
            </div>
        </div>
    )
}
