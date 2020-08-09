import { useRef } from "react"

const contentType = 'application/json'

export default function addPrice() {

  const section = useRef()
  const name = useRef()
  const price = useRef()
  const specialPrice = useRef()
  const quantity = useRef()
  
  function getValues() {
    return {
      section: section.current.value,
      name: section.current.value,
      price: price.current.value,
      specialPrice: specialPrice.current.value,
      quantity: quantity.current.value
    }
  }

  async function submitForm(e) {
    e.preventDefault()
    const values = getValues()

    const res = await fetch('/api/post-price', {
      method: 'PUT',
      headers: {
        Accept: contentType,
        'Content-Type': contentType,
      },
      body: JSON.stringify(values),
    })
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>section: </label>
        <input required ref={section} defaultValue="galletitas"></input> 
      </div>
      <div>
        <label>Nombre: </label>
        <input required ref={name} defaultValue="las mejores cookies"></input> 
      </div>
      <div>
        <label>Precio: </label>
        <input required ref={price} defaultValue="400"></input> 
      </div>
      <div>
        <label>Precio especial: </label>
        <input ref={specialPrice} defaultValue="300"></input> 
      </div>
      <div>
        <label>Cantidad: </label>
        <input ref={quantity} defaultValue="8u"></input> 
      </div>
      <button type="submit">Crear</button>
    </form>
  )
}