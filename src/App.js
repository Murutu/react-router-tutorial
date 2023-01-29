import {BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Job Router</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

/*
1st STEP

There is a problem with this bzc were sending a fresh request to the server to send back a new HTML page
This is not how SPAs and react apps actually work

We will now use react-router to intercept requests going to the serve to just pop up content for different pages

import {BrowserRouter, Router, Routes, Link} from "react";

function App() {
  return (
    <BrowserRouter>
      <main>
      <Routes>
      <Route path="/" element={}/>
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App()

2nd STEP

function App() {
  return (
    <BrowserRouter>
    <header>
    <nav>
    <h1>Routes</h1>
    <NavLink path="/">Home</NavLink>
    <NavLink path="/about">About</NavLink>
    </nav>
    </header>
    <main>
    <Routes>
    <Route index element={}/> instead of using path we can use index to perform the same task
    <Route path="/about" element={<About/>}/>
    </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App;
*/
