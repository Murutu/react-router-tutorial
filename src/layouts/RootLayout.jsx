import {NavLink, Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Job Router</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout

/*
Inside this layout if we want to see the page components 
We use the component called Outlet from react-router-dom 

For example when we want to access the about page it will be rendered in the Outlet

import {NavLink, Outlet} from "react-router-dom";

const RoootLayout = () => {
    return (
        <div>
        <header>
        <nav>
        <h1></h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        </nav>
        </header>

        <main>
        <Outlet />
        </main>
        </div>
    )
}

export default RootLayout;
*/