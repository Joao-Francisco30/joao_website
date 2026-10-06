import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Education" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#links", label: "Links" },
  { href: "/football", label: "Football Dashboard" },
];

export default function SiteNav() {
  return (
    <div className="sticky top-0 z-50 border-b border-gray-800 bg-[#0f0f0f]/80 backdrop-blur-sm">
      <nav aria-label="Main" className="mx-auto max-w-3xl px-6">
        {/* Scrolls horizontally on narrow screens instead of overflowing the page */}
        <ul className="flex gap-6 overflow-x-auto whitespace-nowrap py-4 text-sm font-medium text-gray-400">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
