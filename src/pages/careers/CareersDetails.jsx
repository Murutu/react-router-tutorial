import { useParams, useLoaderData } from 'react-router-dom'

const CareersDetails = () => {
    const { id } = useParams();

    const careers = useLoaderData();

  return (
    <div className="career-details">
        <h2>Career Details for {careers.title} </h2>
        <p>Starting salary: {careers.salary}</p>
        <p>Location: {careers.location}</p>

        <div className="details">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quaerat nobis a magni aliquid ab tempora. Expedita dolorum eos rem blanditiis illo porro. Eos placeat quibusdam ut esse unde debitis?</p>
        </div>
    </div>
  )
}

export default CareersDetails


// LOADER FUNCTION

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch("http://localhost:4000/careers/" + id)

    return res.json();
}


/*
useParams will allow us to access the parameters

const { id } = useParams();

Were using the id bcz it what we named it in the App
*/