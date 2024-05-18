
import  './Homepage.css'
import { Link } from 'react-router-dom';



 function Homepage() {
  return (
<div className='frontpage'>
 
     <h1 className='hii'>WELCOME TO MY PORTFOLIO!</h1>

 <div className="wrapper">
    <div className="obj">
     <div className="objchild">
      <span className="inn6"></span>
     </div>
    </div>
</div>

<div className='wrapbtn'>
<Link to={'/portfolio'} className="glowbutton">Click Here</Link>

</div>



     
</div>
  )
}

export default Homepage