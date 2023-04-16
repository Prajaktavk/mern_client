import React from 'react'
import firebase from './firebase'
import swal from 'sweetalert';
import './otpverify.css'

class Otpverify extends React.Component {
 
  
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }


  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }



  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          swal("Congrulations","OTP  has been sent ",'success')
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
          swal("Oops!", "Something went wrong", "error");
        });
  }

  
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      swal("Congrulations","OTP verified",'success').then( result=>{
      window.location.href='/Home2'  });
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      swal("Oops!", "Something went wrong", "error");
      console.log(error)
      // ...
    });
  }
  
  render() {

    return (
      <div className="pic justify-content-center ">
        
        <form onSubmit={this.onSignInSubmit} >
          <div id="sign-in-button"></div>
          <h2>Enter Mobile Number</h2>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
         <br/> <br/>
          <button className='sub-btn'type="submit">Send OTP</button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <br/> <br/>
         <button className='sub-btn'type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default Otpverify
