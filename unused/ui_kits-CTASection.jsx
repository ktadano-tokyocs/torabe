// CTASection.jsx — 見学申込 CTA + Footer
const CTASection = () => {
  return (
    <>
      <section id="cta" style={{ background: '#0B9B88', padding: '60px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: 'white', marginBottom: 12 }}>
            まずは見学・説明会へ
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginBottom: 28, lineHeight: 1.8 }}>
            とらべのことをもっと知りたい方は、まずは見学・説明会へお越しください。<br />
            お子さん同伴OK。個別相談無料。約1〜2時間。
          </p>

          {/* Feature chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, maxWidth: 480, margin: '0 auto 28px' }}>
            {[
              { icon: 'schedule', title: '約1〜2時間', sub: '時間に余裕を持って' },
              { icon: 'child_care', title: 'お子さん同伴OK', sub: '実際の雰囲気をご体感ください' },
              { icon: 'chat', title: '個別相談 無料', sub: '入学後の不安も遠慮なく' },
            ].map(c => (
              <div key={c.title} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', borderRadius: 12, padding: '14px 10px', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
                <span className="material-icons-outlined" style={{ color: '#FDB813', fontSize: 28, display: 'block', marginBottom: 6 }}>{c.icon}</span>
                <p style={{ color: 'white', fontWeight: 700, fontSize: 12, marginBottom: 3 }}>{c.title}</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, lineHeight: 1.4 }}>{c.sub}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <button style={{
              background: '#FDB813', color: '#1F2937', fontWeight: 700, fontSize: 17,
              padding: '16px 40px', borderRadius: 9999, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(253,184,19,0.5)', display: 'flex', alignItems: 'center', gap: 8,
              animation: 'pulseBorder 2s infinite',
            }}>
              <span className="material-icons-outlined" style={{ fontSize: 22 }}>event_available</span>
              見学・説明会・体験の申し込みはこちら
            </button>
            <a href="tel:0353189700" style={{
              background: 'rgba(255,255,255,0.18)', color: 'white', fontWeight: 700, fontSize: 14,
              padding: '12px 28px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.3)',
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span className="material-icons-outlined" style={{ fontSize: 18 }}>phone</span>
              電話で問い合わせる
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0B9B88', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '28px 24px 20px' }}>
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 14, padding: '24px', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
            <img src="../../assets/torabe-log-white.png" alt="" style={{ height: 40, width: 40, objectFit: 'contain', marginBottom: 8, display: 'block', margin: '0 auto 8px' }} />
            <h3 style={{ color: 'white', fontWeight: 700, fontSize: 17, marginBottom: 14 }}>とらすとベース フリースクール</h3>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span className="material-icons-outlined" style={{ fontSize: 14 }}>place</span>
                〒165-0026 東京都中野区新井2-35-2
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span className="material-icons-outlined" style={{ fontSize: 14 }}>phone</span>
                <a href="tel:0353189700" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>TEL: 03-5318-9700</a>
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>
                運営：NPO法人東京コミュニティスクール
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
            © 2026 Trust Base Free School. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

Object.assign(window, { CTASection });
