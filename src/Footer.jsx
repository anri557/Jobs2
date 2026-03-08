import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-text">jobs<span>.ge</span></div>
              <p className="footer-tagline">ჩვენ ვაკავშირებთ პროფესიონალებს<br/>და დამსაქმელებს 1998 წლიდან.<br/>საქართველოს #1 სამუშაო პლატფორმა.</p>
            </div>
            <div>
              <div className="footer-col-title">სერვისები</div>
              {["ვაკანსიების ძებნა","CV-ს განახლება","კომპანიები","სტაჟირება"].map(l=><span key={l} className="footer-link">{l}</span>)}
            </div>
            <div>
              <div className="footer-col-title">კომპანიებს</div>
              {["განცხადების გამოქვეყნება","ბანერი","ფასები","კორპორატიული"].map(l=><span key={l} className="footer-link">{l}</span>)}
            </div>
            <div>
              <div className="footer-col-title">კონტაქტი</div>
              {["ჩვენს შესახებ","დახმარება","კონფიდენციალობა","პირობები"].map(l=><span key={l} className="footer-link">{l}</span>)}
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2024 jobs.ge — ყველა უფლება დაცულია</span>
            <span className="footer-copy">🇬🇪 Made in Georgia</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer