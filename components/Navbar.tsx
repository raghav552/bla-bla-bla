"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/", dropdown: false },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Work", href: "/work", dropdown: false },
  { label: "About", href: "/about", dropdown: false },
  { label: "Insights", href: "/insights", dropdown: false },
  { label: "Contact", href: "/contact", dropdown: false },
];

const serviceSections = [
  {
    title: "Development",
    items: [
      { label: "Website Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
    ],
  },
  {
    title: "Marketing",
    items: [
      { label: "SEO & Local SEO", href: "/services/seo" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
    ],
  },
  {
    title: "Creative",
    items: [
      { label: "Brand Identity", href: "/services/brand-identity" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Motion Graphics", href: "/services/motion-graphics" },
      { label: "Content Creation", href: "/services/content-creation" },
    ],
  },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateViewport = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    updateViewport();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
        if (closeTimerRef.current !== null) {
          window.clearTimeout(closeTimerRef.current);
          closeTimerRef.current = null;
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("resize", updateViewport);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", updateViewport);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [isMobileMenuOpen]);

  const clearServicesCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openServicesMenu = () => {
    clearServicesCloseTimer();
    setIsServicesOpen(true);
  };

  const scheduleServicesClose = () => {
    clearServicesCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 140);
  };

  const handleServicesToggle = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const handleServicesClose = () => {
    clearServicesCloseTimer();
    setIsServicesOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: isMobile ? "18px" : "40px",
          paddingRight: isMobile ? "18px" : "40px",
          background: "rgba(245,245,247,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0, flex: 1 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #f5c518 0%, #e6a800 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="3.5" fill="white" />
                <circle cx="9" cy="2.5" r="1.8" fill="white" opacity="0.55" />
                <circle cx="15.5" cy="9" r="1.8" fill="white" opacity="0.55" />
                <circle cx="9" cy="15.5" r="1.8" fill="white" opacity="0.55" />
                <circle cx="2.5" cy="9" r="1.8" fill="white" opacity="0.55" />
              </svg>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: "16px", color: "#1a1a2e", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                WebGrowth
              </div>
              <div style={{ fontSize: "9.5px", color: "#999", letterSpacing: "0.06em", lineHeight: 1 }}>
                AI Ecosystem for Business
              </div>
            </div>
          </Link>
        </div>

        {!isMobile ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "32px", justifyContent: "center", flex: 1 }}>
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div
                      key={link.label}
                      ref={menuRef}
                      style={{ position: "relative" }}
                      onMouseEnter={() => {
                        openServicesMenu();
                      }}
                      onMouseLeave={() => {
                        scheduleServicesClose();
                      }}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                          handleServicesClose();
                        }
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                        aria-controls="services-mega-menu"
                        onMouseEnter={() => {
                          openServicesMenu();
                        }}
                        onFocus={() => {
                          openServicesMenu();
                        }}
                        onClick={handleServicesToggle}
                        onMouseLeave={() => {
                          scheduleServicesClose();
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "14.5px",
                          fontWeight: 500,
                          color: "#333",
                          padding: "4px 6px",
                          outline: "none",
                          borderRadius: "999px",
                          transition: "color 180ms ease, box-shadow 180ms ease",
                        }}
                      >
                        {link.label}
                        <motion.svg
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          style={{ marginTop: "1px" }}
                        >
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            id="services-mega-menu"
                            initial={{ opacity: 0, y: 10, scale: 0.985 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.985 }}
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                            onMouseEnter={clearServicesCloseTimer}
                            onMouseLeave={() => {
                              scheduleServicesClose();
                            }}
                            style={{
                              position: "absolute",
                              top: "calc(100% + 16px)",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "min(740px, calc(100vw - 36px))",
                              background: "rgba(255,255,255,0.96)",
                              backdropFilter: "blur(24px)",
                              WebkitBackdropFilter: "blur(24px)",
                              border: "1px solid rgba(0,0,0,0.06)",
                              borderRadius: "24px",
                              boxShadow: "0 18px 46px rgba(17,24,39,0.12)",
                              padding: "26px 26px 20px",
                              overflow: "hidden",
                              zIndex: 200,
                            }}
                          >
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "22px" }}>
                              {serviceSections.map((section) => (
                                <div key={section.title}>
                                  <div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>
                                    {section.title}
                                  </div>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "10px" }}>
                                    {section.items.map((item) => (
                                      <motion.div
                                        key={item.label}
                                        whileHover={{ x: 4, color: "#d4a017" }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
                                      >
                                        <Link
                                          href={item.href}
                                          onClick={handleServicesClose}
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            color: "#1f2937",
                                            textDecoration: "none",
                                            fontSize: "15px",
                                            fontWeight: 600,
                                            padding: "10px 0",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <span>{item.label}</span>
                                          <motion.span
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            style={{ color: "#d4a017", fontSize: "14px" }}
                                          >
                                            →
                                          </motion.span>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div style={{ marginTop: "20px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px" }}>
                              <motion.div whileHover={{ x: 4, color: "#d4a017" }} transition={{ duration: 0.2, ease: "easeOut" }}>
                                <Link
                                  href="/services"
                                  onClick={handleServicesClose}
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "#1f2937",
                                    textDecoration: "none",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    cursor: "pointer",
                                  }}
                                >
                                  <span>View All Services</span>
                                  <motion.span
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    style={{ color: "#d4a017" }}
                                  >
                                    →
                                  </motion.span>
                                </Link>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14.5px",
                      fontWeight: 500,
                      color: "#333",
                      padding: 0,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div style={{ minWidth: "200px", display: "flex", justifyContent: "flex-end" }}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #f5c518 0%, #e6a800 100%)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "11px 30px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1a1100",
                    cursor: "pointer",
                    boxShadow: "0 2px 14px rgba(230,168,0,0.28)",
                    letterSpacing: "-0.01em",
                    textDecoration: "none",
                  }}
                >
                  Book Call
                </Link>
              </motion.div>
            </div>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
            <motion.button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "999px",
                border: "1px solid rgba(0,0,0,0.08)",
                background: "rgba(255,255,255,0.86)",
                boxShadow: "0 8px 24px rgba(17,24,39,0.06)",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{ width: "18px", height: "18px", position: "relative" }}
              >
                <span style={{ position: "absolute", left: 0, top: "2px", width: "18px", height: "2px", background: "#1a1a2e", borderRadius: "999px" }} />
                <span style={{ position: "absolute", left: 0, top: "8px", width: "18px", height: "2px", background: "#1a1a2e", borderRadius: "999px", opacity: isMobileMenuOpen ? 0 : 1 }} />
                <span style={{ position: "absolute", left: 0, bottom: "2px", width: "18px", height: "2px", background: "#1a1a2e", borderRadius: "999px", transform: isMobileMenuOpen ? "rotate(90deg) translateY(-2px)" : "none" }} />
              </motion.div>
            </motion.button>
          </div>
        )}
      </motion.nav>

      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "rgba(17,24,39,0.45)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              style={{
                marginLeft: "auto",
                width: "min(88vw, 360px)",
                height: "100%",
                background: "rgba(255,255,255,0.98)",
                boxShadow: "-20px 0 60px rgba(17,24,39,0.16)",
                padding: "24px 20px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6b7280" }}>
                  Navigation
                </div>
                <button type="button" onClick={closeMobileMenu} style={{ width: "40px", height: "40px", borderRadius: "999px", border: "1px solid rgba(0,0,0,0.08)", background: "#fff", cursor: "pointer" }}>
                  ×
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {navLinks.map((link) => {
                  if (link.label === "Services") {
                    return (
                      <div key={link.label} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "10px" }}>
                        <Link href={link.href} onClick={closeMobileMenu} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", textDecoration: "none", color: "#111827", fontWeight: 600, fontSize: "16px" }}>
                          <span>{link.label}</span>
                          <span style={{ color: "#d4a017" }}>→</span>
                        </Link>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "10px" }}>
                          {serviceSections.flatMap((section) => section.items).slice(0, 4).map((item) => (
                            <Link key={item.label} href={item.href} onClick={closeMobileMenu} style={{ fontSize: "14px", color: "#4b5563", textDecoration: "none", padding: "4px 0" }}>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link key={link.label} href={link.href} onClick={closeMobileMenu} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "12px 0", textDecoration: "none", color: "#111827", fontWeight: 600, fontSize: "16px" }}>
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div style={{ marginTop: "auto", paddingTop: "16px" }}>
                <Link href="/contact" onClick={closeMobileMenu} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", borderRadius: "999px", padding: "14px 20px", background: "linear-gradient(135deg, #f5c518 0%, #e6a800 100%)", color: "#1a1100", textDecoration: "none", fontWeight: 700 }}>
                  Book Call
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
