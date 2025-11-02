import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Referencia logók / társadalmi bizonyíték - egyszerű sáv a konverzióért */}
        <section aria-label="logos" className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-70">
              <div className="h-8 bg-gradient-to-r from-emerald-200 to-emerald-100 rounded" />
              <div className="h-8 bg-gradient-to-r from-cyan-200 to-cyan-100 rounded" />
              <div className="h-8 bg-gradient-to-r from-emerald-200 to-emerald-100 rounded" />
              <div className="h-8 bg-gradient-to-r from-cyan-200 to-cyan-100 rounded" />
            </div>
          </div>
        </section>
        <CTAFooter />
      </main>
    </div>
  );
}

export default App;
