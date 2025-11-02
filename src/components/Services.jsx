import { Shield, Wrench, Cloud, Code2, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Web & Alkalmazásfejlesztés",
    points: [
      "Landing page-ek és webshopok",
      "Egyedi vállalati rendszerek",
      "Gyors betöltés, SEO, analitika",
    ],
    accent: "from-emerald-500/15 to-emerald-500/5 border-emerald-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    points: [
      "CI/CD bevezetés és automatizáció",
      "Skálázás és költség-optimalizálás",
      "Megbízható infrastruktúra",
    ],
    accent: "from-cyan-500/15 to-cyan-500/5 border-cyan-500/20",
  },
  {
    icon: Wrench,
    title: "IT Üzemeltetés",
    points: [
      "Proaktív monitorozás és riasztások",
      "Mentések, helyreállítás, SLA",
      "Helpdesk és támogatás",
    ],
    accent: "from-emerald-500/15 to-emerald-500/5 border-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Kiberbiztonság",
    points: [
      "Biztonsági audit és hardening",
      "Védelem és incidenskezelés",
      "Képzés és best practice",
    ],
    accent: "from-cyan-500/15 to-cyan-500/5 border-cyan-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Fő szolgáltatásaink
          </h2>
          <p className="mt-3 text-black/70">
            Üzleti céljaidhoz igazított technológiát szállítunk – a tervezéstől a bevezetésig.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, points, accent }) => (
            <div key={title} className={`rounded-xl border bg-white shadow-sm p-6 
              bg-gradient-to-br ${accent} border`}> 
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md flex items-center justify-center bg-white/60 border border-black/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
