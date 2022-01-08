import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import ConnectBar from '../components/Connect'

export default function NotFound404() {
    return (
        <div>
            <NavBar/>
            <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-4 my-3">
                <SideBar selected="blogs"/>
                <div class="col-span-6 px-2 py-3">
                    <h1>404</h1>
                </div>
                <ConnectBar/>
            </div>
        </div>
    )
}
