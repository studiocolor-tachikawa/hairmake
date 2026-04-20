import Link from "next/link";

const siteLinks = [
  { label: "Hairmake Price", href: "/hairmake-price" },
  { label: "まつげ Price", href: "/matsuge-price" },
  {
    label: "School",
    href: "https://salmon779259.studio.site/",
    external: true,
  },
  { label: "BLOG", href: "/blog" },
  { label: "COMPANY", href: "/company" },
  { label: "お問い合わせ", href: "https://lin.ee/XXXXXXX", external: true },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export default function SitemapPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase text-center">Site Map</p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide text-center">サイトマップ</h1>

      <ul className="space-y-1">
        <li>
          <Link
            href="/"
            className="block px-4 py-3 text-sm tracking-wide text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            TOP
          </Link>
        </li>
        {siteLinks.map((item) => (
          <li key={item.href}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm tracking-wide text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="block px-4 py-3 text-sm tracking-wide text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
