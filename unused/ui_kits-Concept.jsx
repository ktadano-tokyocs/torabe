// Concept.jsx — とらべ コンセプトセクション
const Concept = () => {
  const pillars = [
    { icon: 'directions_walk', bg: '#E6F5F2', color: '#0B9B88', title: '「歩」く', desc: '右足と左足、両足で自分のペースで学んでいくことができる。' },
    { icon: 'pan_tool', bg: '#FEF3C7', color: '#d97706', title: '「止」まる', desc: '止まることも動き。自分の現在地を知る、振り返ることができる。' },
    { icon: 'people', bg: 'rgba(253,184,19,0.18)', color: '#92600A', title: '「つながる」', desc: 'スタッフ・仲間・保護者。自分だけじゃない、つながりの中で育ちあう。' },
  ];

  return (
    <section id="concept" style={{ padding: '60px 24px', background: 'white' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0B9B88', marginBottom: 8 }}>Concept</div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1F2937', marginBottom: 24, lineHeight: 1.5, wordBreak: 'keep-all' }}>
          私たちは、子どもたち一人ひとりが<br />
          「可能性と自信に満ちた学び手である」と信じています。
        </h2>

        {/* Framing box */}
        <div style={{ background: '#FFF9E6', border: '1px solid #FDE68A', borderRadius: 14, padding: '20px 24px', marginBottom: 28, textAlign: 'left' }}>
          <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.8 }}>
            「今日は休んでいい」「今日は頑張れた」。<br />
            その両方を肯定できる場所として、とらべは存在しています。<br />
            学校に感じる「なんとなくの違和感」の正体が、ここに来ると言語化できるかもしれません。
          </p>
        </div>

        {/* Philosophy box */}
        <div style={{ background: '#F9FAFB', borderRadius: 20, padding: '32px 28px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0B9B88', marginBottom: 24, lineHeight: 1.5 }}>
            「歩いてもいい、止まってもいい、つながっていい」<br />歩止歩止（HodoHodo）
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {pillars.map(p => (
              <div key={p.title} style={{ textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                  <span className="material-icons-outlined" style={{ color: p.color, fontSize: 34 }}>{p.icon}</span>
                </div>
                <div style={{ fontWeight: 700, color: '#1F2937', fontSize: 14, marginBottom: 6 }}>{p.title}</div>
                <p style={{ fontSize: 11, color: '#6B7280', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #E5E7EB', marginTop: 24, paddingTop: 20 }}>
            <p style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>
              自由な環境で、自分のペースで学ぶことができます。<br />
              一人ひとりの興味関心や特性に合わせた学びを実現します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Concept });
