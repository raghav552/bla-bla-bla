"use client";

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#why" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <div className="footer-logo-icon">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="3.5" fill="white" />
                <circle cx="9" cy="2.5" r="1.8" fill="white" opacity="0.55" />
                <circle cx="15.5" cy="9" r="1.8" fill="white" opacity="0.55" />
                <circle cx="9" cy="15.5" r="1.8" fill="white" opacity="0.55" />
                <circle cx="2.5" cy="9" r="1.8" fill="white" opacity="0.55" />
              </svg>
            </div>
            <span className="footer-logo-text">WebGrowth</span>
          </div>
          <p className="footer-tagline">
            Websites · SEO · Content Systems · Paid Advertising · Growth Strategy
          </p>
        </div>

        <nav className="footer-nav">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          {SOCIAL_LINKS.map((social) => (
            <a key={social.label} href={social.href} className="footer-social-link">
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} WebGrowth. All rights reserved.</span>
        <span className="footer-bottom-sep">Built as one connected growth system.</span>
      </div>

      <style jsx>{`
        .site-footer {
          position: relative;
          background: #f5f5f7;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding: 72px 40px 32px;
        }

        .footer-top {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 0.7fr;
          gap: 48px;
          padding-bottom: 56px;
        }

        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .footer-logo-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: linear-gradient(135deg, #f5c518 0%, #e6a800 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .footer-logo-text {
          font-weight: 800;
          font-size: 17px;
          color: #1a1a2e;
          letter-spacing: -0.01em;
        }
        .footer-tagline {
          font-size: 13.5px;
          color: #888;
          line-height: 1.6;
          margin: 0;
          max-width: 360px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-link {
          font-size: 14.5px;
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #2563eb;
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: flex-start;
        }
        .footer-social-link {
          font-size: 14.5px;
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .footer-social-link:hover {
          color: #2563eb;
        }

        .footer-bottom {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          padding-top: 28px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          font-size: 12.5px;
          color: #999;
        }

        @media (max-width: 760px) {
          .site-footer {
            padding: 56px 24px 28px;
          }
          .footer-top {
            grid-template-columns: 1fr;
            gap: 36px;
            padding-bottom: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
          }
          .footer-bottom-sep {
            display: block;
          }
        }
      `}</style>
    </footer>
  );
}
