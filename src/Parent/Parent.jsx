import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
state={products:[
{id:1,name:"nokia",price:5000,onSale:false,count:19},
{id:2,name:"iphone8",price:8000,onSale:true,count:19},
{id:3,name:"samsung",price:6000,onSale:false,count:19},
{id:4,name:"oppo",price:7000,onSale:true,count:19},
{id:5,name:"iphone11",price:10000,onSale:false,count:19},
{id:6,name:"oppo2",price:2000,onSale:true,count:19},
{id:7,name:"nokia2",price:3000,onSale:false,count:19},
{id:8,name:"samsungSe",price:4000,onSale:true,count:19},
]
}

increment =(index)=>{
    let products =[...this.state.products]
    products[index].count++;
    this.setState({products})

}
decrement =(index)=>{
    let products =[...this.state.products]
    products[index].count--;
    this.setState({products})

}
deleteProduct=(indexxx)=>{
    let products =[...this.state.products]
    products.splice(indexxx,1)
    this.setState({products})
}
  render() {
    return (<>
    <div className="container">
        <div className="row g-3">
            {this.state.products.map((el,i)=>{
return <Child  delete={this.deleteProduct} productData={el} index={i} add={this.increment} minus={this.decrement} />
            })}

        </div>
    </div>
    </>
    )
  }
}
