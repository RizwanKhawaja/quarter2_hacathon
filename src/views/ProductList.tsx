import ProductCard from "@/components/ProductCard";
import P1 from "/public/p1.png";
import P2 from "/public/p2.png";
import P3 from "/public/p3.png";
import P4 from "/public/p4.png";
import P5 from "/public/p5.png";
import P6 from "/public/p6.png";
import P7 from "/public/p7.png";
import P8 from "/public/p8.png";
import P9 from "/public/p9.png";
import P10 from "/public/p10.png";
import P11 from "/public/p11.png";

import Image from "next/image";

const productList = () => {
  return (
    <>
  <h1 className="text-center font-extrabold text-blue-800 mb-6">PRODUCTS</h1>
  <h1 className="text-center text-black text-3xl font-extrabold mb-16">Check What We Have</h1>

  <div className="grid grid-cols-4 justify-between px-10">
  <ProductCard title="Brushed Raglan Sweatshirt" price={"$195"} img={P1} />
  <ProductCard title="Cameryn Sash Tie Dress" price={"$545"} img={P2} />
  <ProductCard title="Flex Sweatshirt" price={"$175"} img={P3} />
  <ProductCard title="Pink Fleece Sweatpants" price={"$195"} img={P4} />
  <ProductCard title="Lite Sweatpants" price={"$150"} img={P5} />
  <ProductCard title="Flex Sweatpants" price={"$175"} img={P6} />
 <ProductCard title="Imperial Alpaca Hoodie" price={"$525"} img={P7}/>
 <ProductCard title="Flex Push Button Bomber" price={"$225"} img={P8}/>
 <ProductCard title="Muscle Tank" price={"$75"} img={P9}/>
 <ProductCard title="Brushed Bomber" price={"$225"} img={P10}/>
 <ProductCard title="Raglan Sweatshirt" price={"$195"} img={P11}/>
</div>
    </>
    
  );
};

export default productList;
