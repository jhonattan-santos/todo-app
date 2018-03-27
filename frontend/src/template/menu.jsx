import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="navbar-header">
            <a href="#" className="navbar-brand">
                <i className="fa fa-calendar-check-o"></i> TodoApp
            </a>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><a href="#/Todo">Task</a></li>
                <li><a href="#/About">About</a></li>
            </ul>
        </div>
    </nav>
)