import React from 'react'

const LocalUse = () => {

    const st = localStorage.getItem('el')
    console.log(st);
  return (
    <div>
       <table>
        <tr>
            <td>{st.name}</td>
            <td>{st.surname}</td>
        </tr>
       </table>
    </div>
  )
}

export default LocalUse
