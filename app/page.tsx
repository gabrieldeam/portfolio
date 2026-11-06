import { ArrowDown, ArrowUpRight, Code2, ExternalLink, Mail, MapPin, MessageCircle, Terminal } from 'lucide-react';

const projects = [
  { index: '01', slug: 'metriscript', name: 'Metriscript', domain: 'metriscript.com', type: 'Produto digital', description: 'Plataforma full stack para comercializar, licenciar e distribuir software.', tags: ['Full stack', 'Licenciamento'], tone: 'green' },
  { index: '02', slug: 'delvean', name: 'Delvean', domain: 'delvean.com', type: 'Plataforma', description: 'Experiência digital desenhada para simplificar jornadas e decisões complexas.', tags: ['Plataforma', 'UX'], tone: 'blue' },
  { index: '03', slug: 'baitautil', name: 'Baitautil', domain: 'baitautil.com.br', type: 'Serviço online', description: 'Produto que conecta pessoas às soluções que elas precisam no momento certo.', tags: ['Serviço', 'Sistemas'], tone: 'orange' },
  { index: '04', slug: 'posttoo', name: 'Posttoo', domain: 'posttoo.com', type: 'Ferramenta', description: 'Ferramentas para publicar, organizar e dar consistência a conteúdos.', tags: ['Conteúdo', 'Workflow'], tone: 'purple' },
  { index: '05', slug: 'regionaliza', name: 'Regionaliza', domain: 'regionaliza.com.br', type: 'Ecossistema', description: 'Tecnologia com contexto local para aproximar negócios e comunidades.', tags: ['Dados', 'Conexão'], tone: 'yellow' },
];

export default function Home() {
  return <main>
    <nav className="topbar" aria-label="Navegação principal">
      <a className="brand" href="#inicio"><img className="brand-avatar" src="/avatar.jpeg" alt="Gabriel Deam" /><span>Gabriel Deam</span></a>
      <div className="nav-links"><a href="#sobre">Sobre mim</a><a href="#projetos">Projetos</a><a href="/projetos-menores">Outros projetos</a><a href="/curriculo">Currículo</a><a href="#contato">Contato</a></div>
      <a className="availability" href="#contato"><span className="status-dot" /> Disponível para projetos</a>
    </nav>

    <section className="hero" id="inicio">
      <div className="hero-main">
        <p className="kicker"><Terminal size={14} /> Desenvolvedor & construtor de produtos</p>
        <h1>Eu transformo<br /><span>problemas complexos</span><br />em software claro.</h1>
        <p className="hero-text">Desenvolvo sistemas digitais que combinam lógica, design e uma visão prática de produto. Do primeiro fluxo ao produto em produção.</p>
        <div className="hero-actions"><a className="button button-primary" href="#sobre">Sobre mim <ArrowDown size={16} /></a><a className="text-link" href="/projetos/metriscript">Ver Metriscript <ArrowUpRight size={16} /></a></div>
      </div>
      <div className="code-panel" aria-label="Resumo profissional">
        <div className="code-header"><span><i /> <i /> <i /></span><small>gabriel.dev / profile.ts</small><Code2 size={15} /></div>
        <pre><code><span className="code-purple">const</span> developer = {'{'}{`\n`}  <span className="code-key">name</span>: <span className="code-green">&quot;Gabriel Deam&quot;</span>,{`\n`}  <span className="code-key">focus</span>: <span className="code-green">&quot;full-stack products&quot;</span>,{`\n`}  <span className="code-key">approach</span>: [{`\n`}    <span className="code-green">&quot;simple by default&quot;</span>,{`\n`}    <span className="code-green">&quot;built to scale&quot;</span>{`\n`}  ],{`\n`}  <span className="code-key">status</span>: <span className="code-green">&quot;building&quot;</span>{`\n`}{'}'};</code></pre>
        <div className="code-footer"><span className="pulse" /> sempre aprendendo, sempre construindo</div>
      </div>
      <div className="hero-meta"><span>01 — INTRO</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="projects-section" id="projetos">
      <div className="section-heading"><div><p className="kicker"><span className="line-dot" /> Projetos</p><h2>Produtos que<br /><em>estão no mundo.</em></h2></div><p className="section-intro">Sistemas reais, problemas reais.<br />Clique para conhecer cada projeto.</p></div>
      <div className="project-grid">{projects.map((project) => <a className={`project-card project-card--${project.tone}`} href={`/projetos/${project.slug}`} key={project.domain}><div className="project-top"><span>{project.index}</span><span className="project-type">{project.type}</span></div><div className="project-body"><div className="project-number">↗</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-bottom"><span>{project.domain}</span><span className="circle-arrow"><ExternalLink size={15} /></span></div></a>)}</div>
      <div className="projects-more"><span>Também tem projetos menores, temporários e em desenvolvimento.</span><a href="/projetos-menores">Ver outros projetos <ArrowUpRight size={15} /></a></div>
    </section>

    <section className="about-section" id="sobre">
      <div className="about-home-heading"><p className="kicker"><span className="line-dot" /> Sobre mim</p><span className="profile-index">02 / 03</span></div>
      <div className="about-home-grid"><div className="about-profile-photo"><img src="/avatar.jpeg" alt="Gabriel de Almeida Machado" /><span>Gabriel<br />Deam</span></div><div><p className="about-lead">Sou Gabriel de Almeida Machado, desenvolvedor Full Stack apaixonado por transformar problemas de negócio em sistemas claros, seguros e sustentáveis.</p><p className="about-support">Atuo entre frontend, backend e dados — da manutenção evolutiva de sistemas corporativos à construção de produtos próprios do zero.</p><div className="about-actions"><a className="button button-dark-about" href="/curriculo">Ver currículo <ArrowUpRight size={16} /></a><a className="text-link" href="https://wa.me/5527981690080" target="_blank" rel="noreferrer">Vamos conversar <MessageCircle size={16} /></a></div></div><div className="about-facts"><div><span>Localização</span><b>Vila Velha · ES</b></div><div><span>Experiência</span><b>Full Stack · sistemas corporativos</b></div><div><span>Formação</span><b>Sistemas de Informação · UVV</b></div><div><span>Projeto próprio</span><b>Metriscript · plataforma de licenciamento</b></div></div></div>
    </section>

    <section className="contact-section" id="contato"><div><p className="kicker"><span className="line-dot" /> Próximo projeto</p><h2>Tem uma ideia?<br /><em>Vamos construir.</em></h2></div><div className="contact-side"><p>Se você está começando algo novo ou precisa dar forma a um produto digital, me escreva.</p><a className="button button-light" href="https://wa.me/5527981690080" target="_blank" rel="noreferrer">Entrar em contato <MessageCircle size={16} /></a><div className="location"><MapPin size={15} /> Brasil · trabalhando remotamente</div></div></section>
    <footer className="footer"><span>© 2026 Gabriel Deam</span><div><a href="mailto:oi@gabrieldeam.com">Email</a><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </main>;
}
