export default function Loading() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f8faf8 0%, #f5f7f5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "48px", height: "48px", borderRadius: "999px", border: "3px solid rgba(15,23,42,0.08)", borderTopColor: "#16a34a", margin: "0 auto 16px", animation: "spin 0.8s linear infinite" }} />
        <div style={{ fontSize: "14px", fontWeight: 600, color: "#475569" }}>Loading…</div>
      </div>
    </main>
  );
}
