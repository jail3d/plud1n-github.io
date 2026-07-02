/* peludin_site — content panels: ops · notes · arsenal · contact */
const DSP = window.Pelud1nDesignSystem_5024cb;

function SectionHead({ n, file, title }) {
  const { GlitchText } = DSP;
  return (
    <React.Fragment>
      <div className="eyebrow" style={{ marginBottom: 8 }}>// {n} · {file}</div>
      <GlitchText as="h2" style={{ fontSize: 40, margin: '0 0 22px' }}>{title}</GlitchText>
    </React.Fragment>
  );
}

function Ops() {
  const { Window, Tabs, Card, Badge } = DSP;
  const [filter, setFilter] = React.useState('all');
  const items = [
    { name: 'Active Directory', cat: 'network', summary: 'Enumeración con BloodHound, Kerberoasting y movimiento lateral hasta Domain Admin en laboratorio.', t1: 'kerberos', t2: 'lateral', year: 'lab' },
    { name: 'Web & API', cat: 'web', summary: 'OWASP Top 10, fuzzing con gobuster / ffuf, SQLi y explotación manual.', t1: 'owasp', t2: 'sqli', year: 'lab' },
    { name: 'Linux privesc', cat: 'network', summary: 'Enumeración, SUID / cron y GTFOBins: camino a root en máquinas de práctica.', t1: 'privesc', t2: 'linux', year: 'lab' },
    { name: 'Cloud & IAM', cat: 'cloud', summary: 'Fundamentos de AWS, Azure y GCP, IAM y modelo de responsabilidad compartida (ICCA).', t1: 'aws', t2: 'iam', year: 'ICCA' },
    { name: 'Post-explotación', cat: 'network', summary: 'Volcado de credenciales, pivoting y persistencia con impacket y mimikatz.', t1: 'pivoting', t2: 'ad', year: 'lab' },
    { name: 'TFM · Red Team', cat: 'redteam', summary: 'Trabajo Fin de Máster orientado a Red Team, calificado con Sobresaliente.', t1: 'red-team', t2: 'tfm', year: '2026' },
  ];
  const tabs = [
    { id: 'all', label: 'todo', count: items.length },
    { id: 'web', label: 'web', glyph: '>' },
    { id: 'network', label: 'infra · ad' },
    { id: 'cloud', label: 'cloud' },
    { id: 'redteam', label: 'red team' },
  ];
  const shown = filter === 'all' ? items : items.filter((i) => i.cat === filter);
  return (
    <section id="ops" style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px' }}>
      <SectionHead n="01" file="ops.log" title="LABORATORIO & CTF" />
      <Window title="ops.log — pelud1n" block>
        <div style={{ marginBottom: 16 }}><Tabs items={tabs} value={filter} onChange={setFilter} /></div>
        <div className="ops-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
          {shown.map((it) => (
            <Card key={it.name} ticks padding="md" style={{ display: 'flex', flexDirection: 'column', gap: 11, minHeight: 168 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>{it.cat} · {it.year}</span>
                <Badge tone="mint">lab</Badge>
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', fontSize: 22, color: 'var(--color-text)', lineHeight: 1 }}>{it.name}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--color-text-secondary)', flex: 1 }}>{it.summary}</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <Badge tone="neutral">{it.t1}</Badge>
                <Badge tone="neutral">{it.t2}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </Window>
    </section>
  );
}

function Notes() {
  const { Window, Badge } = DSP;
  const posts = [
    { plat: 'HTB', tone: 'mint', title: 'Writeups de máquinas de HackTheBox', tags: ['htb', 'pentesting'], date: 'próximamente', read: 'pronto' },
    { plat: 'THM', tone: 'mint', title: 'TryHackMe — rooms y rutas de aprendizaje', tags: ['thm', 'labs'], date: 'próximamente', read: 'pronto' },
    { plat: 'AD', tone: 'violet', title: 'Active Directory: de la enumeración a Domain Admin', tags: ['active-directory', 'lateral'], date: 'próximamente', read: 'pronto' },
    { plat: 'CLOUD', tone: 'red', title: 'Seguridad en cloud y fundamentos DevSecOps', tags: ['cloud', 'devsecops'], date: 'próximamente', read: 'pronto' },
  ];
  return (
    <section id="notes" style={{ maxWidth: 1040, margin: '0 auto', padding: '56px 24px' }}>
      <SectionHead n="02" file="writeups/" title="WRITEUPS" />
      <Window title="writeups/ — pelud1n" block>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {posts.map((p, i) => (
            <a key={p.title} href="#" style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: '14px 8px', textDecoration: 'none',
              borderTop: i ? '1px solid var(--color-border)' : 'none', color: 'inherit',
            }} onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-surface-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
              <Badge tone={p.tone} style={{ minWidth: 70, justifyContent: 'center' }}>{p.plat}</Badge>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: 'var(--color-text)' }}>{p.title}</div>
                <div style={{ display: 'flex', gap: 9, marginTop: 4 }}>
                  {p.tags.map((t) => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-tertiary)' }}>#{t}</span>)}
                </div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-tertiary)', whiteSpace: 'nowrap' }}>
                <div>{p.date}</div><div style={{ marginTop: 3, color: 'var(--blood-bright)' }}>{p.read} →</div>
              </div>
            </a>
          ))}
        </div>
      </Window>
    </section>
  );
}

