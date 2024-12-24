"use client"
import React, { useState } from 'react';
import './sidebar.css'; // Import your CSS file

export default function SideBar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" text-black" >
            <button onClick={toggleSidebar} id="toggle-button">
                Toggle Sidebar
            </button>
            <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
            <div className="content">
                <h1>Main Content</h1>
                <p>Your main content goes here.</p>
            </div>
        </div>
    );
}