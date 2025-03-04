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
    <section className="flex flex-col mx-5 py-2 gap-2">
      <input className="mr-auto px-2 border-1 border-gray-400 cursor-pointer" type="button" value="< Back to Shop" onClick={handleClose} />
      <div className="h-full flex flex-col items-center">
        <div className="h-full flex flex-col">
          <img className="" src={detail.image} alt={detail.name} />
          {/* <div className="bg-amber-500 flex items-center justify-center">
          </div> */}
          <div className="grow flex flex-col justify-between mt-2">
            <div className="flex flex-col gap-2">
              <span className="text-2xl">{detail.name}</span>
              <span className="text-xl">{"$ " + Number(detail.price).toFixed(2)}</span>
              <span className="">Category:</span>
            </div>
            <input className="bg-violet-500 mt-12 mx-6 py-2 rounded text-xl cursor-pointer" type="button" value="Add to Cart" />
          </div>
        </div>
      </div>
    </section>
    // <section className='mx-5 sm:mx-24 xl:mx-40 py-5 sm:py-10 flex flex-col min-h-full gap-4'>
    //   <input className='mr-auto px-2 border-gray-400 border-1 cursor-pointer' type="button" value="< Back to Shop" onClick={handleClose} />
    //   <div className="bg-red-400 flex flex-col sm:h-full sm:flex-row items-center gap-4">
    //     <img className="object-scale-down grow-0 shrink" src={detail.image} alt="sample" />
    //     <div className="bg-blue-500 grow shrink-0 flex flex-col justify-between p-4 w-full sm:w-auto">
    //       <div className="flex flex-col gap-2">
    //         <span className='text-2xl'>{detail.name}</span>
    //         <span className='text-xl'>{"$ " + Number(detail.price).toFixed(2)}</span>
    //         <div className='flex flex-col'>
    //           <span>Size:</span>
    //           <div className='flex gap-2'>
    //             <label>
    //               <input type="radio" name="size" value="small" className="hidden peer" defaultChecked required/>
    //               <span className="flex items-center justify-center px-4 py-2 peer-checked:bg-orange-400 text-gray-600 peer-checked:text-black border-1 border-gray-500 peer-checked:border-black cursor-pointer">S</span>
    //             </label>
    //             <label>
    //               <input type="radio" name="size" value="medium" className='hidden peer' />
    //               <span className="flex items-center justify-center px-4 py-2 peer-checked:bg-orange-400 text-gray-600 peer-checked:text-black border-1 border-gray-500 peer-checked:border-black cursor-pointer">M</span>
    //             </label>
    //             <label>
    //               <input type="radio" name="size" value="large" className='hidden peer' />
    //               <span className="flex items-center justify-center px-4 py-2 peer-checked:bg-orange-400 text-gray-600 peer-checked:text-black border-1 border-gray-500 peer-checked:border-black cursor-pointer">L</span>
    //             </label>
    //           </div>
    //         </div>
    //       </div>
    //       <input className='text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-xl mx-4 sm:mx-10 mt-4 py-2 px-4 rounded cursor-pointer' type="button" value="Add to Cart" />
    //     </div>
    //   </div>
    //   {/* <div className='bg-gray-500 m-auto h-full relative flex flex-col justify-center items-center gap-4'>
    //   </div> */}
    // </section>
  )
}

export default Product
