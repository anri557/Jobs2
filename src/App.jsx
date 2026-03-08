import './index.css'
import FilterSection from './FilterSection';
import Vipjoblistings from './Vipjoblistings';
import SponsorsSection from './sponsor';
import Footer from './Footer';
const navLinks = [
  { id: 1, title: 'განცხადებები', isActive: true },
  { id: 2, title: 'გამოაქვეყნე', isActive: false },
  { id: 3, title: 'ბანერი', isActive: false },
  { id: 4, title: 'კითხვა-პასუხი', isActive: false },
  { id: 5, title: 'ჩვენ', isActive: false },
  { id: 6, title: 'კონტაქტი', isActive: false },
];
function App() {
  return (
    <div className="container">
      <header className="main-header">
        <div className='logoSection'>
          <div className="logo">
          <img src={`${import.meta.env.BASE_URL}Jobslogo.png`} alt="Jobs2.0" className='jobsGe' />
          </div>
          <div>
        <h6 className='logoText'>ჩვენ ვაკავშირებთ პროფესიონალებს <br/> და დამსაქმელებს 1998 წლიდან</h6>
        </div>

        </div>
   <div className='left-side'>
   <button className="btn-post">+განცხადება</button>
   <button className="lang-btn">EN</button>
   </div>
      </header>
      
      <nav className="modern-nav">
  <div className="nav-left">
    <button className="icon-btn">⭐</button> 
    <ul className="nav-list">
      {navLinks.map((link) => (
        <li key={link.id}>
          <a href="#" className={`nav-item ${link.isActive ? 'active' : ''}`}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>

  <div className="nav-right">
    <button className="ukraine-btn">Робота для біженців з України</button>
   
  </div>
</nav>
    <FilterSection />
     <Vipjoblistings />
     <SponsorsSection/>
     <Footer/>
    </div>
  )
}

export default App