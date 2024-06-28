
// import { Field, Form, Formik} from 'formik';
import './App.css';
import Remo from './Remo';
// import { useState } from 'react';


function App() {
  // const [data, setdata] = useState([])
  // const [id, setid] = useState(null)
  // const [inivalue, setinivalue] = useState({
  //   name: '',
  //   surname: ''
  // })

  // const handel = (values, { resetForm }) => {
  //   if (id !== null) {
  //     let copy = [...data]
  //     copy[id] = values
  //     setdata(copy)
  //     setid(null)
  //   }
  //   else {
  //     setdata([...data, values])
  //     resetForm()
  //   }
  //   setinivalue({
  //     name:'',
  //     surname:''
  //   })
  // }
  // const deletedata = (index) => {
  //   let copy = [...data]
  //   copy.splice(index, 1)
  //   setdata(copy)
  // }
  // const updatedata = (item, index) => {
  //   setinivalue({
  //     'name': item.name,
  //     'surname': item.surname
  //   })
  //   setid(index)

  // }
  return (
    <div className="App">
      {/* <Formik
       enableReinitialize
        initialValues={inivalue}
        onSubmit={handel}
      >
        <Form>
          name:-<Field name="name" type="text" /><br />
          surname:-<Field name="surname" type="text" /><br />
          submit:- <button type='submit'>submit</button>
        </Form>
      </Formik>
      <table border={1}>
        <tr>
          <td>name</td>
          <td>surname</td>
          <td>delete</td>
          <td>update</td>
        </tr>
        {
          data.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td><button onClick={() => { deletedata(index) }}>delete</button></td>
              <td><button onClick={() => { updatedata(item, index) }}>update</button></td>
            </tr>
          ))
        }
      </table> */}
      <Remo>  </Remo>
    </div>
  );
}

export default App;
