import Image from "next/image"
import fineDining from '@/public/images/fineDiningImg.png'
import italian from '@/public/images/italianImg.png'
import restaurant from '@/public/images/restaurantImg.png'
import monal from '@/public/images/monalImg.png'
import cafe from '@/public/images/cafeImg.png'
import asianFusion from '@/public/images/asianFusionImg.png'
import cafe2 from '@/public/images/cafe2Img.png'
import hotel from '@/public/images/hotelImg.png'


function Venue() {
    const images = [
        {src: monal, label: "FINE DINING", location: "Monal"},
        {src: italian, label: "ITALIAN", location: "Tuscany Courtyard"},
        {src: restaurant, label: "RESTAURANT", location: "Cosa Nostra"},
        {src: fineDining, label: "FINE DINING", location: "Xanders"},
        {src: cafe, label: "CAFÉ", location: "Arcadian Café"},
        {src: asianFusion, label: "ASIAN FUSION", location: "Jade Restaurant"},
        {src: cafe2, label: "CAFÉ", location: "The Pantry"},
        {src: hotel, label: "HOTEL & DINING", location: "Avari Towers"}
    ]
return (
    <>
    <div className='bg-transparent py-26 md:py-30'>
        <div className="flex md:justify-between md:items-center px-6 md:px-6">
            <h2 className="text-4xl font-cormorant">Featured Venues</h2>
            <p className="hidden md:block text-[#AFAFAF] text-sm text-center leading-relaxed tracking-wide">More venues joining every week</p>
        </div>

    <div className="overflow-x-auto scroll-smooth hide-scrollbar mt-10 px-6">

    <div className="flex gap-4 w-max">

    {images.map((img, i) => (
        <div key={i} className="shrink-0">

        <div className="relative w-72 h-48 overflow-hidden group">

        <Image
            src={img.src}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 cursor-pointer"
        />

        <div className="absolute top-2 right-2 bg-[#0E0906]/85 text-[#AFAFAF] text-[10px] px-2 py-2 tracking-widest z-10">
            {img.label}
        </div>

        </div>

        <div className="mt-2 text-sm tracking-widest font-cormorant text-[#C1A253]">
            {img.location}
        </div>

        </div>
    ))}

    </div>

</div>


    </div>
    </>
    )
}
export default Venue
