import React from 'react'

export default function () {
    const data=[
        ['user.png','Name&Surname','Tel'],
        ['user.png','Name&Surname','Tel'],
        ['user.png','Name&Surname','Tel'],
        ['user.png','Name&Surname','Tel'],
        ['user.png','Name&Surname','Tel']
    ]
  return (
    
    <div className="container mt-5">
         <h3 >Member Table</h3>
    <table class="table">
  <thead >
    <tr class="table-dark">
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Detail</th>
    </tr>
  </thead>
  <tbody>
  
           
  {
            data.map(item => {
                return(
        <tr>
            <td><img src='./images/user.png' width='50'/></td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <td><button type="button" class="btn btn-success">Read More</button></td>
        </tr>
        )
        } 
        )
        }
        
        
   
  </tbody>
</table>
</div>
  )
}

