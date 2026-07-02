/* peludin_site — shell + hero + stats + footer */
const DS = window.Pelud1nDesignSystem_5024cb;

function TopBar({ sections, active }) {
  const { Logo } = DS;
  const [clock, setClock] = React.useState('--:--:--');
  React.useEffect(() => {
    const pad = (n) => String(n).padStart(2, '0');
    const t = () => { const d = new Date(); setClock(pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds())); };
    t(); const id = setInterval(t, 1000); return () => clearInterval(id);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', gap: 14, height: 52,
      padding: '0 18px', background: 'rgba(10,10,11,.92)', backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)', borderBottom: '1px solid var(--color-border-strong)',
    }}>
      <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
        <Logo variant="mark" />
        <Logo size="sm" cursor />
      </a>
      <nav className="topnav" style={{ marginLeft: 6 }}>
        {sections.map((s) => (
          <a key={s.id} href={'#' + s.id} className={active === s.id ? 'on' : ''}>{s.label}</a>
        ))}
      </nav>
      <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-pixel)', fontSize: 10, textTransform: 'uppercase',
        letterSpacing: '.06em', color: 'var(--color-text-tertiary)' }}>
        sistema:&nbsp;<span style={{ color: 'var(--blood-bright)' }}>comprometido</span>
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-secondary)' }}>{clock}</span>
    </header>
  );
}

function Ticker() {
  const bits = ['// sistema comprometido', 'pelud1n estuvo aquí', 'acceso concedido', 'cífralo todo', 'no confíes en nada', 'root@pelud1n:~#'];
  const run = [...bits, ...bits].map((b, i) => <span key={i}>{b}<b>&nbsp;//</b></span>);
  return (
    <div className="ticker"><div className="ticker__run">{run}{run}</div></div>
  );
}

function Hero() {
  const { GlitchText, Button, Terminal, Prompt, Badge, Window } = DS;
  const cwins = ['SCAN.LOG', 'PAYLOAD.SH', 'WHOAMI.EXE', 'ROOT.KEY', 'NMAP.OUT'];
  return (
    <section id="home" style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '64px 24px 48px' }}>
      <div className="cascade" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: .42 }} aria-hidden="true">
        {cwins.map((t, i) => (
          <div key={t} className="cwin" style={{ right: 30 + i * 24, top: 24 + i * 30 }}>
            <Window title={t} inert>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-tertiary)' }}>pelud1n takeover //{i + 1}</span>
            </Window>
          </div>
        ))}
      </div>

      <div className="hero-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 440px', gap: 44, alignItems: 'center' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>// seguridad ofensiva · red team</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', whiteSpace: 'nowrap' }}>
            <span className="bigword live" data-text="pelud1n">pelud<span className="one">1</span>n</span>
            <span style={{ display: 'inline-block', width: 26, height: 56, background: 'var(--bone-pure)', marginLeft: 8, animation: 'peludin-blink 1.05s steps(1) infinite' }} />
          </div>
          <GlitchText as="div" live style={{ fontSize: 32, marginTop: 18 }}>ENTRA. DOCUMENTA. APRENDE.</GlitchText>
          <p style={{ margin: '18px 0 0', maxWidth: 440, fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            Juan Carlos Currás Gil — operador de seguridad ofensiva, recién titulado en un Máster en hacking ético (Sobresaliente). Practico el ciclo completo de intrusión en entornos de laboratorio controlados: reconocimiento, explotación, post-explotación y documentación. Voy hacia DevSecOps.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
            <Button as="a" href="#ops" glyph=">">ver trabajo</Button>
            <Button as="a" href="#contact" variant="ghost">contactar</Button>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 22 }}>
            <Badge tone="mint" dot>disponible</Badge>
            <Badge tone="neutral">eJPT</Badge>
            <Badge tone="neutral">ICCA</Badge>
            <Badge tone="neutral">MÁSTER</Badge>
          </div>
        </div>

        <Terminal title="root@pelud1n: ~" status="online">
          <Prompt>whoami</Prompt>
          <div style={{ color: 'var(--color-text-secondary)' }}>pelud1n — pentester junior / red team</div>
          <Prompt>cat ./focus.txt</Prompt>
          <div style={{ color: 'var(--color-text)' }}>
            <span style={{ color: 'var(--blood-bright)' }}>&gt;</span> reconocimiento y enumeración<br />
            <span style={{ color: 'var(--blood-bright)' }}>&gt;</span> explotación y post-explotación<br />
            <span style={{ color: 'var(--blood-bright)' }}>&gt;</span> active directory · movimiento lateral<br />
            <span style={{ color: 'var(--blood-bright)' }}>&gt;</span> cloud &amp; IAM · aws/azure/gcp
          </div>
          <Prompt cursor blink />
        </Terminal>
      </div>
    </section>
  );
}

function Stats() {
  const { CornerFrame } = DS;
  const stats = [
    { n: '7+', label: 'años autodidacta', c: 'mint' },
    { n: '2', label: 'certs · ejpt / icca', c: 'violet' },
    { n: '3', label: 'cloud · aws azure gcp', c: 'red' },
    { n: 'B2', label: 'inglés · +de a2', c: 'mint' },
  ];
  const col = { mint: 'var(--blood-bright)', violet: 'var(--bruise)', red: 'var(--blood)' };
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: '8px 24px 16px' }}>
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, borderTop: '1px solid var(--color-border-strong)', paddingTop: 26 }}>
        {stats.map((s) => (
          <CornerFrame key={s.label} color={s.c} style={{ padding: '16px 18px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontStyle: 'italic', fontSize: 42, lineHeight: 1, color: col[s.c] }}>{s.n}</div>
            <div style={{ marginTop: 8, fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>{s.label}</div>
          </CornerFrame>
        ))}
      </div>
    </section>
  );
}

function SiteFooter() {
  const { Logo } = DS;
  const links = [
    { l: 'github', href: 'https://github.com/jail3d' },
    { l: 'linkedin', href: 'https://www.linkedin.com/in/pelud1n/' },
    { l: 'eJPT', href: 'https://certs.ine.com/19b2e5c6-c36e-43ea-a8bd-4cf86fee349c' },
    { l: 'ICCA', href: 'https://certs.ine.com/3d3f1254-0dc8-400f-a6cf-6e017b60fa42' },
  ];
  return (
    <footer style={{ borderTop: '1px solid var(--color-border-strong)', background: 'var(--color-bg-elevated)', marginTop: 40 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '30px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Logo variant="mark" />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>cífralo todo · no confíes en nada</span>
        </div>
        <nav style={{ display: 'flex', gap: 16 }}>
          {links.map((it) => (
            <a key={it.l} href={it.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.04em', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>{it.l}</a>
          ))}
        </nav>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-tertiary)' }}>© 2026 pelud1n</span>
      </div>
    </footer>
  );
}

Object.assign(window, { TopBar, Ticker, Hero, Stats, SiteFooter });
