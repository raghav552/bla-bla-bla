export default function Loading() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F5F5F7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "44px", height: "44px", borderRadius: "999px", border: "3px solid rgba(0,0,0,0.08)", borderTopColor: "#2563eb", margin: "0 auto 14px", animation: "spin 0.8s linear infinite" }} />
        <div style={{ fontSize: "14px", fontWeight: 600, color: "#4b5563" }}>Loading…</div>
      </div>
    </main>
  );
}
