import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Building2, Check, Clock3, ExternalLink, MessageCircle, Radio, TentTree } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outros projetos — Gabriel Deam',
  description: 'Projetos menores, temporários e em desenvolvimento por Gabriel Deam.',
};

const projects = [
  {
    index: '01',
    name: 'Slapnook',
    type: 'Rede social',
    status: 'Em desenvolvimento',
    statusType: 'building',
    description: 'Rede social de conversas ao vivo, com aplicativo e site em desenvolvimento.',
    tags: ['App', 'Web', 'Tempo real'],
    icon: Radio,
  },
  {
    index: '02',
    name: 'Rizzo e Justo',
    type: 'Site institucional',
    status: 'Concluído',
    statusType: 'done',
    description: 'Site desenvolvido para apresentar a marca, seus serviços e sua presença digital.',
    tags: ['Web', 'Institucional'],
    icon: Check,
    url: 'https://rizzoejusto.com.br',
  },
  {
    index: '03',
    name: 'Casa do Governador',
    type: 'Sites temporários',
    status: 'Projeto concluído',
    statusType: 'done',
    description: 'Dois sites temporários desenvolvidos para eventos na Casa do Governador, em Vila Velha.',
    tags: ['Eventos', 'Temporário', 'Vila Velha · ES'],
    icon: TentTree,
  },
  {
    index: '04',
    name: 'Gestão de Clínicas',
    type: 'Sistema de gestão',
    status: 'Em desenvolvimento',
    statusType: 'building',
    description: 'Sistema em desenvolvimento para centralizar a gestão e a rotina de clínicas.',
    tags: ['Gestão', 'Saúde', 'Web'],
    icon: Building2,
  },
];

export default function MinorProjectsPage() {
  return <main className="minor-projects-page">
    <nav className="detail-nav"><a className="brand" href="/#inicio"><img className="brand-avatar" src="/avatar.jpeg" alt="Gabriel Deam" /><span>Gabriel Deam</span></a><a className="back-link" href="/#projetos"><ArrowLeft size={15} /> Projetos principais</a></nav>

    <header className="minor-hero"><div><p className="kicker"><span className="line-dot" /> Portfólio · outros projetos</p><h1>Projetos menores,<br /><em>ideias em movimento.</em></h1><p>Uma seleção de trabalhos menores, experimentos, sites temporários e produtos que ainda estão em desenvolvimento.</p></div><div className="minor-hero-mark"><span>GABRIEL.DEAM</span><b>small<br />projects</b><small>web · app · experiments</small></div></header>

    <section className="minor-project-list"><div className="minor-section-label"><span>01 / PROJETOS</span><p>Trabalhos com diferentes escalas, prazos e objetivos.</p></div><div className="minor-cards">{projects.map((project) => { const Icon = project.icon; return <article className={`minor-card minor-card--${project.statusType}`} key={project.name}><div className="minor-card-top"><span>{project.index}</span><span>{project.type}</span></div><div className="minor-card-main"><div className="minor-icon"><Icon size={22} /></div><h2>{project.name}</h2><p>{project.description}</p><div className="minor-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="minor-card-bottom"><span className="minor-status">{project.statusType === 'done' ? <Check size={13} /> : <Clock3 size={13} />}{project.status}</span>{project.url ? <a href={project.url} target="_blank" rel="noreferrer">Visitar site <ExternalLink size={14} /></a> : <span className="minor-no-link">Link em breve</span>}</div></article>; })}</div></section>

    <section className="minor-note"><div><p className="kicker"><span className="line-dot" /> Em construção</p><h2>Nem todo projeto<br /><em>começa grande.</em></h2></div><div><p>Alguns trabalhos nascem como uma entrega pontual. Outros começam como uma ideia que vai ganhando forma com o tempo. Esta página reúne esses projetos e será atualizada conforme novos trabalhos forem documentados.</p><a className="button button-dark" href="https://wa.me/5527981690080" target="_blank" rel="noreferrer">Falar comigo <MessageCircle size={16} /></a></div></section>

    <footer className="detail-footer minor-footer"><a href="/#projetos"><ArrowLeft size={15} /> Voltar aos projetos</a><a href="/#contato">Vamos conversar <ArrowUpRight size={15} /></a></footer>
  </main>;
}
