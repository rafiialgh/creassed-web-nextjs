import Image from "next/image";

const Card = ({ src, height, width, alt, name, price,...props }) => (
  <>
    <div class="container max-w-fit">
      <div class="h-44 aspect-[3/4] overflow-hidden min-[370px]:h-52 min-[500px]:h-64 sm:h-72 md:h-96 xl:h-[370px] min-[1441px]:h-96 min-[1667px]:h-[450px] min-[1920px]:h-[470px]">
        <div class="object-cover h-full w-full">
          <a href="#">
            <Image
            {...props}
            src={src}
            alt="Vercel Logo"
            className="object-cover w-full h-full"
            width={width}
            height={height}
            priority
          />
          </a>
          
        </div>
      </div>
      <div class="mt-2 max-w-fit">
        <h6 class="text-sm text-slate-600">{name}</h6>
        <p class="text-xs text-slate-400">{price}</p>
      </div>
    </div>
  </>
);

export default Card