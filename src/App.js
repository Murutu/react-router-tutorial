import {createBrowserRouter,  Route,  createRoutesFromElements, RouterProvider } from "react-router-dom";
import CareersLayout from "./layouts/CareersLayout";
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";



import About from "./pages/About";
import Careers, {careersLoader} from "./pages/careers/Careers";
import CareersDetails, { careerDetailsLoader } from "./pages/careers/CareersDetails";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />}/>


    <Route path="help" element={<HelpLayout/>}>
      <Route path="faq" element={<Faq/>}/>
      <Route path="contact" element={<Contact />}/>
    </Route>

    <Route path="careers" element={<CareersLayout/>}>
      <Route 
        index 
        element={<Careers/>}
        loader={careersLoader}
        />

        <Route path=":id" element={<CareersDetails/>} loader={careerDetailsLoader}/>
    </Route>


    <Route path="*" element={<NotFound />}/>
  </Route>
  )
)

function App() {
  return (
   
    // <header> element to act as a layout component for any routes nested inside it this layout will wrap the components inside it
    //   <nav>
    //     <h1>Job Router</h1>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/about">About</NavLink>
    //   </nav>
    // </header>
      <main>
       <RouterProvider router={router}/>
      </main>
    
  );
}

export default App;

// New Method

/*
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<RootLayout />}/>
    <Route index element={<Home />}/>
    </Route path="about" element={<About/>}>
  )
)

inside our paths we no longer have to use the / bcz this path is relative to the RootLayout (parent)

function App() {
  return (
    <main>
    <RouterProvider router={router}/>
    </main>
  )
}

export default App

*/

// Older Method
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
