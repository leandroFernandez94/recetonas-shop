import { makePutRequest } from "../utils/fetch"

function postDefaultPricesButton() {
  
  async function handlePostDefaultPrices() {
    const res = await makePutRequest('/api/post-default-prices')
  }

  return (
    <button onClick={handlePostDefaultPrices}>
      Post default prices
      <style jsx>{`
        button {
          position: absolute;
          bottom: 0;
          right: 0
        }  
      `}</style>
    </button>  
  )
}

export default postDefaultPricesButton