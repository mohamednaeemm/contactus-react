import React from 'react'
import contactImage from '../assets/contact.svg';

const Main = () => {
  return (
    <div className='main'>
        <h2>Contact Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quibusdam praesentium at neque vero fuga maxime. Ipsum voluptatum modi vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eaque minima quo vel totam illo.</p>
        <div className="main-body">
            <form>
                <div className="buttons">
                    <button>
                        <i class='bx bx-message-detail'>
                        </i> Via support chat
                    </button>
                    <button>
                        <i class='bx bx-phone-call'></i> Via call
                    </button>
                </div>
                <button className='email-button'><i class='bx bx-message-detail'></i>Via Email form</button>
                <div className="input-group">
                    <fieldset>
                        <legend>Name</legend>
                        <input type="text" required/>
                    </fieldset>
                    <fieldset>
                        <legend>E-mail</legend>
                        <input type="email" required/>
                    </fieldset>
                    <fieldset>
                        <legend>Text</legend>
                        <input type="text" required/>
                    </fieldset>
                </div>
                <button className='submit-button'>Submit</button>
            </form>
            <div className="main-img">
                <img src={contactImage} alt="Image"/>
            </div>
        </div>
      
    </div>
  )
}

export default Main
