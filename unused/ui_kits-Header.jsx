// Header.jsx — とらべ LP Header Component
const Header = ({ onNav, activeSection }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y < 80) { setHidden(false); }
      else {
        const delta = y - lastY.current;
        if (delta > 8) setHidden(true);
        else if (delta < -8) setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const navItems = [
    { id: 'concept', label: 'コンセプト' },
    { id: 'features', label: '特長' },
    { id: 'schedule', label: '1日の流れ' },
    { id: 'staff', label: 'スタッフ' },
    { id: 'fees', label: '料金' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: '#0B9B88',
      boxShadow: scrolled ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      backdropFilter: 'blur(4px)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <div onClick={() => onNav('top')} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <img src="../../assets/torabe-log-white.png" alt="" style={{ height: 34, width: 34, objectFit: 'contain' }} />
          <span style={{ color: 'white', fontWeight: 700, fontSize: 18, letterSpacing: '0.03em' }}>とらべ</span>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="desktop-nav">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={e => { e.preventDefault(); onNav(item.id); }}
              style={{ color: 'white', fontSize: 13, fontWeight: 500, textDecoration: 'none', opacity: activeSection === item.id ? 1 : 0.85, transition: 'color 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.target.style.color = '#FDB813'}
              onMouseLeave={e => e.target.style.color = 'white'}
            >{item.label}</a>
          ))}
          <button onClick={() => onNav('cta')} style={{
            background: '#FDB813', color: '#1F2937', fontWeight: 700, fontSize: 13,
            padding: '8px 18px', borderRadius: 9999, border: 'none', cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(253,184,19,0.4)', whiteSpace: 'nowrap',
            transition: 'background 0.2s, transform 0.15s',
          }}
            onMouseEnter={e => { e.target.style.background = '#FFD54F'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.background = '#FDB813'; e.target.style.transform = 'translateY(0)'; }}
          >見学・説明会へ</button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(o => !o)} className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 4 }}>
          <span className="material-icons-outlined" style={{ fontSize: 28 }}>{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB' }} className="mobile-nav">
          <div style={{ background: '#0B9B88', padding: '12px 20px' }}>
            <button onClick={() => { onNav('cta'); setMobileOpen(false); }} style={{
              width: '100%', background: '#FDB813', color: '#1F2937', fontWeight: 700,
              fontSize: 15, padding: '14px 20px', borderRadius: 9999, border: 'none', cursor: 'pointer',
            }}>見学・説明会に申し込む</button>
          </div>
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={e => { e.preventDefault(); onNav(item.id); setMobileOpen(false); }}
              style={{ display: 'block', padding: '14px 24px', borderBottom: '1px solid #F3F4F6', color: '#374151', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}
            >{item.label}</a>
          ))}
        </div>
      )}
    </header>
  );
};

Object.assign(window, { Header });
