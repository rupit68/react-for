import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocalUse = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    demo()
  }, [])
  function demo() {
    axios.get('https://service.apikeeda.com/nutri-food', {
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MjAwMDc2NDM3ODYtODE1MzMxMzM4IiwiaWF0IjoxNzIwMDA3NjQzLCJleHAiOjE3MjAxODA0NDN9.lzCotiaMADajc4TqoFs77I9KrK2GasvM2RYwGpT4qXA"
      }
    })
      .then((res) => {
        setdata(res.data.data)
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <>
      <table border={1}>
        <tr>
          <td>_id</td>
          <td>productName</td>
          <td>weight</td>
          <td>energy</td>
          <td>protine</td>
          <td>carbohydrate</td>
          <td>fat</td>
          <td>__v</td>
        </tr>
        {
          data.map((el, i) => (
            <tr>
              <td>{el._id}</td>
              <td>{el.productName}</td>
              <td>{el.weight}</td>
              <td>{el.energy}</td>
              <td>{el.protine}</td>
              <td>{el.carbohydrate}</td>
              <td>{el.fat}</td>
              <td>{el.__v}</td>
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default LocalUse
