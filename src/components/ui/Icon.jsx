const PATHS = {
  engine: (
    <>
      <rect x="3" y="9" width="12" height="8" rx="1" />
      <path d="M15 11h3l3 3v3h-6" />
      <path d="M5 9V6h4v3" />
      <circle cx="7" cy="19" r="1.5" />
      <circle cx="16" cy="19" r="1.5" />
    </>
  ),
  ac: (
    <>
      <path d="M12 2v20" />
      <path d="M4.5 6.5l15 11" />
      <path d="M19.5 6.5l-15 11" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  brake: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
    </>
  ),
  oil: (
    <>
      <path d="M12 2c3 3.5 6 7.2 6 11a6 6 0 1 1-12 0c0-3.8 3-7.5 6-11z" />
    </>
  ),
  suspension: (
    <>
      <path d="M6 3v4M6 17v4M18 3v4M18 17v4" />
      <path d="M6 7l3 2-3 2 3 2-3 2" />
      <path d="M18 7l-3 2 3 2-3 2 3 2" />
    </>
  ),
  diagnostics: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M7 14l2.5-5 2 3 2-4 2.5 6" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="16" height="10" rx="1.5" />
      <path d="M19 11h2v4h-2" />
      <path d="M7 8V6M12 8V6" />
    </>
  ),
  tire: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M6.5 17.5l2-2" />
    </>
  ),
  electrical: (
    <>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </>
  ),
  check: (
    <>
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 1-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  star: (
    <>
      <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" />
    </>
  ),
  quote: (
    <>
      <path d="M7 8c-2.5 1.5-3 3.5-3 6a3 3 0 0 0 3 3 3 3 0 0 0 3-3c0-1.6-1-2.7-2.4-3M17 8c-2.5 1.5-3 3.5-3 6a3 3 0 0 0 3 3 3 3 0 0 0 3-3c0-1.6-1-2.7-2.4-3" />
    </>
  ),
  chevronDown: (
    <>
      <path d="M6 9l6 6 6-6" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 12a8.5 8.5 0 1 1-15.9-4.2L3 21l7.4-1.6A8.5 8.5 0 0 1 20.5 12z" />
      <path d="M8.5 8.7c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.9 1.4 2 2.3 1.3 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.9.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.4.1.9-.1 1.4-.3.5-1.4 1.2-2.4 1.2-1 0-2.9-.5-4.6-2-1.9-1.6-3.1-3.6-3.3-4-.2-.4-1.3-2-1.3-3 0-1 .5-1.5.7-1.9z" />
    </>
  ),
}

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.6 }) {
  const path = PATHS[name]
  if (!path) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {path}
    </svg>
  )
}
