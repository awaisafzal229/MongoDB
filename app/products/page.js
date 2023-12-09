import React from 'react'
import "./product.css"
import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';
import { productModel } from '@/model/products';
import Link from 'next/link';

const fetchProducts = async ()=>{
  try {
  const data = await productModel.find()
  console.log("data",data);
  return data
  } catch (error) {
    console.log("Error",error);
  }
}

async function Products() {
    const data = await fetchProducts()
  return (
    <div className="table-container">
      <Link href={'/'}>HOME</Link>
      <br />
      <hr />
      {/* <button>Add product</button> */}
      <Modal title="Create Product"/>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Title</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item._id}>
                <td>{item._id}</td>
                 <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
            
              <td><Modal product={item} isUpdate={true} title="Update"/></td>
              <td><Button id={item._id} title="Delete"/></td>
            </tr>
          ))}

        </tbody>
      
      </table>
    </div>
  )
}

export default Products
