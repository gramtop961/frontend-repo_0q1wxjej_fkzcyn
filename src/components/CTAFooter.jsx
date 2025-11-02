import { Mail, Phone, Star } from "lucide-react";

export default function CTAFooter() {
  return (
    <section id="contact" className="relative mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <p className="inline-flex items-center gap-1 text-xs uppercase tracking-wider/4 opacity-90">
                <Star className="h-3.5 w-3.5" /> Bizalomra építve
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold leading-tight">
                Készen állsz a növekedésre? Kérj személyre szabott ajánlatot!
              </h3>
              <p className="mt-3 text-white/90">
                Röviden leírod az igényt, 24 órán belül válaszolunk konkrét lépésekkel és árazással.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@rastatech.eu" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black shadow/20">
                  <Mail className="h-4 w-4" /> hello@rastatech.eu
                </a>
                <a href="tel:+361234567" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/30 hover:bg-white/10">
                  <Phone className="h-4 w-4" /> +36 1 234 567
                </a>
              </div>
            </div>

            <div className="relative p-8 sm:p-12 bg-gradient-to-b from-white/10 to-white/0">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid gap-3 bg-white/10 rounded-xl p-4 sm:p-5 backdrop-blur"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required placeholder="Név" className="w-full rounded-md border border-white/30 bg-white/80 px-3 py-2 text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-white/60" />
                  <input type="email" required placeholder="E-mail" className="w-full rounded-md border border-white/30 bg-white/80 px-3 py-2 text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-white/60" />
                </div>
                <input placeholder="Cégnév (opcionális)" className="w-full rounded-md border border-white/30 bg-white/80 px-3 py-2 text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-white/60" />
                <textarea required rows={3} placeholder="Miről lenne szó?" className="w-full rounded-md border border-white/30 bg-white/80 px-3 py-2 text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-white/60" />
                <button className="mt-1 inline-flex justify-center items-center px-5 py-3 rounded-md bg-black text-white font-medium hover:opacity-90">
                  Ajánlatot kérek
                </button>
                <p className="text-xs text-white/80">
                  A küldés jelenleg demó. Írj közvetlenül e-mailt, és 24 órán belül válaszolunk.
                </p>
              </form>
            </div>
          </div>
        </div>

        <footer className="py-8 text-sm text-black/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} RastaTech. Minden jog fenntartva.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Adatkezelés</a>
            <a href="#" className="hover:text-black">Felhasználási feltételek</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
