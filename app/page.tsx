
export default function Home() {
  const programs = [
    {
      icon: "📚",
      title: "Infinity Free",
      description:
        "InfinityFree adalah penyedia layanan hosting web gratis yang populer untuk pelajar, pemula, dan developer yang ingin belajar membuat website.",
    },
    {
      icon: "🔬",
      title: "Website Builder",
      description:
        "Platform untuk membuat website dengan mudah tanpa harus menulis kode, biasanya menggunakan tampilan visual dan fitur drag-and-drop.",
    },
    {
      icon: "🎨",
      title: "MySQL PHPmyAdmin",
      description:
        "MySQL adalah sistem manajemen basis data yang digunakan untuk menyimpan dan mengelola data.",
    },
    {
      icon: "⚽",
      title: "Github",
      description:
        "GitHub adalah platform online untuk menyimpan dan mengelola kode program menggunakan sistem kontrol versi Git.",
    },
    {
      icon: "🌍",
      title: "Netlify",
      description:
        "Netlify adalah platform hosting yang memungkinkan website dipublikasikan ke internet tanpa konfigurasi server yang rumit.",
    },
    {
      icon: "💼",
      title: "Kodular dan Firebase",
      description:
        "Kodular membantu pembuatan aplikasi Android, sedangkan Firebase menyediakan layanan untuk menyimpan dan mengelola data secara online.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="sticky top-0 z-50 bg-[#00008A] text-white shadow-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-bold">
            Praktik AKA
          </a>
          <div className="flex gap-4 text-sm sm:gap-8 sm:text-base">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#programs" className="hover:text-gray-300">Programs</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="bg-gradient-to-br from-[#00008A] to-[#0000CD] px-6 py-28 text-center text-white"
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold sm:text-6xl">
            Aplikasi Komputasi Awan
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
            Belajar Buat Repository di Cloud menggunakan Github dan Integrasi
            dengan Netlify
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/"
              className="rounded-md bg-white px-8 py-3 font-bold text-[#00008A] hover:bg-gray-100"
            >
              Github
            </a>
            <a
              href="https://app.netlify.com/"
              className="rounded-md border-2 border-white px-8 py-3 font-bold text-white hover:bg-white hover:text-[#00008A]"
            >
              Netlify
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#00008A] sm:text-4xl">
              Aplikasi Komputasi Awan
            </h2>
            <p className="mb-5 text-lg leading-8 text-gray-600">
              Aplikasi komputasi awan adalah aplikasi yang dijalankan atau
              disimpan di server cloud (awan), bukan di komputer lokal.
              Contohnya Google Drive, Zoom, Gmail, atau website yang di-host
              di AWS.
            </p>
            <p className="mb-8 text-lg leading-8 text-gray-600">
              Model layanan komputasi awan terdiri dari IaaS (Infrastructure
              as a Service), PaaS (Platform as a Service), dan SaaS (Software
              as a Service).
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                ["IaaS", "Infrastructure as a Service"],
                ["PaaS", "Platform as a Service"],
                ["SaaS", "Software as a Service"],
              ].map(([name, detail]) => (
                <div key={name}>
                  <p className="text-2xl font-bold text-[#00008A]">{name}</p>
                  <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://go4hosting.com/wp-content/uploads/2021/02/abc.jpg.png"
              alt="Ilustrasi Cloud Computing"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#00008A] sm:text-4xl">
            Our Programs
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#00008A] text-2xl">
                  {program.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#00008A]">
                  {program.title}
                </h3>
                <p className="leading-7 text-gray-600">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#000066] px-6 py-8 text-center text-white"
      >
        <p>© 2025 Aplikasi Komputasi Awan | TRin Polman Bandung</p>
      </footer>
    </main>
  );
}
