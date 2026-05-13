export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">João Francisco</h1>
        <p className="text-gray-600">
          Web Developer in progress — building projects and learning daily.
        </p>
      </header>

      {/* About */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700"></p>
      </section>

      {/* Education */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="text-gray-700"></p>
      </section>

      {/* Work */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Work</h2>
        <p className="text-gray-700"></p>
      </section>

      {/* Projects */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-gray-700"></p>
      </section>

      {/* Links */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Links</h2>
        <ul className="text-blue-600 space-y-1">
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </section>

    </main>
  );
}