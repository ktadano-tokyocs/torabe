// Hero.jsx — とらべ LP Hero Section
const Hero = ({ onNav }) => {
  const menuItems = [
    { id: 'features', label: '特長', icon: 'auto_awesome', bg: 'rgba(11,155,136,0.12)', color: '#0B9B88' },
    { id: 'concept', label: 'コンセプト', icon: 'lightbulb', bg: 'rgba(253,184,19,0.2)', color: '#d97706' },
    { id: 'schedule', label: '1日の流れ', icon: 'schedule', bg: 'rgba(59,130,246,0.12)', color: '#2563eb' },
    { id: 'staff', label: 'スタッフ', icon: 'groups', bg: 'rgba(20,184,166,0.12)', color: '#0f766e' },
    { id: 'fees', label: 'アクセス', icon: 'place', bg: 'rgba(16,185,129,0.12)', color: '#059669' },
    { id: 'faq', label: 'FAQ', icon: 'help_outline', bg: 'rgba(139,92,246,0.12)', color: '#7c3aed' },
  ];

  return (
    <section id="top" style={{
      position: 'relative', minHeight: '100vh', background: '#E6F5F2',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('../../assets/background.png')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.62, pointerEvents: 'none',
      }} />
      {/* Scrim */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.38) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Volunteer badge */}
      <div style={{ position: 'absolute', top: 76, right: 16, zIndex: 10 }}>
        <img src="../../assets/volunteer-logo.svg" alt="ボランティア募集中"
          style={{ height: 34, width: 'auto', maxWidth: 200, objectFit: 'contain' }} />
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px', textAlign: 'center' }}>
        <img src="../../assets/title.png" alt="とらすとベース フリースクール"
          style={{ maxWidth: 560, width: '80vw', marginBottom: 8, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.12))' }} />
        <img src="../../assets/torabe-log.png" alt=""
          style={{ height: 64, width: 64, objectFit: 'contain', marginBottom: 12 }} />
        <p style={{ fontSize: 'clamp(32px, 8vw, 52px)', fontWeight: 900, color: '#333', margin: '0 0 6px', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>歩 止 歩 止</p>
        <p style={{ fontSize: 15, fontWeight: 700, color: '#444', marginBottom: 4 }}>「歩いてもいい、止まってもいい」</p>
        <p style={{ fontSize: 12, color: '#666', marginBottom: 24 }}>東京都中野区 ／ アットホームな一軒家 ／ 個別対応（少人数）</p>

        {/* Menu grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, maxWidth: 520, width: '100%', marginBottom: 24 }}>
          {menuItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={e => { e.preventDefault(); onNav(item.id); }}
              style={{
                borderRadius: 16, border: '1px solid rgba(255,255,255,0.45)',
                background: 'rgba(255,255,255,0.88)',
                padding: '14px 10px', textDecoration: 'none',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                minHeight: 88, boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.88)'; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
                <span className="material-icons-outlined" style={{ color: item.color, fontSize: 24 }}>{item.icon}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#1F2937' }}>{item.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button onClick={() => onNav('cta')} style={{
          background: '#FDB813', color: '#1F2937', fontWeight: 700, fontSize: 15,
          padding: '14px 36px', borderRadius: 9999, border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(253,184,19,0.4)', display: 'flex', alignItems: 'center', gap: 8,
          transition: 'transform 0.2s, background 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04) translateY(-1px)'; e.currentTarget.style.background = '#FFD54F'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#FDB813'; }}
        >
          <span className="material-icons-outlined" style={{ fontSize: 20 }}>event_available</span>
          見学・説明会を申し込む（無料）
        </button>

        {/* Scroll hint */}
        <div style={{ marginTop: 24, color: '#0B9B88', animation: 'bounce 1.5s infinite' }}>
          <span className="material-icons-outlined" style={{ fontSize: 36 }}>keyboard_arrow_down</span>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
