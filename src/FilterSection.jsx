function FilterSection() {
  return (
    
    <div className="filter-strip">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-tag">🇬🇪 საქართველოს #1 სამუშაო პლატფორმა</div>
          <h1>იპოვე შენი <span>სიზმრების სამსახური</span><br/>დღესვე</h1>
          <p className="hero-sub">12,400+ აქტიური ვაკანსია • 3,200+ კომპანია • 1998 წლიდან</p>

          <div className="hero-search-box">
            <input placeholder="პოზიცია, კომპანია, სიტყვა..." style={{fontSize:14}}/>
            <div className="hero-search-divider"/>
          
            <select className="modern-select">
        <option>ნებისმიერ ადგილას</option>
        <option>თბილისი</option>
        <option>აფხაზეთი ა/რ</option>
        <option>აჭარის ა/რ</option>
        <option>გურია</option>
        <option>იმერეთი </option>
        <option>კახეთი</option>
        <option>მცხეთა/მთიანეთი</option>
        <option>რაჭა ლეჩხუმი ქვ. სვანეთი</option>
        <option>სამეგრელო-ზემო სვანეთი</option>
        <option>სამცხე-ჯავახეთი</option>
        <option>ქვემო ქართლი</option>
        <option>შიდა ქართლი</option>
        <option>უცხოეთი</option>
        <option>დისტანციური</option>
        </select>

            <button className="hero-search-btn">🔍 ძებნა</button>
          </div>

          <div className="hero-tags">
            <span>პოპულარული:</span>
            {["IT/პროგრამირება","გაყიდვები","მარკეტინგი","ფინანსები","მენეჯმენტი"].map(t=>(
              <span key={t} className="hero-tag-pill">{t}</span>
            ))}
          </div>
        </div>
      </section>
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            {num:"12,400+", label:"აქტიური\nვაკანსია"},
            {num:"3,200+",  label:"პარტნიორი\nკომპანია"},
            {num:"48,000+", label:"რეგისტრირებული\nმომხმარებელი"},
            {num:"26",      label:"წელი\nბაზარზე"},
          ].map((s,i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label" style={{whiteSpace:"pre-line"}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default FilterSection;