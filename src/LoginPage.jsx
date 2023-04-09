import React from 'react'
import { Formik,Form } from 'formik'
import TextField from './TextField';
import * as Yup from 'yup';
import image from './images/Group 11132.png'
import image2 from './images/Group 11132@2x.png'
import logo from './images/logo.png'
import buttonimg from './images/Group 2.png'
import { Link } from 'react-router-dom';

const LoginPage = () => {
const validate=Yup.object({
   email:Yup.string()
   .email("Invalid email id")
   .required('email is Required'),
   password:Yup.string()
   .min(6,"Invalid password")
   .required('password is required')
})

    return (
    <Formik
    initialValues={{
        email:'',
        password:''
    }}
   validationSchema={validate}
   onSubmit={values=>{
    console.log(values)
   }}
    >
   {formik=>(
    <div className='login'>
        <div className='main'>
    <div className='left-side'>
        <h1 className='heading'>Log In</h1>
        <p className='welcome'>Welcome Back</p>
        <Form className='form'>
            <div className='emailf'>
            <p className='emailp'>Email</p>
            <TextField className="email" name="email"  type="text" />
            </div>
            <div className='passout'>
                <div className='passfor'>
                <p className='pass'>Password</p> 
            <p className='forgot'>Forget Password</p>
            </div>
            <TextField className="passin" name="password" type="password"/>
            </div>
           <button className='btn' ></button>
        </Form>
      <a className='signup'></a>
    </div>
    <div className='right-side'>
        <div className='image'>
    <img className='mainImage' src={image} alt="" /></div>
    
    </div>
    </div>
    </div>
   )}
  </Formik>
     )}

export default LoginPage