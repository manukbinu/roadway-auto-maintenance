# Roadway Auto Maintenance

Premium cinematic website for Roadway Auto Maintenance, a car garage in Sharjah, UAE. Scroll-driven 3D showroom experience built with React Three Fiber.

## Tech Stack

- React + Vite
- Three.js / React Three Fiber / Drei
- GSAP ScrollTrigger
- Framer Motion
- Tailwind CSS
- Lenis smooth scroll

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run oxlint

## Project Structure

```
src/
  components/
    three/       3D scene, car model, garage, camera rig
    sections/    Hero, Services, Why Choose, Process, Gallery, Testimonials, FAQ, Contact
    ui/          Reusable UI primitives (Navbar, Reveal, Icon, etc.)
  data/          Business info, services, content, camera keyframes
  hooks/         Scroll, camera-sync, and responsive hooks
  lib/           Shared scroll state store
public/
  models/        Optimized GLB car models (desktop + mobile variants)
  images/        Service and gallery photography
```
