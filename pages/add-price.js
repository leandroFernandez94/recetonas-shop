import { useRef } from "react"
import { makePutRequest } from "../utils/fetch"

export default function addPrice() {

  const section = useRef()
  const name = useRef()
  const price = useRef()
  const specialPrice = useRef()
  const quantity = useRef()
  
  function getValues() {
    return {
      section: section.current.value,
      name: name.current.value,
      price: price.current.value,
      specialPrice: specialPrice.current.value,
      quantity: quantity.current.value
    }
  }

  async function submitForm(e) {
    e.preventDefault()
    const values = getValues()

    makePutRequest('/api/post-price', values)
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>section: </label>
        <input required ref={section}></input> 
      </div>
      <div>
        <label>Nombre: </label>
        <input required ref={name}></input> 
      </div>
      <div>
        <label>Precio: </label>
        <input required ref={price}></input> 
      </div>
      <div>
        <label>Precio especial: </label>
        <input ref={specialPrice}></input> 
      </div>
      <div>
        <label>Cantidad: </label>
        <input ref={quantity}></input> 
      </div>
      <button type="submit">Crear</button>
    </form>
  )
}