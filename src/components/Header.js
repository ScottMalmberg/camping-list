import React from 'react'

export default function Header() {
    const navStyle = {
        color: "white",
        textAlign: "center"
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark justify-content-center" style={navStyle}>
                    <h1>CampingList</h1>
                </nav>
            </header>
        </div>
    )

    
}
