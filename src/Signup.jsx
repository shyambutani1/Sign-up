import React from 'react' 
import SLIDE2 from './SLIDE2.jpg'

function Signup() {
  return (
    <>
    <div className="form">
        <h2>Sign UP</h2>
        <div className="user">
        <i class="fa-solid fa-user" ></i>
        <input type="text" placeholder='Your Name' className='nameinput' />
        </div>
        <div className="email">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder='Your Email'  className='emailinput' />
        <div className="password">
        <i class="fa-solid fa-lock"></i>
        <input type="password" placeholder='Your Password'  className='passwordinput' />
        </div>
        <div className="repeat">
        <i class="fa-solid fa-key"></i>
        <input type="repeatpassword" placeholder='Repeat Your password'  className='repeatinput' />
        </div>
        <div className="checkbox">
        <input type="checkbox" className='checkboxinput' />
        <p>l agree all statements in <span>Terms of Service</span></p>
        </div>

        <button className='btnn'> REGISTER</button>

        <div className="photo">
          <img src={SLIDE2} alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default Signup