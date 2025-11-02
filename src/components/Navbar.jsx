import { Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500 to-cyan-500" />
            <span className="text-lg font-semibold tracking-tight group-hover:opacity-90">
              RastaTech
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
            <a href="#services" className="hover:text-black transition-colors">Szolgáltatások</a>
            <a href="#solutions" className="hover:text-black transition-colors">Megoldások</a>
            <a href="#about" className="hover:text-black transition-colors">Rólunk</a>
            <a href="#contact" className="hover:text-black transition-colors">Kapcsolat</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="mailto:hello@rastatech.eu" className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-black/10 hover:border-black/20 transition-colors">
              <Mail className="h-4 w-4" />
              <span>hello@rastatech.eu</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow hover:opacity-95 transition-opacity">
              <Phone className="h-4 w-4" />
              Ajánlatot kérek
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
