import Image from "next/image"
import { FileCheck, Ship, ArrowRight } from "lucide-react"

const services = [
  {
    icon: FileCheck,
    title: "Asesoría Aduanera",
    description:
      "Gestionamos todos sus trámites de aduana con eficiencia y cumplimiento. Desde clasificación arancelaria hasta despacho de mercancías, nos encargamos de toda la documentación y compliance regulatorio.",
    features: [
      "Clasificación arancelaria",
      "Despacho de mercancías",
      "Documentación y compliance",
      "Gestión de permisos",
    ],
    image: "/images/customs-advisory.jpg",
    imageAlt: "Documentos de aduana y trámites",
  },
  {
    icon: Ship,
    title: "Transporte de Mercancía",
    description:
      "Coordinamos el transporte internacional de su carga por vía marítima y aérea. Ofrecemos soluciones integrales de freight forwarding adaptadas a las necesidades de su negocio.",
    features: [
      "Transporte marítimo y aéreo",
      "Freight forwarding integral",
      "Seguimiento en tiempo real",
      "Consolidación de carga",
    ],
    image: "/images/freight-transport.jpg",
    imageAlt: "Puerto con contenedores y grúas de carga",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Servicios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Soluciones integrales de logística
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Ofrecemos servicios especializados para simplificar y optimizar sus operaciones de comercio internacional.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/30" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <ArrowRight className="h-3 w-3 flex-shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
