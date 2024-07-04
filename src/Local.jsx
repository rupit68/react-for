// import React, { useState } from 'react'
// // import LocalUse from './LocalUse'
// import { Field, Form, Formik } from 'formik'

// const Local = () => {
//     const inivalue = JSON.parse(localStorage.getItem('formdata'))


//     const [data1, setdata] = useState(inivalue)

//     const hendal = (values, { resetForm }) => {
//         setdata([...data1, values])
//         resetForm()
//     }
//     localStorage.setItem('formdata', JSON.stringify(data1))
//     return (
//         <div>
//             <Formik
//                 initialValues={{
//                     name: '',
//                     surname: ''
//                 }}
//                 onSubmit={hendal}>
//                 <Form>
//                     name:-<Field name="name">
//                     </Field><br />
//                     surname:-<Field name="surname"></Field><br />
//                     <input type="submit" /><br /><br />
//                 </Form>
//             </Formik>

//             <table border={1}>
//                 <tr>
//                     <td>name</td>
//                     <td>surname</td>
//                 </tr>
//                 {
//                     data1.map((el, i) => (
//                         <tr>
//                             <td>{el.name}</td>
//                             <td>{el.surname}</td>
//                         </tr>
//                     ))
                    
//                 }
//             </table>
//         </div>
//     )
// }

// export default Local
