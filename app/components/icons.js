// Line icons for the capability cards. They all share the same stroke setup.
function Icon({ children }) {
  return (
    <svg
      className="h-5 w-5 text-cobalt"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const LayoutIcon = () => (
  <Icon>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 20V9" />
  </Icon>
);

export const VideoIcon = () => (
  <Icon>
    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
    <rect x="3" y="6" width="12" height="12" rx="2" />
  </Icon>
);

export const WaveIcon = () => (
  <Icon>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l2.5-6 4 12 3-8 2 2H21" />
  </Icon>
);

export const NodesIcon = () => (
  <Icon>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M8 7.5l3 8M16 7.5l-3 8M8.5 6h7" />
  </Icon>
);

export const ChipIcon = () => (
  <Icon>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M9 4v3M15 4v3M9 17v3M15 17v3M4 9h3M4 15h3M17 9h3M17 15h3" />
  </Icon>
);

export const ServerIcon = () => (
  <Icon>
    <rect x="3" y="4" width="18" height="6" rx="1.5" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" />
    <circle cx="7" cy="7" r="1" fill="currentColor" />
    <circle cx="7" cy="17" r="1" fill="currentColor" />
  </Icon>
);
