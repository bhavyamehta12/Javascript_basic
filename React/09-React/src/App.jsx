import React from 'react'
import Button from '@mui/material/Button'
import { useState } from 'react';

const App = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  function handleOpenAdd(){
    setOpenAdd(true)
  }
  function handleCloseAdd(){
    setOpenAdd(false)
  }
  function handleOpenDelete(){
    selectedProduct(true)
    setOpenDelete(true)
  }
  function handleCloseDelete(){
    setOpenDelete(false)
    selectedProduct(null)
  }
  function handleOpenEdit(){
    selectedProduct(true)
    setOpenEdit(true)
  }
  function handleCloseEdit(){
    setOpenEdit(false)
    selectedProduct(null)
  }
  function handleAddProduct(){
    const newProduct = {
      id:Date.now(),
      title:title,
      price:price
    }
    setProducts([...products],newProduct)
    handleCloseAdd()
  }
  function handleDeleteProduct(){
    if(!selectedProduct) return;
    const filterProduct = products.filter((product)=>product.id!==selectedProduct.id)
    setProducts(filterProduct)
  }
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h1>My Products</h1>
        <Button variant="contained">Add Products</Button>
      </div>
      <div>
        {products.map((product)=>{
          return(
            <div key={product.id} style={{display:"flex",justifyContent:"space-between"}}>
              <h1>{product.name} <p>{product.price}</p></h1>
              <Button variant="outlined">Delete</Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App 
