
import Image from 'next/image'


function ProductCard(props:{title:string, price: string, img:any}) {
  const title = props.title
  const price = props.price
  const P1 = props.img

  return (
    <div className=' hover:group-autofill:' >
    
        <Image src={P1} className='w-80 h-80' alt='hero'>
        </Image>
        <h3 className="font-blod text-lg mt-3">{title} </h3>
        <p className="font blod text-lg">{price}</p>
    </div>
    
  )
}

export default ProductCard