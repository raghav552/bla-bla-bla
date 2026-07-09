import Image from "next/image";
import styles from "./ServicesShowcase.module.css";

const showcaseTiles = [
  {
    label: "Web Development",
    image:
      "https://images.unsplash.com/photo-1649442746245-f51f4b76963f?auto=format&fit=crop&w=1000&q=80",
    alt: "A modern website open on a laptop screen",
  },
  {
    label: "App Development",
    image:
      "https://images.unsplash.com/photo-1526038335545-4b96864eaee7?auto=format&fit=crop&w=1000&q=80",
    alt: "A mobile app interface displayed on a smartphone",
  },
  {
    label: "Brand & Creative",
    image:
      "https://images.unsplash.com/photo-1723220217548-169d91fd1ba3?auto=format&fit=crop&w=1000&q=80",
    alt: "A brand color palette presentation with swatches",
  },
  {
    label: "Performance & SEO",
    image:
      "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?auto=format&fit=crop&w=1000&q=80",
    alt: "A marketing analytics dashboard on a computer screen",
  },
];

export default function ServicesShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>See It In Action</div>
        <h2 className={styles.heading}>The disciplines, in the work itself</h2>
        <p className={styles.subcopy}>
          A look at the kind of output each discipline produces when
          strategy, design, and execution move together.
        </p>
      </div>

      <div className={styles.grid}>
        {showcaseTiles.map((tile) => (
          <div key={tile.label} className={styles.tile}>
            <Image
              src={tile.image}
              alt={tile.alt}
              fill
              sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
              className={styles.tileImage}
            />
            <div className={styles.tileOverlay} />
            <span className={styles.tileLabel}>{tile.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
