import React from 'react'
import './GoalTestimonial.css'
export default function GoalTestimonial() {
  return (
<>
<div className='container-fluid mx-auto mt-5 mb-5 col-12 center-testimonial' >

    <div className="hd">Why you Should Believe in Us</div>
    <p><small className="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
    
    <div className="row center-testimonial" >
        <div className="card col-md-3 col-12 mx-2 ">
            <div className="card-content">
                <div className="card-body"> <img className="img" alt='free-img' src="https://i.imgur.com/S7FJza5.png" />
                    <div className="shadow"></div>
                    <div className="card-title"> We're Free </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2 mx-2">
            <div className="card-content">
                <div className="card-body"> <img className="img" alt='unbiased' src="https://i.imgur.com/xUWJuHB.png" />
                    <div className="card-title"> We're Unbiased </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img rck" alt="Guide" src="https://i.imgur.com/rG3CGn3.png" />
                    <div className="card-title"> We Provided you </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">We offer a comprehensive collection of study materials to support your academic journey. Our curated resources encompass a wide range of subjects, ensuring you have access to quality materials that aid in your learning process. </small> </p>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    
   
</div>
    </>
  )
}
