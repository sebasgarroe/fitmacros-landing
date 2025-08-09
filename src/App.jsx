export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Nav */}
      <header className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-content-center font-bold">FM</div>
          <span className="font-semibold">FitMacros</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">Características</a>
          <a href="#how" className="hover:underline">Cómo funciona</a>
          <a href="#beta" className="hover:underline">Únete a la Beta</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Come mejor, logra tus objetivos y 
            <span className="text-slate-600"> no pierdas el impulso.</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">Registra comidas en segundos, ajusta tus calorías con tu actividad diaria y mantente accountable con tus amigos.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#beta" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold shadow">Unirme a la Beta</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 font-semibold">Ver características</a>
          </div>
          <div className="mt-4 text-xs text-slate-500">Integración con Apple Health y Health Connect. Macro Tetris disponible en Beta Pro.</div>
        </div>
        <div className="relative">
          <div className="aspect-[9/16] w-full max-w-sm mx-auto rounded-3xl bg-white shadow-xl border overflow-hidden">
            <div className="h-12 bg-slate-900/90"/>
            <div className="p-4 space-y-3">
              <div className="h-5 w-40 bg-slate-200 rounded"/>
              <div className="h-3 w-28 bg-slate-200 rounded"/>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 bg-slate-200 rounded-xl"/>
                <div className="h-24 bg-slate-200 rounded-xl"/>
                <div className="h-24 bg-slate-200 rounded-xl"/>
              </div>
              <div className="h-40 bg-slate-100 rounded-2xl border"/>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block w-40 h-40 bg-slate-100 rounded-3xl rotate-6"/>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Todo lo que necesitas, sin fricción</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {t:"Registro ultrarrápido",d:"Busca, escanea o duplica tus comidas favoritas. Crear alimentos es cuestión de segundos."},
            {t:"Macros en gramos y %",d:"Ajusta proteína, carbos y grasa como te funciona. La app sincroniza ambos modos."},
            {t:"Ajuste por actividad",d:"Leemos Apple Health / Health Connect para ajustar tus calorías diarias automáticamente."},
            {t:"Macro Tetris (Pro)",d:"Te sugerimos combinaciones para cerrar el día según tus macros restantes."},
            {t:"Compatibilidad de alimentos",d:"Cada alimento y comida recibe un puntaje 0–100 según tu objetivo."},
            {t:"Círculos de amigos",d:"Rachas, check‑ins semanales y tablero para mantener la motivación."}
          ].map((f,i)=> (
            <div key={i} className="p-5 rounded-2xl border bg-white shadow-sm">
              <div className="font-semibold">{f.t}</div>
              <p className="text-sm text-slate-600 mt-2">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Cómo funciona</h2>
        <ol className="mt-6 grid md:grid-cols-3 gap-6 list-decimal list-inside">
          <li className="p-5 rounded-2xl border bg-white shadow-sm">Ingresa tus datos y objetivos. La app calcula tus macros.</li>
          <li className="p-5 rounded-2xl border bg-white shadow-sm">Registra comidas: busca, escanea o usa favoritos. Ajustamos tus anillos en vivo.</li>
          <li className="p-5 rounded-2xl border bg-white shadow-sm">Conecta tu app de salud, invita a tus amigos y comparte tus check‑ins.</li>
        </ol>
      </section>

      {/* Beta */}
      <section id="beta" className="max-w-3xl mx-auto px-4 py-16">
        <div className="p-6 md:p-8 rounded-3xl border bg-white shadow">
          <h3 className="text-xl md:text-2xl font-bold">Únete a la Beta Privada</h3>
          <p className="text-slate-600 mt-2">Déjanos tu correo y te enviaremos el acceso a TestFlight (iOS) o Closed Testing (Android). La Beta incluye funciones Pro sin costo.</p>
          <form method="POST" action="mailto:sebasgarro1@gmail.com" className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3">
            <input name="email" type="email" required placeholder="tu@correo.com" className="rounded-2xl border px-4 py-3" />
            <button type="submit" className="rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold shadow">Quiero acceder</button>
          </form>
          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <a href="#" className="rounded-xl border px-4 py-3 flex items-center justify-center">Descargar en TestFlight (próximamente)</a>
            <a href="#" className="rounded-xl border px-4 py-3 flex items-center justify-center">Unirme al Closed Testing (próximamente)</a>
          </div>
          <p className="text-xs text-slate-500 mt-4">Al unirte aceptas nuestra política de privacidad y el uso de datos de salud solo para ajustar objetivos en tu dispositivo.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} FitMacros — Beta</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacidad</a>
          <a href="#" className="hover:underline">Términos</a>
          <a href="#" className="hover:underline">Contacto</a>
        </div>
      </footer>
    </div>
  )
}
