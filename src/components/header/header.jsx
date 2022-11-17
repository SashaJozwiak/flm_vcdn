import React from "react";
import './../header/header.css'

function Header () {
    return (
        <header className="header">
            <div className="nav">
                Фильмы
            </div>

            <nav className="nav">
                Сериалы
            </nav>

            <div className="nav">
                Аниме
            </div>
        </header>
    )
}

export default Header;