export default function Border() {
    return (
      <div className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Ready to Schedule? 
            <br />
            We Offer a Free Consulting at Your Home!
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="#"
              className="rounded-md bg-[#968FA6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0B0D40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Call us Today
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-slate-900">
              Learn More About Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  