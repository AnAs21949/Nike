import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <section
    id="about-us"
    className="flex justify-between item-center max-lg:flex-col 
    gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          we provide you 
          <span className="text-coral-red"></span>
          <br />
          <span className="text-coral-red ">
            Super
          </span>
          <span className="text-coral-red ">
            Quality
          </span> Shoes 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error exercitationem optio minus, iusto beatae nesciunt magnam ad molestiae magni necessitatibus tempora corporis non incidunt iste.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatem!</p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>

      </div>
      <div className="flex-1 flex justify-center items-center">
        <img className="object-contain"
          src={shoe8} 
          alt="shoe8"
          width={570}
          height={522}
          />
      </div>
    </section>
  )
}
