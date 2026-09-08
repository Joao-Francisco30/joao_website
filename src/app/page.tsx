export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">

      <nav className="flex gap-6 text-sm font-medium text-gray-400 sticky top-0 bg-zinc-950/80 backdrop-blur-sm py-4 border-b border-gray-800 mb-8">
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

        <a href="#skills" className="hover:text-white transition">
          Skills
        </a>

        <a href="#links" className="hover:text-white transition">
          Links
        </a>
      </nav>

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">João Francisco</h1>
        <p className="text-gray-400">
          Computer Engineering Graduate · Aspiring Software Developer
        </p>
      </header>

      {/* About */}
      <section id="about" className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>

        <p className="text-gray-300 leading-7">
          I am a Computer Engineering graduate with an interest in frontend
          development and data-driven applications. I enjoy learning new
          technologies and understanding how different parts of a project work
          together, from the frontend and backend to databases and APIs.
        </p>

        <p className="text-gray-300 leading-7">
          I am currently developing my skills in Next.js, TypeScript, Python,
          PostgreSQL, Prisma, REST APIs, and Git, with the goal of becoming a
          developer who can contribute across different parts of a project.
        </p>

        <p className="text-gray-300 leading-7">
          I am always willing to learn, take on new challenges, and do my best
          to improve both technically and professionally.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="space-y-4">
        <h2 className="text-2xl font-semibold">Education</h2>

        <div className="border border-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold">
            Bachelor's Degree in Computer Engineering
          </h3>

          <p className="text-gray-400 mt-1">
            Instituto Politécnico de Tomar
          </p>

          <p className="text-sm text-gray-500 mt-1">
            September 2019 – December 2023
          </p>

          <p className="text-gray-300 mt-4">
            Relevant areas included programming in C and Java, React,
            Assembly, and software development fundamentals.
          </p>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="space-y-4">
        <h2 className="text-2xl font-semibold">Work Experience</h2>

        <div className="border border-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold">Store Operator</h3>

          <p className="text-gray-400 mt-1">Lidl</p>

          <p className="text-sm text-gray-500 mt-1">
            July 2024 – Present
          </p>

          <p className="text-gray-300 mt-4 leading-7">
            Working in a customer-facing environment, developing
            communication, teamwork, and problem-solving skills.
          </p>

          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
            <li>Customer service and communication</li>
            <li>Working effectively as part of a team</li>
            <li>Handling responsibilities in a fast-paced environment</li>
            <li>Developing adaptability and problem-solving skills</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="grid gap-4">

          {/* Football Data Analytics Platform */}
          <div className="border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">
                Football Data Analytics Platform
              </h3>

              <span className="text-sm text-gray-500 whitespace-nowrap">
                In Development
              </span>
            </div>

            <p className="text-gray-400 mt-3 leading-7">
              A football analytics platform focused on collecting, processing,
              storing, and visualizing football data.
            </p>

            <p className="text-gray-400 mt-3 leading-7">
              The project uses a Python ETL pipeline to ingest data from
              football-data.org and stores structured league, team, and season
              statistics in PostgreSQL. A Next.js and TypeScript dashboard is
              being developed to provide an interface for exploring the data.
            </p>

            <p className="text-gray-400 mt-3 leading-7">
              Currently, the platform covers seven major European leagues,
              with historical team analytics and live football data planned
              for future development.
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Tech: Next.js · TypeScript · Python · PostgreSQL · Prisma · REST API · Git
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <div className="space-y-3">
          <p className="text-gray-300">
            <span className="font-medium text-white">Languages:</span>{" "}
            TypeScript · Python · Java · C · Assembly
          </p>

          <p className="text-gray-300">
            <span className="font-medium text-white">Frontend:</span>{" "}
            Next.js · React
          </p>

          <p className="text-gray-300">
            <span className="font-medium text-white">Backend & Data:</span>{" "}
            REST APIs · PostgreSQL · Prisma
          </p>

          <p className="text-gray-300">
            <span className="font-medium text-white">Tools:</span>{" "}
            Git · GitHub
          </p>
        </div>
      </section>

      {/* Links */}
      <section id="links" className="space-y-4">
        <h2 className="text-2xl font-semibold">Links</h2>

        <div className="flex flex-wrap gap-4">

          <a
            href="https://github.com/Joao-Francisco30"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 px-4 py-2 rounded-lg hover:border-gray-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/joão-francisco-98a54a272/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 px-4 py-2 rounded-lg hover:border-gray-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:jfsimoes30@outlook.pt"
            className="border border-gray-800 px-4 py-2 rounded-lg hover:border-gray-500 transition"
          >
            Email
          </a>

        </div>
      </section>

    </main>
  );
}
