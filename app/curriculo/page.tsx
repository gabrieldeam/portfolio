import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Download, Mail, MapPin, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Currículo — Gabriel de Almeida Machado',
  description: 'Currículo profissional de Gabriel de Almeida Machado, desenvolvedor Full Stack.',
};

const stack = [
  ['Backend', 'C# · .NET · Go · Java · Spring Boot'],
  ['Frontend', 'Blazor · React · Angular · JavaScript · HTML5 · CSS3'],
  ['Dados', 'SQL · SQL Server · PostgreSQL · MongoDB · NoSQL'],
  ['Ferramentas', 'Visual Studio · Git · Postman · CI/CD · DevOps · Scrum'],
];

export default function ResumePage() {
  return <main className="resume-page">
    <nav className="detail-nav"><a className="brand" href="/#inicio"><img className="brand-avatar" src="/avatar.jpeg" alt="Gabriel Deam" /><span>Gabriel Deam</span></a><a className="back-link" href="/#sobre"><ArrowLeft size={15} /> Voltar para o portfólio</a></nav>
    <div className="resume-shell">
      <header className="resume-header"><div className="resume-identity"><div className="resume-avatar resume-avatar-main"><img src="/avatar.jpeg" alt="Gabriel de Almeida Machado" /></div><div><p className="kicker"><span className="line-dot" /> Currículo profissional</p><h1>Gabriel de Almeida<br /><em>Machado.</em></h1><p className="resume-role">Desenvolvedor Full Stack<br />C# / .NET / Blazor / Go / SQL</p></div></div><div className="resume-contact"><a className="button button-dark resume-download" href="/Curriculo_Gabriel_Full_Stack_Moderno.pdf" download="Curriculo_Gabriel_De_Almeida_Machado.pdf"><Download size={15} /> Baixar currículo</a><span><MapPin size={14} /> Vila Velha · ES</span><a href="mailto:oi@gabrieldeam.com"><Mail size={14} /> oi@gabrieldeam.com</a><a href="https://linkedin.com/in/gabrieldeam" target="_blank" rel="noreferrer">linkedin.com/in/gabrieldeam <ArrowUpRight size={13} /></a></div></header>
      <section className="resume-summary"><p className="resume-label">Resumo</p><p>Desenvolvedor Full Stack com experiência prática na manutenção e modernização de sistemas corporativos, atuando com C#, .NET, Blazor e SQL Server. Também desenvolvo soluções backend em Go, com foco em regras de negócio, arquitetura e persistência de dados.</p></section>
      <div className="resume-grid"><section><p className="resume-label">Experiência profissional</p><article className="resume-entry"><div className="entry-top"><h2>Desenvolvedor Full Stack — Estágio</h2><span>nov/2024 — set/2025</span></div><p className="entry-company">Sisecom</p><ul><li>Evolução e modernização de sistemas legados, manutenção corretiva e desenvolvimento de novas funcionalidades.</li><li>Desenvolvimento com C#, .NET e Blazor em aplicações corporativas.</li><li>Implementação de login por QR Code, integrando aplicativo e sistema web.</li><li>Consultas, ajustes e atualizações em SQL Server, com testes funcionais e retestes.</li></ul></article><p className="resume-label resume-project-label">Projeto em destaque</p><article className="resume-entry resume-entry-featured"><div className="entry-top"><h2>Plataforma de Licenciamento de Software</h2><span>Projeto próprio</span></div><p className="entry-company">Metriscript · Backend em Go</p><p>Plataforma corporativa para gestão, emissão e controle de licenças de software, com arquitetura orientada a segurança, escalabilidade e evolução contínua.</p><a className="text-link" href="/projetos/metriscript">Ver case completo <ArrowUpRight size={15} /></a></article></section><aside><p className="resume-label">Stack principal</p><div className="resume-stack">{stack.map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}</div><p className="resume-label resume-label-spaced">Perfil técnico</p><div className="resume-bullets"><span>Desenvolvimento full stack</span><span>Sistemas legados</span><span>APIs e integrações</span><span>Banco de dados relacional</span><span>Manutenção evolutiva</span><span>Metodologias ágeis</span></div><p className="resume-label resume-label-spaced">Formação</p><div className="education"><b>Sistemas de Informação</b><span>Graduação em andamento · UVV · 2025–2027</span><b>Técnico em Eletrônica</b><span>IFF · 2017–2019</span></div></aside></div>
      <footer className="resume-footer"><span>Atualizado em 2026</span><a className="button button-dark" href="https://wa.me/5527981690080" target="_blank" rel="noreferrer">Entrar em contato <MessageCircle size={15} /></a></footer>
    </div>
  </main>;
}