function Arsenal() {
  const { Window } = DSP;
  const groups = [
    { phase: 'recon & enum', tools: ['nmap', 'gobuster', 'netcat', 'whatweb'] },
    { phase: 'explotación', tools: ['metasploit', 'searchsploit', 'Burp Suite', 'sqlmap'] },
    { phase: 'post-ex · ad', tools: ['BloodHound', 'impacket', 'mimikatz'] },
    { phase: 'detección · iocs', tools: ['Wireshark', 'registro Windows', 'Visor de eventos', 'análisis de tráfico'] },
    { phase: 'cloud · icca', tools: ['AWS', 'Azure', 'GCP', 'IAM'] },
    { phase: 'entorno & docs', tools: ['Kali Linux', 'Bash', 'Markdown', 'CVSS'] },
  ];
  return (
    <section id="arsenal" style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px' }}>
      <SectionHead n="03" file="arsenal.sys" title="HERRAMIENTAS" />
      <Window title="arsenal.sys — pelud1n" block>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {groups.map((g) => (
            <div key={g.phase} style={{ border: '1px solid var(--color-border)', padding: '14px 15px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 7, height: 7, background: 'var(--blood)' }} />
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--color-text)' }}>{g.phase}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {g.tools.map((t) => (
                  <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-text-secondary)', background: 'var(--color-surface-inset)', border: '1px solid var(--color-border)', padding: '4px 9px' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Window>
    </section>
  );
}

function Contact() {
  const { Window, Button, Terminal, Prompt, Input } = DSP;
  const [form, setForm] = React.useState({ handle: '', email: '', msg: '' });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <section id="contact" style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 24px' }}>
      <SectionHead n="04" file="./contacto" title="CONTACTO" />
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '380px minmax(0,1fr)', gap: 28, alignItems: 'start' }}>
        <Window title="PELUD1N://TAKEOVER" icon block
          actions={<React.Fragment>
            <Button variant="ghost" size="sm">no</Button>
            <Button variant="ghost" size="sm">no</Button>
            <Button size="sm">hablemos</Button>
          </React.Fragment>}>
          buscas talento en<br />seguridad ofensiva?
        </Window>

        <Terminal title="root@pelud1n: ~/contacto" status={sent ? 'sent' : 'open'}>
          <Prompt>./connect --secure</Prompt>
          <div style={{ color: 'var(--color-text-secondary)', marginBottom: 6 }}>linkedin.com/in/pelud1n · github.com/jail3d · respondo pronto</div>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '6px 0' }}>
              <div><span style={{ color: 'var(--blood-bright)' }}>[ok]</span> paquete recibido de <span style={{ color: 'var(--bone-pure)' }}>{form.handle || 'anon'}</span></div>
              <div style={{ color: 'var(--color-text-secondary)' }}>te respondo por LinkedIn o a {form.email || 'tu correo'}.</div>
              <Prompt cursor blink />
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 13, paddingTop: 8 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
                <Input label="alias" prefix="$" placeholder="tu nombre" value={form.handle} onChange={set('handle')} />
                <Input label="email" prefix="@" type="email" placeholder="tu@dominio.com" value={form.email} onChange={set('email')} />
              </div>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>mensaje</span>
                <textarea rows="3" placeholder="puesto, equipo, en qué trabajáis..." value={form.msg} onChange={set('msg')}
                  style={{ background: 'var(--color-surface-inset)', border: '1px solid var(--color-border-strong)', borderRadius: 0, padding: '10px 12px', resize: 'vertical', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-sm)', color: 'var(--color-text)', outline: 'none' }} />
              </label>
              <div><Button type="submit" glyph=">">enviar</Button></div>
            </form>
          )}
        </Terminal>
      </div>
    </section>
  );
}

Object.assign(window, { Ops, Notes, Arsenal, Contact });
