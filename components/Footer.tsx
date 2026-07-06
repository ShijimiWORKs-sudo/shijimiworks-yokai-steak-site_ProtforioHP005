const FOOTER_NAV = [
  { href: "#concept", label: "Concept" },
  { href: "#service", label: "Service" },
  { href: "#works", label: "Works" },
  { href: "#team", label: "Team" },
  { href: "#process", label: "Process" },
  { href: "#price", label: "Price" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand-name">ShijimiWORKs</p>
            <p className="footer__brand-tag">
              Design, Frontend, Backend.
              <br />
              ブランドの世界観を、動くWebサイトへ。
            </p>
          </div>
          <nav className="footer__nav" aria-label="フッターナビゲーション">
            {FOOTER_NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} ShijimiWORKs Design Studio</span>
          <span>Web Design Team ・ Portfolio Sample</span>
        </div>
      </div>
    </footer>
  );
}
