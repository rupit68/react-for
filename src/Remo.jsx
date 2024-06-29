// import { Field, Form, Formik } from 'formik'
// import React, { useState } from 'react'

// const Remo = () => {
//     const [data, setdata] = useState([])
//     const [id, setid] = useState(null)
//     const [inivalue, setinivalue] = useState(
//         {
//             name: '',
//             surname: '',
//             sub1: '',
//             sub2: '',
//             sub3: ''
//         }
//     )
//     const handel = (values,{resetForm}) => {
//         if (id !== null) {
//             let copy = [...data]
//             copy[id] = values
//             setdata(copy)
//             setid(null)
//         }
//         else {
//             setdata([...data, values])
//             resetForm()
//         }
//         setinivalue({
//             name: '',
//             surname: '',
//             sub1: '',
//             sub2: '',
//             sub3: ''
//         })
//     }
//     const deletedata = (i) => {
//         let copy = [...data]
//         copy.splice(i, 1)
//         setdata(copy)
//     }
//     const updatedata = (el, i) => {
//         setinivalue({
//             'name': el.name,
//             'surname': el.surname,
//             'sub1': el.sub1,
//             'sub2': el.sub2,
//             'sub3': el.sub3,
//         })
//         setid(i)
//     }
//     return (
//         <div>
//             <Formik
//             enableReinitialize
//                 initialValues={inivalue}
//                 onSubmit={handel}>

//                 <Form>
//                     name:-<Field name="name"></Field><br />
//                     surname:-<Field name="surname"></Field><br />
//                     sub1:-<Field name="sub1"></Field><br />
//                     sub2:-<Field name="sub2"></Field><br />
//                     sub3:-<Field name="sub3"></Field><br />
//                     <input type="submit" />
//                 </Form>
//             </Formik>
//             <table>
//                 <tr>
//                     <th>name</th>
//                     <th>surname</th>
//                     <th>sub1</th>
//                     <th>sub2</th>
//                     <th>sub3</th>
//                     <th>delete</th>
//                     <th>update</th>
//                 </tr>
//                 {
//                     data.map((el, i) => (
//                         <tr>
//                             <td>{el.name}</td>
//                             <td>{el.surname}</td>
//                             <td>{el.sub1}</td>
//                             <td>{el.sub2}</td>
//                             <td>{el.sub3}</td>
//                             <td><button onClick={() => { deletedata(i) }}>delete</button></td>
//                             <td><button onClick={() => { updatedata(el, i) }}>update</button></td>
//                         </tr>
//                     ))
//                 }
//             </table>
//         </div>
//     )
// }

// export default Remo
