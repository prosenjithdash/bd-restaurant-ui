import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocialSignIn from "../Components/SocialSignIn";


// import lp from'../../src/assets/lp.png'
const SignIn = () => {

    const { logIn } = useContext(AuthContext);

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6); 

    },[])

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        
        logIn(email, password)
            // Signed in 
            .then((userCredential) => {
            
                const user = userCredential.user;
                console.log(user)
                // alert('SignIn Successfully Done.')
                toast("SignIn Successfully Done.")
                navigate(from, { replace: true });
            
        })
            .catch((error) => {
               
                const errorMessage = error.message;
                console.log(errorMessage)
                // alert('Wrong SignIn. Please try again...')
                toast("Wrong SignIn. Please try again...")

              
            });

    }

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;
        console.log(userCaptchaValue)
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
            alert('Captcha is right.')
        }
        else {
            setDisabled(true)
            alert('Captcha is not right.Try again...')
        }
    }
    return (
        <div className="py-[25px]   bg-[url('../../src/assets/lp.png')]">
            <div className="drop-shadow-lg lg:px-[100px] px-[10px] lg:pb-[50px] pb-[50px] lg:max-w-[1280px] lg:mx-auto bg-[url('../../src/assets/lp.png')] mx-4">
                <div className="lg:flex lg:gap-[24px] gap-[10px] items-center">
                    <div>
                        <img className="w-[600px] h-[400px]" src="https://i.ibb.co/QJwjwYv/shape-scene-woman-working-1-fmt-png-alpha-wid-1000.png" alt="" />
                    </div>
                    
                    <div className=" shrink-0 w-full  lg:max-w-[500px] ">
                        <form onSubmit={handleSignIn} className="card-body">
                            <h2 className="text-center text-[30px] font-bold">LogIn</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} placeholder="type the captcha above" name="captcha" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className="btn btn-xs mt-4">Validate</button>

                               
                            </div>
                                <div className="form-control mt-6">
                                
                                <input disabled={disabled} type="submit" className="btn  bg-yellow-400 hover:bg-blue-300 text-black" value="Login" />
                                
                                </div>
                        </form>
                        <h2 className="text-[20px] text-yellow-700 pb-[25px] font-bold text-center">
                            New here? Create a New Account
                            <Link to='/signUp'><button className=" text-[20px] text-blue-500 pb-[25px] font-bold text-center btn btn-link">SignUp</button></Link>
                        </h2>
                        <div className="text-center">
                            <h2 className="pb-[15px] font-semibold">Or sign in with</h2>
                            <div className="flex gap-[50px] justify-center">

                                <button className="btn rounded-full  border-2 border-black  px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.69641 13.248C9.62441 13.248 8.04041 13.248 7.32041 13.248C6.93641 13.248 6.81641 13.104 6.81641 12.744C6.81641 11.784 6.81641 10.8 6.81641 9.84001C6.81641 9.45601 6.96041 9.33601 7.32041 9.33601H9.69641C9.69641 9.26401 9.69641 7.87201 9.69641 7.22401C9.69641 6.26401 9.86441 5.35201 10.3444 4.51201C10.8484 3.64801 11.5684 3.07201 12.4804 2.73601C13.0804 2.52001 13.6804 2.42401 14.3284 2.42401H16.6804C17.0164 2.42401 17.1604 2.56801 17.1604 2.90401V5.64001C17.1604 5.97601 17.0164 6.12001 16.6804 6.12001C16.0324 6.12001 15.3844 6.12001 14.7364 6.14401C14.0884 6.14401 13.7524 6.45601 13.7524 7.12801C13.7284 7.84801 13.7524 8.54401 13.7524 9.28801H16.5364C16.9204 9.28801 17.0644 9.43201 17.0644 9.81601V12.72C17.0644 13.104 16.9444 13.224 16.5364 13.224C15.6724 13.224 13.8244 13.224 13.7524 13.224V21.048C13.7524 21.456 13.6324 21.6 13.2004 21.6C12.1924 21.6 11.2084 21.6 10.2004 21.6C9.84041 21.6 9.69641 21.456 9.69641 21.096C9.69641 18.576 9.69641 13.32 9.69641 13.248Z" fill="#444444" />
                                    </svg>
                                </button>

                                <div>
                                    <SocialSignIn/>
                                </div>

                                <button className="btn rounded-full  border-2 border-black  px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_3_108)">
                                        <path d="M12 0.5C5.37 0.5 0 5.78 0 12.292C0 17.503 3.438 21.922 8.205 23.48C8.805 23.591 9.025 23.226 9.025 22.913C9.025 22.633 9.015 21.891 9.01 20.908C5.672 21.619 4.968 19.326 4.968 19.326C4.422 17.965 3.633 17.601 3.633 17.601C2.546 16.87 3.717 16.885 3.717 16.885C4.922 16.967 5.555 18.1 5.555 18.1C6.625 19.903 8.364 19.382 9.05 19.081C9.158 18.318 9.467 17.799 9.81 17.504C7.145 17.209 4.344 16.195 4.344 11.677C4.344 10.39 4.809 9.338 5.579 8.513C5.444 8.215 5.039 7.016 5.684 5.392C5.684 5.392 6.689 5.076 8.984 6.601C9.944 6.339 10.964 6.209 11.984 6.203C13.004 6.209 14.024 6.339 14.984 6.601C17.264 5.076 18.269 5.392 18.269 5.392C18.914 7.016 18.509 8.215 18.389 8.513C19.154 9.338 19.619 10.39 19.619 11.677C19.619 16.207 16.814 17.204 14.144 17.494C14.564 17.848 14.954 18.571 14.954 19.676C14.954 21.254 14.939 22.522 14.939 22.905C14.939 23.214 15.149 23.583 15.764 23.465C20.565 21.917 24 17.495 24 12.292C24 5.78 18.627 0.5 12 0.5Z" fill="#444444" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_108">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                    
                </div>
           </div>
        </div>
    );
};

export default SignIn;