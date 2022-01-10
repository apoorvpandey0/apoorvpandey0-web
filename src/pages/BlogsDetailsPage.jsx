import React from 'react'
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import ConnectBar from "../components/Connect";
import NavBar from "../components/NavBar";
export default function ContactPage() {
    return (
        <div>
            <NavBar/>
            <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-4 my-3">
                <SideBar selected="contact"/>
                <div class="col-span-6 px-2 py-3">
                    Contact
                </div>
                <ConnectBar/>
            </div>
        </div>
    )
}
