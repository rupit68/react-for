import React, { useState } from 'react'
import LocalUse from './LocalUse'
import { Field, Form, Formik } from 'formik'

const Local = () => {

    // const data = 'cdmi'
    const[data1,setdata]=useState([])
    // localStorage.setItem('demo',data)
    const hendal=(values ,{resetForm})=>{
        setdata([...data1,values])
        localStorage.setItem('el',JSON.stringify([...data1,values]))
        resetForm()
    }
    const st = localStorage.getItem('el')
  return (
    <div>
        <Formik
        initialValues={{
            name:'',
            surname:''
        }}
        onSubmit={hendal}>
            <Form>
                name:-<Field name="name"></Field>
                name:-<Field name="surname"></Field>
                <input type="submit" />
            </Form>
        </Formik>
        <LocalUse></LocalUse>
        <table>
            <tr>
                <td>{st.name}</td>
                <td>{st.surname}</td>
            </tr>
        </table>
    </div>
  )
}

 export default Local
