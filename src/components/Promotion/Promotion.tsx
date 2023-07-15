import ProductCard from "../ProductCard"
 import P10 from "/public/P10.png"
import P8 from "/public/p8.png"
const Promotion = () => {
  return (
    <div>
        <h1 className="text-center font-extrabold text-blue-800 mb-6">PROMOTIONS</h1>
  <h1 className="text-center text-black text-3xl font-extrabold mb-16">Our Promotions Events</h1>
  <div className="flex gap-2">
  <ProductCard title="" price={""} img={P10} />
  <ProductCard title="" price={""} img={P8} />
  </div>
    </div>

  )
}

export default Promotion