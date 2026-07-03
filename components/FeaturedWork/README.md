# FeaturedWork

Editorial "selected work" section. Sticky chapter rail on desktop, full-bleed
cinematic imagery on every breakpoint, reveal-on-scroll driven by
`IntersectionObserver`, no animation libraries.

## Adding real project photography

Drop finished assets into:

```
/public/images/projects/
```

Each project in `data.ts` points at a **base path with no extension**, e.g.

```ts
image: "/images/projects/luxury-real-estate-platform",
```

The component requests, in order of preference:

```
luxury-real-estate-platform.avif
luxury-real-estate-platform.webp
luxury-real-estate-platform.jpg
```

via a `<picture>` element, so the browser picks the smallest format it
supports and falls back to `.jpg` everywhere else. You only need to:

1. Export the image at roughly **2400×1350px** (16:9-ish, it gets cropped
   with `object-fit: cover`), optimized as `.avif`, `.webp`, and `.jpg`.
2. Name all three files identically to the `image` base path.
3. Update `image`, `imageAlt`, and `href` in `data.ts`.

No component code needs to change. Set `priority: true` on at most one
project (the one likely to be closest to the fold) so it loads eagerly
instead of lazily.

## Files

- `FeaturedWork.tsx` — section shell: masthead header + rail + chapter list.
- `Project.tsx` — a single chapter: numeral, title, dek, image, meta, stat.
- `ChapterRail.tsx` — sticky desktop navigation that tracks scroll position.
- `data.ts` — content and asset paths. The only file you should need to
  touch when adding or editing a project.
- `useReveal.ts` — one-shot scroll-reveal hook (IntersectionObserver).
- `useActiveChapter.ts` — tracks which chapter is centered in the viewport,
  powers the rail's active state.
