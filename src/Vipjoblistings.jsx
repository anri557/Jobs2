import {useState} from "react";

const CATEGORIES = [
  { icon: "💼", label: "ადმინისტრაცია", count: 342 },
  { icon: "💰", label: "ფინანსები", count: 218 },
  { icon: "📢", label: "მარკეტინგი", count: 195 },
  { icon: "💻", label: "IT/პროგრამირება", count: 487 },
  { icon: "🏗️", label: "მშენებლობა", count: 156 },
  { icon: "🚚", label: "ლოგისტიკა", count: 203 },
  { icon: "🎓", label: "განათლება", count: 134 },
  { icon: "⚕️", label: "მედიცინა", count: 289 },
];
const VIP_JOBS = [
  {
    title: "უძრავი ქონების გაყიდვების აგენტი/ბროკერი",
    company: "Home Space",
    initials: "HS",
    color: "#0ea5e9",
    posted: "06 მარტი",
    deadline: "06 აპრილი",
    isNew: true,
    hasSalary: true,
    daysLeft: 30,
    category: "გაყიდვები",
  },
  {
    title: "უძრავი ქონების აგენტი/ბროკერი",
    company: "MyHomeSale",
    initials: "MH",
    color: "#6366f1",
    posted: "06 მარტი",
    deadline: "06 აპრილი",
    isNew: true,
    hasSalary: true,
    daysLeft: 30,
    category: "გაყიდვები",
  },
  {
    title: "უძრავი ქონების აგენტი/გაყიდვების კონსულტანტი",
    company: "Express Home",
    initials: "EH",
    color: "#f59e0b",
    posted: "06 მარტი",
    deadline: "06 აპრილი",
    isNew: true,
    hasSalary: false,
    daysLeft: 30,
    category: "გაყიდვები",
  },
  {
    title: "ვაკანსიები გაყიდვების მიმართულებით",
    company: "არდი დაბდღვება",
    initials: "AD",
    color: "#10b981",
    posted: "04 მარტი",
    deadline: "04 აპრილი",
    isNew: false,
    hasSalary: false,
    daysLeft: 28,
    category: "გაყიდვები",
  },
  {
    title: "საოჯახო მართვის უმცროსი მენეჯერი/მკველვარი",
    company: "არდი დაბდღვება",
    initials: "AD",
    color: "#10b981",
    posted: "04 მარტი",
    deadline: "04 აპრილი",
    isNew: false,
    hasSalary: false,
    daysLeft: 28,
    category: "ადმინისტრაცია",
  },
  {
    title: "გაყიდვების მენეჯერი",
    company: "ირამ - ვენის სადაბდღვევო ჯგუფი",
    initials: "IV",
    color: "#ef4444",
    posted: "03 მარტი",
    deadline: "03 აპრილი",
    isNew: false,
    hasSalary: true,
    daysLeft: 27,
    category: "გაყიდვები",
  },
  {
    title: "გაყიდვების მენეჯერი",
    company: "ქარმოლი",
    initials: "ქმ",
    color: "#dc2626",
    posted: "03 მარტი",
    deadline: "03 აპრილი",
    isNew: false,
    hasSalary: false,
    daysLeft: 27,
    category: "გაყიდვები",
  },
  {
    title: "ფილიალის მენეჯერი, საცალო და კორპ. გაყიდვების თანამშრომელი",
    company: "სხივი+",
    initials: "სხ",
    color: "#8b5cf6",
    posted: "03 მარტი",
    deadline: "03 აპრილი",
    isNew: false,
    hasSalary: true,
    daysLeft: 27,
    category: "გაყიდვები",
  },
  {
    title: "პრისელერი - ქვემო ქართლი",
    company: "დიპლომატ ჯორჯია",
    initials: "DG",
    color: "#1e40af",
    posted: "02 მარტი",
    deadline: "02 აპრილი",
    isNew: false,
    hasSalary: false,
    daysLeft: 26,
    category: "გაყიდვები",
  },
  {
    title: "ბარის თანამშრომელი",
    company: "SKA",
    initials: "SK",
    color: "#b45309",
    posted: "02 მარტი",
    deadline: "02 აპრილი",
    isNew: false,
    hasSalary: false,
    daysLeft: 26,
    category: "კვება",
  },
];

