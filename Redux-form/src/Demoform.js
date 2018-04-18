import React from 'react';
import {reduxForm,Field } from 'redux-form'
import showResults from './showResults'
import provinces from './data'
import isValidEmail from 'sane-email-validation'
import { Link } from 'react-router-dom';

const validate= values=>{
    const errors={}
    if(!values.Firstname){
        errors.Firstname='Required'
    }
    if(!values.Lastname){
        errors.Lastname='Required'
    }
    if(!values.Email){
        errors.Email='Required'
    }else if (!isValidEmail(values.Email)){
        errors.Email='Invalid Email'
    }
    if(!values.province){
        errors.province='Required'
    }
    return errors
}

const createRender=render =>({input,meta,label,...rest})=>
<div>
    <label>{label}</label>
    {render(input,label,rest)}
   
    {meta.error && meta.touched &&<span>{meta.error}</span>}
    </div>
    const renderInput=createRender((input,label)=>
    <input {...input} placeholder={label}/>
)
const renderSelect=createRender((input,label,{children})=>
    <select {...input} >{children}</select>
)
let DemoForm=({handleSubmit,submitting}) =>
<form onSubmit={handleSubmit(showResults)}>
    <Field name="Firstname" label="First Name" component={renderInput }/>
    <Field name="Lastname" label="Last Name" component={renderInput }/>
    <Field name="Email" label="Email" component={renderInput }/>
    <Field name="province" label="province" component={renderSelect }>
    <option />
    {provinces.map(province=> <option key={province} value={province}>
    {province}
    </option>)}
    </Field>
    <button type="submit" disabled={submitting}>Submit</button>
    <Link to='/'> < button >Back</ button></Link>
    </form>
   
DemoForm = reduxForm({
    form:'demo',
    validate
})(DemoForm)
export default DemoForm