import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="page-shell"
      style={{
        minHeight: "100vh",
        background: "#F5F5F7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        overflowX: "hidden",
      }}
    >
      <div style={{ maxWidth: "640px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "999px", background: "rgba(37,99,235,0.08)", color: "#2563eb", fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          404
        </div>
        <h1 style={{ margin: "20px 0 16px", fontSize: "clamp(2.6rem, 5vw, 4.2rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111827", fontWeight: 800 }}>
          The page you’re looking for doesn’t exist.
        </h1>
        <p style={{ margin: "0 0 28px", fontSize: "18px", lineHeight: 1.7, color: "#4b5563" }}>
          It may have moved, been removed, or never existed. Let’s bring you back to the main experience.
        </p>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", padding: "14px 24px", background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)", color: "#fff", textDecoration: "none", fontWeight: 600 }}>
          Return Home
        </Link>
      </div>
    </main>
  );
}
