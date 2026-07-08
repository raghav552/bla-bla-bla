import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";
import { getServiceBySlug, services, type ServiceEntry } from "@/data/services";

function ServiceTemplate({ service }: { service: ServiceEntry }) {
  const relatedServices = service.relatedSlugs
    .map((slug) => services.find((item) => item.slug === slug))
    .filter((entry): entry is ServiceEntry => Boolean(entry));

  return (
    <div style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "999px", background: "rgba(37,99,235,0.08)", color: "#2563eb", fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {service.eyebrow}
        </div>

        <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "center" }} className="service-hero-grid">
          <div>
            <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#111827", margin: "0 0 16px", fontWeight: 800 }}>
              {service.title}
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", margin: 0, maxWidth: "640px" }}>
              {service.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "28px" }} className="service-hero-actions">
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", padding: "14px 24px", background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)", color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                Book a Strategy Call
              </Link>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", padding: "14px 24px", border: "1px solid rgba(0,0,0,0.08)", color: "#111827", textDecoration: "none", fontWeight: 600, background: "#fff" }}>
                Explore Services
              </Link>
            </div>
          </div>

          <div style={{ border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "28px", background: "rgba(255,255,255,0.8)", boxShadow: "0 16px 40px rgba(17,24,39,0.06)" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af" }}>{service.overviewHeading}</div>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4b5563", margin: "12px 0 0" }}>{service.overviewText}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
              {service.overviewPoints.map((point) => (
                <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#111827", fontSize: "15px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "linear-gradient(135deg, #f5c518 0%, #e6a800 100%)", marginTop: "7px", flexShrink: 0 }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="overview" style={{ maxWidth: "1180px", margin: "0 auto", padding: "12px 24px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px" }} className="service-overview-grid">
          <div style={{ border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "28px", background: "#fff" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af" }}>{service.includedHeading}</div>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {service.includedItems.map((item) => (
                <div key={item.title} style={{ paddingBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <h3 style={{ fontSize: "17px", color: "#111827", margin: "0 0 8px", fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7, fontSize: "15px" }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "28px", background: "#fff" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af" }}>{service.processHeading}</div>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {service.processSteps.map((step, index) => (
                <div key={step.title} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "999px", background: "linear-gradient(135deg, #f5c518 0%, #e6a800 100%)", color: "#111827", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "16px", color: "#111827", margin: "0 0 6px", fontWeight: 700 }}>{step.title}</h3>
                    <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7, fontSize: "15px" }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px 72px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {service.faqs.map((faq) => (
            <details key={faq.question} style={{ border: "1px solid rgba(0,0,0,0.06)", borderRadius: "18px", background: "#fff", padding: "16px 20px" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, color: "#111827", listStyle: "none" }}>
                {faq.question}
              </summary>
              <p style={{ margin: "12px 0 0", color: "#4b5563", lineHeight: 1.7 }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px 84px" }}>
        <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af" }}>Related Services</div>
        <div style={{ marginTop: "18px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "18px" }} className="service-related-grid">
          {relatedServices.map((entry) => (
            <Link key={entry.slug} href={`/services/${entry.slug}`} style={{ border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", padding: "20px", background: "#fff", textDecoration: "none", color: "#111827" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#2563eb" }}>{entry.eyebrow}</div>
              <h3 style={{ fontSize: "18px", margin: "10px 0 8px", fontWeight: 700 }}>{entry.title}</h3>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7, fontSize: "14px" }}>{entry.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F5F5F7",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(245,197,80,0.16) 0%, transparent 35%), radial-gradient(ellipse at 80% 20%, rgba(200,210,255,0.14) 0%, transparent 40%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Navbar />
      <ServiceTemplate service={service} />
      <FinalCTA />
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .service-hero-grid,
          .service-overview-grid,
          .service-related-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .service-hero-actions {
            flex-direction: column !important;
          }
          .service-hero-actions a {
            width: 100% !important;
          }
          .service-hero-grid {
            gap: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
