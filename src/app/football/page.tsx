import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Football Dashboard · João Francisco",
  description:
    "A football analytics dashboard built with a Python ETL pipeline, PostgreSQL, Prisma and Next.js.",
};

/**
 * URL of the deployed football dashboard (a separate Next.js app).
 * Set DASHBOARD_URL in .env.local / your hosting provider's env settings.
 */
function getDashboardUrl(): string | null {
  const raw = process.env.DASHBOARD_URL;
  if (!raw) return null;

  try {
    const url = new URL(raw);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

const steps = [
  {
    title: "Collect",
    text: "A Python ETL pipeline pulls leagues, teams and standings from the football-data.org API.",
  },
  {
    title: "Store",
    text: "Structured data is stored in PostgreSQL and accessed through Prisma.",
  },
  {
    title: "Visualize",
    text: "A Next.js and TypeScript dashboard lets you explore the data.",
  },
];

export default function FootballPage() {
  const dashboardUrl = getDashboardUrl();

  return (
    <main className="space-y-12 px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Football Data Dashboard</h1>
          <p className="leading-7 text-gray-400">
            A football analytics platform covering seven major European
            leagues. It is still in development, so expect it to grow over
            time.
          </p>
        </header>

        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-gray-800 p-4"
            >
              <p className="text-sm text-gray-500">Step {index + 1}</p>
              <h2 className="mt-1 text-lg font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="text-sm text-gray-500">
          Tech: Next.js · TypeScript · Python · PostgreSQL · Prisma · REST API
        </p>
      </div>

      <section aria-labelledby="dashboard-heading" className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 id="dashboard-heading" className="text-2xl font-semibold">
            Live dashboard
          </h2>

          {dashboardUrl && (
            <a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-lg border border-gray-800 px-4 py-2 text-sm transition hover:border-gray-500"
            >
              Open in new tab ↗
            </a>
          )}
        </div>

        {dashboardUrl ? (
          <iframe
            src={dashboardUrl}
            title="Football Data Dashboard"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            className="h-[80vh] min-h-[560px] w-full rounded-lg border border-gray-800 bg-white"
          />
        ) : (
          <div className="rounded-lg border border-dashed border-gray-700 p-10 text-center">
            <p className="font-medium">The live dashboard isn&apos;t online yet.</p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              It will appear here as soon as it is deployed. Check back soon.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
