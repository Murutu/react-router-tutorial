import {useLoaderData, Link} from "react-router-dom";

const Careers = () => {
    const careers = useLoaderData()

  return (
    <div className="careers">
        {careers.map((career) => (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>Based in{career.location}</p>
            </Link>
        ))}
    </div>
  )
}

export default Careers;

/* LOADER FUNCTION */

export const careersLoader = async () => {
    const response = await fetch('http://localhost:4000/careers');
    
    return response.json();
}

/*
We use const careers bcz this is the data were going to be fetching 

react-router is going to grab this data for us (res.json())
& then when we use this hook useLoaderData() in the component Careers it is goin
to return the data for us

import {useLoaderData, Link} from "react-router-dom";

const Career = () => {
    const careers = useLoaderData()
    return ()
}

export const careersLoader = async () => {
    const response = await fetch("");
    return response.json()
}

export default Career;

<Route path="careers" element={<CareersLayout/>}>
<Route path index element={<CareerLayout/>}/>
</Route>
*/