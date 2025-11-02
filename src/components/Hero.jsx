import { Rocket, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs border border-black/10 shadow-sm mb-4">
              <Shield className="h-3.5 w-3.5 text-emerald-600" />
              <span className="font-medium">Megbízható IT partner vállalkozásoknak</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Növeld a bevételeid modern, skálázható IT megoldásokkal
            </h1>
            <p className="mt-5 text-lg text-black/70 max-w-xl">
              Teljes körű fejlesztés, üzemeltetés és felhő alapú megoldások. Gyors bevezetés, átlátható költségek, mérhető eredmények.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow hover:opacity-95">
                <Rocket className="h-4 w-4" />
                Kérek ajánlatot
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-black/10 bg-white hover:border-black/20">
                <Zap className="h-4 w-4" />
                Szolgáltatásaink
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-3xl font-semibold">98%</p>
                <p className="text-sm text-black/60">Ügyfél-elégedettség</p>
              </div>
              <div>
                <p className="text-3xl font-semibold"><span className="align-top text-lg">+</span>120</p>
                <p className="text-sm text-black/60">Sikeres projekt</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">24/7</p>
                <p className="text-sm text-black/60">Támogatás</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-black/10 bg-white shadow-sm p-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 border border-emerald-500/20 p-4">
                  <p className="text-sm font-medium mb-2">Web & App</p>
                  <p className="text-xs text-black/70">Gyors, reszponzív fejlesztés modern stackkel.</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border border-cyan-500/20 p-4">
                  <p className="text-sm font-medium mb-2">Cloud & DevOps</p>
                  <p className="text-xs text-black/70">CI/CD, skálázás, költség-optimalizálás.</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 border border-emerald-500/20 p-4">
                  <p className="text-sm font-medium mb-2">IT Üzemeltetés</p>
                  <p className="text-xs text-black/70">Monitorozás, automatikus mentések, SLA.</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border border-cyan-500/20 p-4">
                  <p className="text-sm font-medium mb-2">Kiberbiztonság</p>
                  <p className="text-xs text-black/70">Audit, védelem, incidenskezelés.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-lg bg-emerald-400/20 blur-2xl" aria-hidden />
            <div className="absolute -top-4 -right-6 h-24 w-24 rounded-lg bg-cyan-400/20 blur-2xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
