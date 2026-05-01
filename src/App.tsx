import { useState } from 'react'
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
  NavbarLogo,
} from './components/ui/resizable-navbar'

const processSteps = [
  'Customer Inquiry',
  'Free Site Visit',
  'Deal Finalization',
  'Payment Option (Cash / Loan)',
  'Panel Selection (Tata / Adani / Waaree)',
  'Installation',
  'Net Meter Installation',
  'Start Using Solar Energy',
]

const benefits = [
  'Save up to 80% on electricity bills',
  '3kW system handles ~450 units/month',
  'Low maintenance and long-term reliability',
  '25+ years expected panel lifespan',
  'Eco-friendly and future-ready energy',
]

const brands = ['Tata Power Solar', 'Adani Solar', 'Waaree Energies']

const testimonials = [
  {
    name: 'Rakesh Sharma',
    location: 'Jaipur, Rajasthan',
    review: 'My electricity bill reduced from 4000 rupees to almost zero.',
  },
  {
    name: 'Pooja Verma',
    location: 'Indore, Madhya Pradesh',
    review: 'The team handled installation and subsidy process very smoothly.',
  },
  {
    name: 'Amit Patel',
    location: 'Surat, Gujarat',
    review: 'From site visit to meter installation, everything was transparent.',
  },
]

function App() {
  const navItems = [
    { name: 'Features', link: '#features' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'Contact', link: '#contact' },
  ]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-slate-700 transition hover:text-solar-blue-700"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-3">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="secondary" className="w-full">
                Login
              </NavbarButton>
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="pt-20 text-slate-900">
      <section id="features" className="bg-linear-to-r from-solar-blue-900 to-solar-blue-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 inline-block rounded-full bg-solar-yellow-300 px-4 py-1 text-sm font-semibold text-solar-blue-900">
            Trusted Residential Solar Partner
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Save Your Electricity Bills with Solar Energy
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-blue-100">
            Install high-quality solar panels with trusted brands like Tata Power Solar, Adani Solar, and Waaree Energies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-full bg-solar-yellow-400 px-7 py-3 font-semibold text-solar-blue-900 transition hover:bg-solar-yellow-300"
            >
              Get Free Site Visit
            </button>
            <button
              type="button"
              className="rounded-full border border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-solar-blue-900 md:text-4xl">How It Works</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          A simple, transparent process designed for homeowners who want clean energy without confusion.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-xl border border-solar-blue-100 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-solar-orange-600">Step {index + 1}</p>
              <p className="mt-1 font-medium text-slate-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <article className="rounded-2xl border border-solar-orange-100 bg-solar-orange-100/40 p-8">
            <h3 className="text-2xl font-bold text-solar-blue-900">Pricing</h3>
            <p className="mt-3 text-slate-700">Starting from 1.90 Lakhs (depends on site and requirements).</p>
            <p className="mt-3 text-slate-700">Example: 3kW system is suitable for around 450 units per month usage.</p>
            <button
              type="button"
              className="mt-6 rounded-full bg-solar-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-solar-orange-600"
            >
              Get Exact Quote
            </button>
          </article>

          <article className="rounded-2xl border border-solar-blue-100 bg-solar-blue-50 p-8">
            <h3 className="text-2xl font-bold text-solar-blue-900">Government Subsidy</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>30,000 rupees per kW (up to 2 kW)</li>
              <li>18,000 rupees per kW (for additional capacity up to 3 kW)</li>
              <li>Maximum subsidy: 78,000 rupees</li>
            </ul>
            <p className="mt-4 font-medium text-solar-blue-900">We handle the subsidy process for you.</p>
            <button
              type="button"
              className="mt-6 rounded-full bg-solar-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-solar-blue-700"
            >
              Check Eligibility
            </button>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-solar-blue-900 md:text-4xl">Why Choose Solar</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="font-medium text-slate-800">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-solar-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">Brands We Work With</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-xl border border-white/20 bg-white/10 p-6 text-center font-semibold"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-solar-blue-900 md:text-4xl">Our Installations</h2>
        <p className="mt-3 text-slate-600">Showcase area for before/after photos, location badges, and happy customer moments.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['Rooftop Setup', 'Before vs After', 'Happy Customer'].map((item) => (
            <div
              key={item}
              className="flex min-h-40 items-center justify-center rounded-xl border-2 border-dashed border-solar-orange-500/50 bg-white p-6 text-center font-medium text-solar-blue-900"
            >
              {item} Photo Placeholder
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-solar-blue-900 md:text-4xl">Testimonials</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-xl bg-solar-blue-50 p-6 ring-1 ring-solar-blue-100">
                <p className="text-slate-700">"{testimonial.review}"</p>
                <p className="mt-4 font-semibold text-solar-blue-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-solar-orange-100/60 p-8">
            <h3 className="text-2xl font-bold text-solar-blue-900">Payment Options</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Cash Payment</li>
              <li>Loan Available with Partner Banks</li>
              <li>Easy EMI options available</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-solar-blue-50 p-8">
            <h3 className="text-2xl font-bold text-solar-blue-900">Contact Us</h3>
            <p className="mt-3 text-slate-700">Phone: +91 98765 43210</p>
            <p className="text-slate-700">WhatsApp: +91 98765 43210</p>
            <form className="mt-5 space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-solar-blue-600"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-solar-blue-600"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-solar-blue-600"
              />
              <button
                type="button"
                className="w-full rounded-full bg-solar-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-solar-blue-700"
              >
                Request Callback
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="bg-linear-to-r from-solar-orange-500 to-solar-yellow-400">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-3xl font-bold text-solar-blue-900 md:text-4xl">
            Book Your Free Site Visit Today
          </h2>
          <p className="mt-3 text-solar-blue-900/90">
            Switch to solar now and start saving from the very first month.
          </p>
          <button
            type="button"
            className="mt-6 rounded-full bg-solar-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-solar-blue-700"
          >
            Book Free Site Visit
          </button>
        </div>
      </section>
      </main>
    </div>
  )
}

export default App