function DeadlineBadge({ daysLeft, label }) {
  const cls = daysLeft <= 7 ? "urgent" : daysLeft <= 14 ? "soon" : "ok";
  return <span className={`deadline-badge ${cls}`}>{label}</span>;
}

export default function VipJobListings() {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFav = (i) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="vip-section">
      <aside className="sidebar">
          {/* Filter */}
          <div className="filter-card">
            <div className="filter-card-title">🔎 ფილტრი</div>
            <select className="filter-select">
              <option>ყველა ვაკანსია</option>
              <option>ვაკანსია</option>
              <option>სტაჟირება</option>
            </select>
            <select className="filter-select">
              <option>ნებისმიერ ადგილას</option>
              <option>თბილისი</option>
              <option>ბათუმი</option>
              <option>ქუთაისი</option>
            </select>
            <select className="filter-select">
              <option>ყველა კატეგორია</option>
              <option>IT/პროგრამირება</option>
              <option>გაყიდვები</option>
              <option>მარკეტინგი</option>
              <option>ფინანსები</option>
            </select>
            <div className="filter-search-wrap">
              <input className="filter-search" placeholder="საკვანძო სიტყვები..."/>
              <span className="filter-search-icon">🔍</span>
            </div>
            <label className="filter-checkbox"><input type="checkbox"/> ხელფასით</label>
            <label className="filter-checkbox" style={{marginTop:4}}><input type="checkbox"/> მხოლოდ ახალი</label>
            <button className="filter-btn">ძებნა</button>
          </div>

          {/* Categories */}
          <div className="filter-card">
            <div className="filter-card-title">📂 კატეგორიები</div>
            <div className="cat-grid">
              {CATEGORIES.map((c,i)=>(
                <div key={i} className="cat-item">
                  <span className="cat-icon">{c.icon}</span>
                  <span className="cat-label">{c.label}</span>
                  <span className="cat-count">{c.count}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      <div className="vip-header">
        <div className="vip-header-left">
          <div className="vip-icon">★</div>
          <div>
            <div className="vip-title">VIP განცხადებები</div>
            <div className="vip-subtitle">{VIP_JOBS.length} აქტიური ვაკანსია</div>
          </div>
        </div>
        <div className="vip-col-headers">
          <span className="vip-col-label company">კომპანია</span>
          <span className="vip-col-label posted">გამოქვეყნდა</span>
          <span className="vip-col-label deadline">ბოლო ვადა</span>
        </div>
      </div>

      <div className="vip-divider" />

      <div className="vip-list">
        {VIP_JOBS.map((job, i) => (
          <div
            key={i}
            className={`job-card${job.isNew ? " has-new" : ""}`}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <button
              className={`fav-btn${favorites.has(i) ? " active" : ""}`}
              onClick={(e) => { e.stopPropagation(); toggleFav(i); }}
            >
              {favorites.has(i) ? "★" : "☆"}
            </button>

            <div className="badges">
              <span className="badge badge-vip">VIP</span>
              {job.isNew && <span className="badge badge-new">NEW</span>}
              {job.hasSalary && <span className="badge badge-salary">₾</span>}
            </div>

            <div className="job-info">
              <span className="job-title">{job.title}</span>
              <span className="job-category">{job.category}</span>
            </div>

            <span className="job-link-icon">↗</span>

            <div className="job-company">
              <div
                className="company-avatar"
                style={{
                  background: `${job.color}18`,
                  border: `1px solid ${job.color}33`,
                  color: job.color,
                }}
              >
                {job.initials}
              </div>
              <span className="company-name">{job.company}</span>
            </div>

            <div className="job-posted">{job.posted}</div>
            <div className="job-deadline">
              <DeadlineBadge daysLeft={job.daysLeft} label={job.deadline} />
            </div>
          </div>
        ))}
      </div>
      <div className="vip-footer">
        <span className="vip-footer-count">ნაჩვენებია {VIP_JOBS.length} შედეგი</span>
        <button className="vip-all-btn">ყველა VIP ვაკანსია →</button>
      </div>
    </div>
  );
}