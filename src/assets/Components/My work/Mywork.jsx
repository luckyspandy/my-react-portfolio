import React from 'react'
import './Mywork.css'
import mywork_data from '../../../assets/mywork_data'

const Mywork = () => {
  return (
    <div id="work" className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
        
      {/* <img src='' /> */}
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt={work.w_name} />
        })}
    </div>
    
    {/* <div className="mywork-show">
        <p>Show more</p>

    </div> */}

    </div>
  )
}

export default Mywork;
