import type { ButtonHTMLAttributes, ReactNode } from 'react'

type NavItem = {
  name: string
  link: string
}

type NavbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Navbar({ children }: { children: ReactNode }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/55 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.3)] backdrop-blur-xl supports-backdrop-filter:bg-white/45">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </nav>
  )
}

export function NavBody({ children }: { children: ReactNode }) {
  return <div className="hidden h-20 items-center justify-between md:flex lg:h-24">{children}</div>
}

export function NavItems({ items }: { items: NavItem[] }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/55 px-2 py-1 shadow-sm backdrop-blur-md">
      {items.map((item) => (
        <a
          key={item.link}
          href={item.link}
          className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-solar-blue-700"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

export function MobileNav({ children }: { children: ReactNode }) {
  return <div className="md:hidden">{children}</div>
}

export function NavbarLogo() {
  return (
    <a
      href="#"
      className="text-lg font-extrabold tracking-tight text-solar-blue-900 transition-transform duration-300 hover:scale-[1.02] sm:text-xl"
    >
      Solar<span className="text-solar-orange-500">Panel</span>
    </a>
  )
}

export function NavbarButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: NavbarButtonProps) {
  const baseClass =
    'rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0'
  const variantClass =
    variant === 'primary'
      ? 'bg-linear-to-r from-solar-blue-700 to-solar-blue-600 text-white shadow-sm hover:from-solar-blue-800 hover:to-solar-blue-700'
      : 'border border-white/60 bg-white/65 text-slate-700 backdrop-blur-md hover:bg-white'

  return (
    <button type="button" className={`${baseClass} ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export function MobileNavHeader({ children }: { children: ReactNode }) {
  return <div className="flex h-16 items-center justify-between sm:h-20">{children}</div>
}

export function MobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      className="rounded-lg border border-white/50 bg-white/60 p-2 text-slate-700 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white"
    >
      <span className="block text-xl leading-none transition-transform duration-300">{isOpen ? '✕' : '☰'}</span>
    </button>
  )
}

export function MobileNavMenu({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}) {
  return (
    <div
      className={`grid overflow-hidden transition-all duration-500 ease-out ${
        isOpen ? 'mb-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="min-h-0">
        <div
          className={`rounded-2xl border border-white/40 bg-white/70 p-5 shadow-xl backdrop-blur-xl transition-all duration-500 ease-out ${
            isOpen ? 'translate-y-0' : '-translate-y-3'
          }`}
        >
          <div className="mb-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-semibold text-slate-500 transition hover:text-slate-700"
            >
              Close
            </button>
          </div>
          <div className="flex flex-col gap-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
