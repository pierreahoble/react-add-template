import { React, useState } from "react";
import { useForm } from "react-hook-form";
import App from "../App";


const Login = (props) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const emailPatern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwPatern = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';

    


    const onSubmit = (e) => {
        // e.preventDefault()
        setemail(e.email)
        setpassword(e.password)    
        props.history.push('/Sidebar')
    };


    return (
        <div>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="card">
                                <div className="card-header pt-4 pb-4 text-center bg-primary">
                                    <a href="index.html">
                                        <span><img src="assets/images/logo.png" alt="" height="18" /></span>
                                    </a>
                                </div>

                                <div className="card-body p-4">

                                    <div className="text-center w-75 m-auto">
                                        <h4 className="text-dark-50 text-center pb-0 fw-bold">Se connecter</h4>
                                        <p className="text-muted mb-4">Entrer votre email et mot de passe pour avoir acces au panneau d'administration.</p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="mb-3">
                                            <label forHmtl="emailaddress" className="form-label">Email address</label>
                                            <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)}
                                                {...register("email", {required:true, pattern: emailPatern })} />
                                                {errors?.email?.type === "pattern" && (  <p style={{ color: 'red' }}>Email incorrecte</p>)}
                                                {errors?.email?.type === "required" && (  <p style={{ color: 'red' }}>Champ obligatoire</p>)}
                                        </div>

                                        <div className="mb-3">
                                            <a href="pages-recoverpw.html" className="text-muted float-end"><small>Forgot your password?</small></a>
                                            <label for="password" className="form-label">Password</label>
                                            <div className="input-group input-group-merge">
                                                <input type="password" id="password" className="form-control" placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)}
                                                    {...register("password", {
                                                        required: true,
                                                        required: 6,
                                                        maxLength: 20,
                                                        // pattern: passwPatern
                                                    })} />
                                                <div className="input-group-text" data-password="false">
                                                    <span className="password-eye"></span>
                                                </div>
                                            </div>
                                            <div className>
                                                {errors?.password?.type === "required" && <p style={{ color: 'red' }}>Champ obligatoire</p>}
                                                {errors?.password?.type === "required" && (<p style={{ color: 'red' }}>Mot de passe doit etre superieur a 6</p>)}
                                                {errors?.password?.type === "maxLength" && (<p style={{ color: 'red' }}>Mot de passe doit etre inferieur a 20</p>)}

                                                </div>
                                        </div>


                                        <div className="mb-3 mb-0 text-center">
                                            <button className="btn btn-primary" type="submit"> Connexion </button>
                                        </div>

                                    </form>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-muted">Don't have an account? <a href="pages-register.html" className="text-muted ms-1"><b>Sign Up</b></a></p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <footer className="footer footer-alt">
                2021 - 2050 © Hyper - KBETech.com
            </footer>
        </div>



    )

}


export default Login;