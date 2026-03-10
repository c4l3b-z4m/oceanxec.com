import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[600px] lg:min-h-[700px]">
      {/* Background image */}
      <Image
        src="/images/hero-shipping.jpg"
        alt="Barco de carga navegando en el océano"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center lg:py-40">
        <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          Logística Internacional en Ecuador
        </span>
        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Expertos en Trámites de Aduana y Transporte Internacional en Ecuador
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          Simplificamos el proceso de importación para empresas ecuatorianas. Su carga, nuestra prioridad.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="group flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Cotizar ahora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="rounded-lg border border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
          >
            Nuestros servicios
          </a>
        </div>
      </div>
    </section>
  )
}
