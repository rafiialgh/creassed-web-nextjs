import Card from "./card";
import images from "../../public/images/index";

export default function Product() {
  return (
    <>
      <div className="flex mb-20 justify-evenly">
        <div className="grid grid-cols-2 gap-5 sm:gap-7 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-16 min-[1667px]:gap-18 min-[1920px]:gap-28">
          <Card
            src={images.tumblr} 
            width={500}
            height={500}
            alt="Tumblr"
            name="Tumblr"
            price="200.000"
          />
          <Card 
            src={images.keychain}
            width={500}
            height={500}
            alt="Keychain"
            name="Keychain"
            price="100.000"
          />
          <Card 
            src={images.hat}
            width={500}
            height={500}
            alt="Hat"
            name="Hat"
            price="200.000"
          />
          <Card 
            src={images.backpack}
            width={500}
            height={500}
            alt="Backpack"
            name="Backpack"
            price="200.000"
          />
          <Card 
            src={images.backpack_2}
            width={1000}
            height={1000}
            alt="Backpack"
            name="Backpack"
            price="200.000"
          />
          <Card 
            src={images.jeans}
            width={1000}
            height={1000}
            alt="Jeans"
            name="Jeans"
            price="400.000"
          />
          <Card 
            src={images.tee}
            width={500}
            height={500}
            alt="Short Tee"
            name="Short Tee"
            price="200.000"
          />
          <Card 
            src={images.totebag}
            width={500}
            height={500}
            alt="Totebag"
            name="Totebag"
            price="200.000"
          />
        </div>
      </div>
    </>
  );
}
