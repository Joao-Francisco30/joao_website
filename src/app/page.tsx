export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">

      <nav className="flex gap-6 text-sm text-gray-400 sticky top-0 bg-white py-4 border-b mb-8">
        <a href="#about" className="hover:text-white transition">
          About
        </a>

        <a href="#education" className="hover:text-white transition">
          Education
        </a>

        <a href="#work" className="hover:text-white transition">
          Work
        </a>

        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>

        <a href="#links" className="hover:text-white transition">
          Links
        </a>
      </nav>

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">João Francisco</h1>
        <p className="text-gray-600">
          Web Developer in progress — building projects and learning daily.
        </p>
      </header>

      {/* About */}
      <section id="about" className="space-y-2">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-300"></p>
      </section>

      {/* Education */}
      <section id="education" className="space-y-2">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="text-gray-300"></p>
      </section>

      {/* Work */}
      <section id="work" className="space-y-2">
        <h2 className="text-2xl font-semibold">Work</h2>
        <p className="text-gray-300"></p>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="grid gap-4">

          {/* Project 1 */}
          <div className="border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition">
            <h3 className="text-lg font-semibold">Project Name</h3>
            <p className="text-gray-400">
              Short description of what this project does and what you learned.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: Next.js, Tailwind, TypeScript
            </p>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition">
            <h3 className="text-lg font-semibold">Another Project</h3>
            <p className="text-gray-400">
              Short description of another project.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: React, API, Node.js
            </p>
          </div>

        </div>
      </section>

      {/* Links */}
      <section id="links" className="space-y-2">
        <h2 className="text-2xl font-semibold">Links</h2>
        <ul className="text-blue-600 space-y-1">
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </section>

    </main>
  );
}