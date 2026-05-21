// Staff.jsx — スタッフ紹介セクション
const Staff = () => {
  const staffList = [
    {
      name: '永易 江麻', role: 'Director', img: '../../assets/emachan.jpg',
      bio: 'TCS副理事長、東京都フリースクール等ネットワーク事務局長。教職課程を実体験するため小学校・幼稚園教諭免許を取得。政策提言活動も行う。二児の母。',
      quote: '「子どもたちが自分らしく学べる場所を、20年かけてつくってきました。ここでの出会いが、きっとお子さんの力になると信じています。」',
    },
    {
      name: '稲葉 祐一朗', role: 'Master', img: '../../assets/inabi.jpg',
      bio: 'カナダ語学留学後、デンマークのフォルケホイスコーレで「対話」中心の学びに魅せられる。帰国後、栃木県でフリースクール設立・運営経験あり。',
      quote: '「デンマークで学んだのは、"対話"が人を育てるということ。子どもの『なんで？』に、一緒に向き合いたいと思っています。」',
    },
    {
      name: '大知里 由', role: 'Anchor', img: '../../assets/yuyu.jpg',
      bio: '生粋の芸術畑出身で、アートセラピーや心理学などを学ぶ。とらべの子どもたちやスタッフを温かく包み込む、母的な存在。',
      quote: '「どんな状態で来てくれても、まず『よく来てくれたね』と伝えたい。ここが、あなたの安心できる場所になりますように。」',
    },
  ];

  return (
    <section id="staff" style={{ padding: '60px 24px', background: '#F9FAFB' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0B9B88', marginBottom: 8 }}>Staff</div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1F2937', marginBottom: 8 }}>共に学びを創るスタッフ</h2>
        <p style={{ fontSize: 12, color: '#6B7280', marginBottom: 36 }}>多様なバックグラウンドを持つスタッフが、子どもたち一人ひとりに寄り添います。</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {staffList.map(s => (
            <div key={s.name} style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'}
            >
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ padding: '18px 20px', textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#0B9B88', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>{s.role}</span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1F2937', marginBottom: 10 }}>{s.name}</h3>
                <p style={{ fontSize: 11, color: '#6B7280', lineHeight: 1.7, marginBottom: 12, flex: 1 }}>{s.bio}</p>
                <blockquote style={{ borderLeft: '2.5px solid rgba(11,155,136,0.35)', paddingLeft: 10, margin: 0 }}>
                  <p style={{ fontSize: 11, color: '#0a7c6d', fontStyle: 'italic', lineHeight: 1.7 }}>{s.quote}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Staff });
