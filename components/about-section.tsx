import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "500+", label: "Clientes satisfechos" },
  { value: "20+", label: "Países conectados" },
]

const strengths = [
  "Equipo experto en normativa aduanera ecuatoriana",
  "Atención personalizada para cada cliente",
  "Red global de socios logísticos confiables",
  "Soluciones tecnológicas para seguimiento en tiempo real",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/about-team.jpg"
                alt="Equipo de Ocean Xpress trabajando"
                width={640}
                height={440}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Stats bar */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-primary p-4 text-center"
                >
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-primary-foreground/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Sobre nosotros
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Simplificamos sus importaciones en Ecuador
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              En Ocean Xpress, nos especializamos en hacer que el proceso de importación sea sencillo y eficiente para empresas ecuatorianas. Con años de experiencia en el sector, entendemos las complejidades del comercio internacional y la normativa aduanera local.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Nuestro equipo de profesionales trabaja estrechamente con cada cliente para ofrecer soluciones logísticas a medida que optimizan tiempos y costos.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
