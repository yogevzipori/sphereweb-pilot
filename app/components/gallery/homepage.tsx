import Link from "next/link";
import Image from "next/image";
import Bathroom1 from "/public/las-vegas-bathroom-remodeling-1.jpg";
import Kitchen1 from "/public/las-vegas-kitchen-remodeling-1.jpg";
import HomeRemodel1 from "/public/las-vegas-henderson-home-remodel.jpg";
import HomeRenovation1 from "../public/home-renovation-las-vegas-henderson-1.jpg";

import FullHomeRenovation from "/public/full-home-remodeling-renovation-las-vegas-henderson.jpg";

function HomePageGallery() {
  return (
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:hidden">
      <div className="flex justify-center">
        <Image
          className="h-auto max-w-full rounded-lg"
          src={Bathroom1}
          alt=""
          width={600}
          height={600}
        />
      </div>
      <div className="flex justify-center">
        <Image
          className="h-auto max-w-full rounded-lg"
          src={Bathroom1}
          alt=""
          width={600}
          height={600}
        />
      </div>
      <div className="flex justify-center">
        <Image
          className="h-auto max-w-full rounded-lg "
          src={Bathroom1}
          alt=""
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

export default HomePageGallery;
