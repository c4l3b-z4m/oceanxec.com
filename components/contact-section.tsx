"use client"

import { useState, type FormEvent } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+593 4 123 4567",
    href: "tel:+59341234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@oceanxpress.ec",
    href: "mailto:info@oceanxpress.ec",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Guayaquil, Ecuador",
    href: null,
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contacto
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Solicite su cotización
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Contáctenos para recibir una asesoría personalizada. Nuestro equipo le responderá en menos de 24 horas.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-0.5 text-base font-semibold text-foreground transition-colors hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-base font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-lg bg-primary p-6">
              <h3 className="text-lg font-bold text-primary-foreground">
                Horario de atención
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                Lunes a Viernes: 08:00 - 17:00<br />
                Sábados: 09:00 - 13:00
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  Mensaje enviado
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Gracias por contactarnos. Le responderemos pronto.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Juan Pérez"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="juan@empresa.com"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+593 9 1234 5678"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Empresa
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Nombre de su empresa"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describa brevemente su requerimiento..."
                    className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
