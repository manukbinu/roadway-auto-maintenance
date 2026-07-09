// Camera keyframes keyed to `data-camera="<key>"` DOM anchors placed throughout the page.
// position / target are world-space vectors; fov in degrees.
export const CAMERA_KEYFRAMES = [
  { key: 'hero-start', position: [9, 3.4, -58], target: [0, 1.2, -40], fov: 45 },
  { key: 'hero-mid', position: [7, 3.2, -20], target: [0, 1.2, -6], fov: 42 },
  { key: 'hero-end', position: [4.5, 2.1, 7], target: [0, 1, 1], fov: 36 },
  { key: 'services', position: [-4.5, 1.7, 2.8], target: [0.3, 0.7, 1.6], fov: 38 },
  { key: 'why', position: [5.2, 1.9, 0.3], target: [0, 0.8, 0], fov: 40 },
  { key: 'process', position: [-4.6, 1.8, -3.4], target: [0, 0.8, -1.6], fov: 38 },
  { key: 'gallery', position: [0.3, 7.2, 0.4], target: [0, 0.4, 0], fov: 52 },
  { key: 'testimonials', position: [-5.4, 1.8, 0.6], target: [0, 0.8, 0], fov: 40 },
  { key: 'faq', position: [0, 4, 10], target: [0, 1, -2], fov: 46 },
  { key: 'contact', position: [0, 1.8, 6.5], target: [0, 0.9, 1.3], fov: 36 },
]

// z position of the car itself during the hero arrival — resolved between
// hero-start (far outside) and hero-mid (parked) using the same progress map.
export const CAR_ARRIVAL = {
  from: { key: 'hero-start', z: -48 },
  to: { key: 'hero-mid', z: 0 },
}
