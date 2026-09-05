/* Lucide glyphs, 2px stroke, inlined so the kit renders offline.
   See readme.md ICONOGRAPHY: the icon set is a documented CDN substitution. */
const svg = (paths, size) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);

const Icon = {
  overview: (s = 16) => svg(<><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></>, s),
  documents: (s = 16) => svg(<><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><path d="M14 2v5h5" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></>, s),
  review: (s = 16) => svg(<><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></>, s),
  deadlines: (s = 16) => svg(<><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h5" /><circle cx="16" cy="16" r="6" /><path d="M16 14v2l1.5 1.5" /></>, s),
  registrations: (s = 16) => svg(<><path d="m3 8 9-5 9 5" /><path d="M4 8h16" /><path d="M6 12v6" /><path d="M10 12v6" /><path d="M14 12v6" /><path d="M18 12v6" /><path d="M3 22h18" /></>, s),
  development: (s = 16) => svg(<><path d="M2 21a8 8 0 0 1 13.3-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></>, s),
  units: (s = 16) => svg(<><rect x="5" y="2" width="14" height="20" rx="1" /><path d="M3 22h18" /><path d="M9 6h1" /><path d="M14 6h1" /><path d="M9 10h1" /><path d="M14 10h1" /><path d="M10 22v-4h4v4" /></>, s),
  health: (s = 16) => svg(<><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></>, s),
  rooms: (s = 16) => svg(<><circle cx="6" cy="19" r="3" /><circle cx="18" cy="5" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /></>, s),
  records: (s = 16) => svg(<><path d="M4 4h16v16H4z" /><path d="M4 9h16" /><path d="M4 15h16" /><path d="M10 4v16" /></>, s),
  settings: (s = 16) => svg(<><path d="M3 5h10" /><circle cx="16" cy="5" r="2" /><path d="M19 5h2" /><path d="M3 12h4" /><circle cx="10" cy="12" r="2" /><path d="M13 12h8" /><path d="M3 19h13" /><circle cx="19" cy="19" r="2" /></>, s),
  bell: (s = 16) => svg(<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9" /><path d="M10 21h4" /></>, s),
  search: (s = 13) => svg(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" /></>, s),
  upload: (s = 13) => svg(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m17 8-5-5-5 5" /><path d="M12 3v12" /></>, s),
};

window.Icon = Icon;
