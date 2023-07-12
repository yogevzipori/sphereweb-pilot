"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Bathroom1 from "../public/las-vegas-bathroom-remodeling-1.jpg";
import Kitchen1 from "../public/las-vegas-kitchen-remodeling-1.jpg";
import HomeRemodel1 from "../public/las-vegas-henderson-home-remodel.jpg";
import HomeRenovation1 from "../public/home-renovation-las-vegas-henderson-1.jpg";

import FullHomeRenovation from "/public/full-home-remodeling-renovation-las-vegas-henderson.jpg";
import BestContractor from "/public/best-remodeling-contractor-las-vegas.jpg";
import Cover from "./components/cover";
import Border from "./components/border";
import type { NextPage } from "next";
import HomePageGallery from "./components/gallery/homepage";
import ContactForm from "./components/requestForm";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

let myImage: StaticImageData | undefined;

const posts = [
  {
    id: 1 as number,
    title: "Home Remodeling" as string,
    description:
      "Sphere Remodeling, your home transformation partner in Las Vegas and Henderson. We reimagine, redesign, and recreate your living spaces, delivering a seamless blend of style, functionality, and quality. Embrace the dream home experience with our comprehensive home remodels." as string,
    href: "#" as string,
    image: HomeRemodel1 as StaticImageData,
  },

  {
    id: 2 as number,
    title: "Kitchen Remodeling" as string,

    description:
      "Sphere Remodeling, your premier expert in Las Vegas and Henderson for outstanding kitchen remodels. We revitalize your kitchens into stunning, efficient spaces, tailored to your lifestyle. Excellence in design, craftsmanship, and finish, delivering your dream kitchen in every project." as string,
    href: "/kitchen-remodeling-las-vegas-henderson" as string,
    image: Kitchen1 as StaticImageData,
  },

  {
    id: 3 as number,
    title: "Bathroom Remodeling" as string,

    description:
      "Sphere Remodeling, your prime service provider in Las Vegas and Henderson for exceptional bathroom remodels. We transform your bathrooms into elegant, functional spaces, personalized to your taste. Expect flawless execution, top-tier materials, and a luxury finish every time." as string,

    href: "/bathroom-remodeling-las-vegas-henderson" as string,
    image: Bathroom1 as StaticImageData,
  },

  {
    id: 4 as number,
    title: "Drywall" as string,
    description:
      "Sphere Remodeling, your premier choice in Las Vegas and Henderson for impeccable drywall installations. We deliver durable, smooth surfaces, executed with precision and tailored to your needs. Expect excellence and professionalism in every project." as string,

    href: "#" as string,
    image: Bathroom1 as StaticImageData,
  },

  {
    id: 5 as number,
    title: "Flooring" as string,

    description:
      "Sphere Remodeling, your trusted partner in Las Vegas and Henderson for precision flooring installations. We provide a range of durable and stylish flooring options, expertly fitted for a seamless, lasting finish. Quality service tailored to your preferences and executed to the highest standards." as string,

    href: "#" as string,
    image: Bathroom1 as StaticImageData,
  },

  {
    id: 6 as number,
    title: "Garage Conversion" as string,

    description:
      "Sphere Remodeling, your go-to in Las Vegas and Henderson for seamless garage conversions. We repurpose your garage, creating functional, livable spaces. A cost-effective solution to home expansion." as string,

    href: "#" as string,
    image: Bathroom1 as StaticImageData,
  },
];

const incentives = [
  {
    name: "Free Estimates",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "Warranty on Every Project ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Top Quality Materials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

export default function Home() {
  return (
    <div>
      <Cover />
      <div className="bg-[#C5CCD9] mx-4">
        <div className=" mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none ">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 ">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Sphere Remodeling: Transforming Las Vegas Homes and Commercial
                  Spaces with Expert Craftsmanship
                </h1>
                <p className="mt-4 text-slate-900 text-md tracking-tight ">
                  At Sphere Remodeling, we believe that your home should be a
                  reflection of your unique personality and style. Located in
                  the heart of Las Vegas and serving the surrounding Henderson
                  area, we specialize in transforming ordinary homes into
                  extraordinary living spaces. With over 25 years of combined
                  experience, our owners ensure every project is handled with
                  the utmost professionalism, care, and attention to detail.
                </p>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={HomeRenovation1}
                  alt="Description"
                  className="object-cover object-center"
                  width={500}
                  height={400}
                />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="h-16 w-16"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-sm font-medium text-slate-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-900 tracking-tight">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                We are a full-service residential design and remodeling service
              </h2>
              <p className="mt-2 text-lg tracking-tight text-slate-900">
                Our founders, who boast over 25 years of combined experience in
                residential and commercial renovations, personally oversee every
                project.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between"
                >
                  <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="relative w-full ">
                      {post.image && (
                        <Image
                          src={post.image}
                          alt="Description"
                          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                          width={300}
                          height={200}
                        />
                      )}

                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs"></div>
                      <div className="group relative">
                        <h3 className=" mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>





                  <Border />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-md font-semibold leading-7 text-slate-900">
                  We Put Customers First
                </h2>
                <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  If you can dream it - we can build it
                </p>
                <p className="mt-6 text-md tracking-tight text-slate-900">
                  With us, you're not just getting a contractor, you're
                  partnering with experienced professionals who take pride in
                  their work. From meticulous insulation installation that
                  optimizes your home's energy efficiency to artful drywall work
                  and overhead door installation, we're committed to exceeding
                  your expectations.
                </p>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex rounded-md bg-[#968FA6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0B0D40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get a Free Quote
                  </a>
                </div>
                <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                  <blockquote className="text-base leading-7">
                    <p></p>
                  </blockquote>
                </figure>
              </div>
            </div>
            <Image
              src={BestContractor}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>


      <HomePageGallery />


            <ContactForm />
    </div>
  );
}
