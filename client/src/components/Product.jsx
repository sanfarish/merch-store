import sample from '../assets/sample.png';

function Product() {
  return (
    <section className='absolute h-screen w-screen flex'>
      <div className='bg-gray-500 m-auto w-2xl h-full relative flex flex-col justify-center items-center gap-4'>
        <input className='bg-red-500 absolute top-5 right-5 px-2' type="button" value="X" />
        <div className='flex gap-2 items-center'>
          <input className='bg-gray-700 text-3xl px-2 rounded-4xl' type="button" value="<" />
          <img className='w-sm' src={sample} alt="sample" />
          <input className='bg-gray-700 text-3xl px-2 rounded-4xl' type="button" value=">" />
        </div>
        <h2 className='text-2xl'>Product Name</h2>
        <h3 className='text-xl'>$10.00</h3>
        <div className='flex gap-2'>
          <p>Size:</p>
          <div>
            <select className='bg-gray-300'>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        <input className='text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 py-2 px-4 rounded' type="button" value="Add to Cart" />
      </div>
    </section>
  )
}

export default Product
