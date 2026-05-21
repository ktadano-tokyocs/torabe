// Features.jsx — とらべ 4つの特長
const Features = ({ onNav }) => {
  const features = [
    {
      num: '1', title: '日本語', subtitle: '「表現する力」を一生の武器に',
      icon: 'menu_book', bg: '#E6F5F2', iconColor: '#0B9B88', cardBg: 'white', border: '#E5E7EB',
      desc: '学び続ける力の基盤として、日本語の学びを重視しています。',
      points: ['「読む」：物語の面白さに触れる', '「ことば」：語彙の獲得を目指す', '「書く」：創造的に作文する'],
      footer: 'これら三本柱で、個に応じたやり方で学びます。',
    },
    {
      num: '2', title: '探究', subtitle: '「なぜ？」を追いかける力が育つ',
      icon: 'explore', bg: '#FEF3C7', iconColor: '#d97706', cardBg: '#FFFBEB', border: '#FDE68A',
      desc: '「私たちはどのように自分らしく生き続けるのか？」などの6つの探究領域のもと学びます。',
      points: ['皆で探究するスタイル', '個別のマイプロジェクト'],
      footer: null,
    },
    {
      num: '3', title: '原体験', subtitle: '本物の体験が自信をつくる',
      icon: 'forest', bg: '#E6F5F2', iconColor: '#0B9B88', cardBg: 'white', border: '#E5E7EB',
      desc: '日々の公園などに加え、多くのアウトドアイベントを用意しています。',
      points: ['畑・川遊び・登山・乗馬', 'ムササビ観察・スキーなど'],
      footer: 'アウトドアに不安がある場合は、無理せず自分のペースで参加を選択できます。',
    },
    {
      num: '4', title: '個別評価', subtitle: '成績でなく「成長」で見守る',
      icon: 'trending_up', bg: '#E6F5F2', iconColor: '#0B9B88', cardBg: 'white', border: '#E5E7EB',
      desc: '学期ごとに評価を作成し、子どもの現状から将来像まで視野を広げた「学びの方向性」をまとめます。',
      points: ['保護者面談', '子ども面談'],
      footer: null,
    },
  ];

  return (
    <section id="features" style={{ padding: '60px 24px', background: '#F9FAFB' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0B9B88', marginBottom: 8 }}>Features</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1F2937', marginBottom: 10 }}>とらべが選ばれる4つの特長</h2>
          <p style={{ fontSize: 12, color: '#6B7280', maxWidth: 480, margin: '0 auto' }}>
            2004年設立の「東京コミュニティスクール (TCS)」が20年以上にわたり培ってきたノウハウを活かした第2校としてオープンしました。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginBottom: 28 }}>
          {features.map(f => (
            <div key={f.num} style={{ background: f.cardBg, borderRadius: 20, padding: '28px 24px', border: `1px solid ${f.border}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)', transition: 'box-shadow 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ padding: 6, background: f.bg, borderRadius: 8 }}>
                  <span className="material-icons-outlined" style={{ color: f.iconColor, fontSize: 20 }}>{f.icon}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1F2937' }}>
                  {f.num}. {f.title} — <span style={{ color: f.iconColor }}>{f.subtitle}</span>
                </h3>
              </div>
              <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 12, lineHeight: 1.7 }}>{f.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {f.points.map(pt => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#6B7280', marginBottom: 4 }}>
                    <span style={{ color: '#0B9B88', fontSize: 11, fontWeight: 700 }}>✓</span>{pt}
                  </li>
                ))}
              </ul>
              {f.footer && <p style={{ marginTop: 12, fontSize: 11, fontWeight: 600, color: '#0B9B88' }}>{f.footer}</p>}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => onNav('cta')} style={{
            background: '#FDB813', color: '#1F2937', fontWeight: 700, fontSize: 14,
            padding: '12px 28px', borderRadius: 9999, border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(253,184,19,0.35)', display: 'inline-flex', alignItems: 'center', gap: 8,
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.background = '#FFD54F'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#FDB813'; }}
          >
            <span className="material-icons-outlined" style={{ fontSize: 18 }}>event_available</span>
            これらを体感しに見学へ行く
          </button>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Features });
