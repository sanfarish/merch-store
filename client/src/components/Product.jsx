import useOpen from "../hooks/useOpen"
import useDetail from "../hooks/useDetail"

function Product() {
  const { setOpen } = useOpen()
  const { detail } = useDetail()

  function handleClose() {
    setOpen(prev => {
      return { ...prev, product: !prev.product }
    })
  }

  return (
    <section className="mx-5 sm:mx-24 xl:mx-40 py-2 sm:py-10 flex flex-col gap-4">
      <input className="mr-auto px-2 border-1 border-gray-400 hover:border-black active:bg-black active:text-white cursor-pointer" type="button" value="< Back to Shop" onClick={handleClose} />
      <div className="h-full flex flex-col items-center lg:items-stretch">
        <div className="h-full flex flex-col lg:flex-row gap-4">
          <img className="w-sm sm:w-md xl:w-xl" src={detail.image} alt={detail.name} />
          <div className="grow flex flex-col justify-between mt-2">
            <div className="flex flex-col gap-2">
              <span className="text-2xl">{detail.name}</span>
              <span className="text-xl">{"$ " + Number(detail.price).toFixed(2)}</span>
              <div className="flex items-center gap-2">
                <span className="">Size:</span>
                <label htmlFor="small-size">
                  <input className="hidden peer" type="radio" name="size" id="small-size" value="small" defaultChecked required />
                  <span className="flex items-center justify-center px-3 py-1 peer-checked:bg-orange-400 text-gray-600 peer-checked:text-black border-1 border-gray-500 peer-checked:border-black cursor-pointer">S</span>
                </label>
                <label htmlFor="medium-size">
                  <input className="hidden peer" type="radio" name="size" id="medium-size" value="medium" />
                  <span className="flex items-center justify-center px-3 py-1 peer-checked:bg-orange-400 text-gray-600 peer-checked:text-black border-1 border-gray-500 peer-checked:border-black cursor-pointer">M</span>
                </label>
                <label htmlFor="large-size">
                  <input className="hidden peer" type="radio" name="size" id="large-size" value="large" />
                  <span className="flex items-center justify-center px-3 py-1 peer-checked:bg-orange-400 text-gray-600 peer-checked:text-black border-1 border-gray-500 peer-checked:border-black cursor-pointer">L</span>
                </label>
              </div>
            </div>
            <input className="bg-orange-700 hover:bg-orange-600 active:bg-orange-800 text-white mt-12 mx-6 mb-2 py-2 rounded text-xl cursor-pointer" type="button" value="Add to Cart" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
