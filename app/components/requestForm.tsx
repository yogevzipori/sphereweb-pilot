import { Form } from "./contactForm/Form";

/* eslint-disable react/no-unescaped-entities */
export default function ContactForm() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-8 px-6 lg:py-12 lg:px-16 mt-24">
          <div className="rounded-3xl bg-[#968FA6] py-10 px-6 sm:py-4 sm:px-12 lg:flex lg:items-center lg:p-10">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              
                Let us know you're interested.
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-900">
              Embarking on your remodeling journey has never been easier! Share your name and contact number with us, and our Sphere Remodeling team will swiftly reach out to you. Together, let's breathe new life into your home or commercial space. The first step towards your dream transformation is just a click away!
              </p>
              <Form />
            </div>
            
{/*             
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border-[#1E2612] px-5 py-3 placeholder-[#1E2612] focus:outline-none focus:ring-2 focus:ring-[#1E2612] focus:ring-offset-2 focus:ring-offset-[#F2ECE4]"
                  placeholder="Name"
                />
       
              </form> */}
              <p className="mt-3 text-sm text-[#1E2612]">
                {/* We care about the protection of your data. Read our{" "} */}
                <a href="#" className="font-medium text-bw underline">
                  {/* Privacy Policy. */}
                </a>
              </p>

{/* 
              
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="w-full rounded-md border-[#1E2612] px-5 py-3 placeholder-[#1E2612] focus:outline-none focus:ring-2 focus:ring-[#1E2612] focus:ring-offset-2 focus:ring-offset-[#F2ECE4]"
                  placeholder="Phone Number"
                />
                
                
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[#1E2612] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1E2612] focus:ring-offset-2 focus:ring-offset-slate-100 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>

      </div> */}


</div>
          </div>
        </div>



    );
  }
  