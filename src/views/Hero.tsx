
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import heroImage from "/public/headerpic.webp"
import { ShoppingCart } from "lucide-react"
import Image from 'next/image'



const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 px-8 py-6'>
        {/* Left Div */}
        <div className='flex-1'>
        <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700'  >Sale 70%</Badge>
        
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
        An Industrial Take on Streetwear
  </h1>
  <p className="leading-7 [&:not(:first-child)]:mt-6">
  Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>
      <Button>
    <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
    </Button>
        </div>
        

        <div className='flex-1 w-650 h-650 bg-red-50 rounded-full bg-center'>
{/* Right Div */}
<Image src={heroImage} alt='hero'>
        
        </Image>
        </div>

    </section>
  )
}

export default Hero