

const PREMIUM_SPONSORS = [
  { name: "DIPLOMAT",    sub: "12 ვაკანსია", img: "/diplomat.png" },
  { name: "აჭარა ჯგუფი", sub: "8 ვაკანსია",  img: "/adjara-group.jpg" },
  { name: "ELITE",       sub: "6 ვაკანსია",  img: "/elit .jpg" },

];

const STANDARD_SPONSORS = [
  { name: "მაღარტი", sub: "5 ვაკანსია",  img:"/madart.jpg" },
  { name: "სუფთა სახლი", sub: "4 ვაკანსია", img:"/suftasaxli.png" },
  { name: "SUBWAY", sub: "7 ვაკანსია", img:"/subway-12-logo-svg-vector.svg" },
  { name: "Spar", sub: "3 ვაკანსია",img:"/spar-logo-1.png" },
  { name: "KFC", sub: "9 ვაკანსია",img:"/4607.svg" },
  { name: "სხივი+", sub: "2 ვაკანსია", img:"/images.png" },
];

export default function SponsorsSection() {
  return (
    
    <div className="sponsors-section">

      <div className="sponsors-header">
        <div className="sponsors-header-line" />
        <span className="sponsors-header-text">პარტნიორი კომპანიები</span>
        <div className="sponsors-header-line" />
      </div>


      <div className="sponsors-tier-label">
        <span className="tier-badge premium-tier"> პრემიუმი</span>
      </div>

      <div className="sponsors-premium-grid">
        {PREMIUM_SPONSORS.map((s, i) => (
          <div key={i} className="sponsor-card premium-card" style={{ "--accent": s.color }}>
  <img src={s.img} alt={s.name} className="sponsor-avatar premium-avatar" />
            <div className="sponsor-info">
              <span className="sponsor-name">{s.name}</span>
              <span className="sponsor-sub">{s.sub}</span>
            </div>
            <span className="sponsor-arrow">→</span>
          </div>
        ))}
      </div>


      <div className="sponsors-tier-label" style={{ marginTop: 16 }}>
        <span className="tier-badge standard-tier">კომპანიები</span>
      </div>

      <div className="sponsors-standard-grid">
        {STANDARD_SPONSORS.map((s, i) => (
         <div key={i} className="sponsor-card standard-card" style={{ "--accent": s.color }}>
  <img src={s.img} alt={s.name} className="sponsor-avatar standard-avatar" />
            <div className="sponsor-info">
              <span className="sponsor-name">{s.name}</span>
              <span className="sponsor-sub">{s.sub}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}