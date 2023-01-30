import {Link}from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate praesentium esse ea exercitationem! Nobis qui ipsam consequuntur, officiis blanditiis tempora.</p>

        <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}

export default NotFound