import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    let {name,price,count,id,inSale}=this.props.productData
    return (<>
    <div className="col-md-3">
        <div className="bg-dark text-light position-relative p-2 rounded ">
            <h3>name:{name}</h3>
            <h3>Price:{price}</h3>
            <h3>count:{count}</h3>
            <h3>id:{id}</h3>
         {inSale ===true ?   <div className='bg-danger p-2 rounded position-absolute top-0 end-0'>Sale</div> :""}
   <button onClick={()=>{this.props.delete(this.props.index)}} className='btn btn-danger'>Delete Product</button>
    <button onClick={()=>{this.props.add(this.props.index)}} className='btn btn-warning'>+</button>
    <button onClick={()=>{this.props.minus(this.props.index)}} className='btn btn-warning'>-</button> 
        </div>
    </div>
    
    </>

    )
    
  }
}
