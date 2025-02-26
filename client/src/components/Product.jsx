import sample from '../assets/sample.png';
import useData from '../hooks/useData';

function Product({ item }) {
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct, modal, setModal] = useData()

  return (
    <section className='absolute h-full w-full flex'>
      <div className='bg-gray-500 m-auto h-full relative flex flex-col justify-center items-center gap-4'>
        <input className='bg-red-500 absolute top-5 right-5 px-2' type="button" value="X" onClick={() => setModal(!modal)} />
        <div className='bg-orange-500 flex gap-2 items-center justify-center'>
          <input className='bg-gray-700 text-3xl px-2 rounded-4xl' type="button" value="<" />
          <img className='w-sm' src={sample} alt="sample" />
          <input className='bg-gray-700 text-3xl px-2 rounded-4xl' type="button" value=">" />
        </div>
        <h2 className='text-2xl'>{item.name}</h2>
        <h3 className='text-xl'>${item.price}.00</h3>
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
