import React from 'react'

export default function Product() {
  const product=[
    ['p1.jpg','ProductName1','Detail1'],
    ['p1.jpg','ProductName2','Detail2'],
    ['p1.jpg','ProductName3','Detail3'],
    ['p1.jpg','ProductName4','Detail4'],
    ['p1.jpg','ProductName5','Detail5']
]
  return (
    <div className="container mt-5">
    <center>
<h3 >PRODUCTS</h3>
<hr></hr>
</center>
    <div className="row">
       
    {
            product.map(item => {
                return(
        <div className="col-sm-3">      
   <div class="card" >
  <img src="./images/p1.jpg" class="card-img-top" width="50"/>
  <div class="card-body">
    <h5 class="card-title">{item[1]}</h5>
    <p class="card-text">{item[2]}</p>
    <a href="#" class="btn btn-primary">More Deatil</a>
  </div>
</div>
 </div>
   )
  } 
  )
  }

   </div>
</div>
  )
}
