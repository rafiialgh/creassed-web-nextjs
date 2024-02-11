import Image from "next/image"
import HeroImg from "../../public/images/Group 3.svg"

export default function Hero() {
  return (
    <div class="relative">
    {/* <img class="bg-cover max-w-full sm:h-auto" src="/assets/Group 3.svg" alt=""> */}
    <Image 
      src={HeroImg}
      alt="Creassed Hero Section"
      width={1920}
      height={100}
      className="max-w-full bg-cover sm:h-auto"
      priority
    />
    <div class="w-full h-full absolute top-0 bg-gradient-to-t from-black opacity-10"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <a href="#_"
        class="relative px-3 py-2 sm:px-5 sm:py-3 overflow-hidden font-medium text-gray-600 bg-white border border-gray-100 rounded-sm group shadow-2xl">
        <span
          class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span
          class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span
          class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span
          class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span
          class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
        <span
          class="relative transition-colors duration-300 delay-200 group-hover:text-white ease tracking-wider text-sm sm:text-base">SHOP
          NOW</span>
      </a>
    </div>
  </div>
  )
}

