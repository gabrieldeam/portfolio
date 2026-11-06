from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Curriculo_Gabriel_De_Almeida_Machado_A4.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
W, H = A4
paper, ink, muted, line, accent = [colors.HexColor(v) for v in ("#f5f3ec", "#14232f", "#5e6c72", "#d3d7cf", "#78943d")]

def wrap(c, text, x, y, width, font="Helvetica", size=8.5, leading=11, color=muted):
    c.setFont(font, size); c.setFillColor(color); current = ""
    for word in text.split():
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= width: current = candidate
        else: c.drawString(x, y, current); y -= leading; current = word
    if current: c.drawString(x, y, current); y -= leading
    return y

def label(c, text, x, y):
    c.setFillColor(accent); c.setFont("Courier", 7.5); c.drawString(x, y, text.upper())

def rule(c, x1, y, x2):
    c.setStrokeColor(line); c.setLineWidth(.6); c.line(x1, y, x2, y)

c = canvas.Canvas(str(OUTPUT), pagesize=A4)
c.setTitle("Currículo — Gabriel de Almeida Machado"); c.setAuthor("Gabriel de Almeida Machado")
c.setFillColor(paper); c.rect(0, 0, W, H, fill=1, stroke=0)
margin, right, top = 44, W - 44, H - 46

photo_x, photo_y = margin, top - 103
c.drawImage(ImageReader(str(ROOT / "public" / "avatar.jpeg")), photo_x, photo_y, 66, 66, preserveAspectRatio=True, anchor="c", mask="auto")
name_x = margin + 84
label(c, "Currículo profissional", name_x, top)
c.setFillColor(ink); c.setFont("Helvetica-Bold", 33); c.drawString(name_x, top - 39, "Gabriel de Almeida")
c.setFillColor(accent); c.drawString(name_x, top - 72, "Machado.")
c.setFillColor(muted); c.setFont("Courier", 8.5); c.drawString(name_x, top - 96, "DESENVOLVEDOR FULL STACK"); c.drawString(name_x, top - 108, "C# / .NET / BLAZOR / GO / SQL")
c.setFillColor(muted); c.setFont("Courier", 7.5); c.drawRightString(right, top - 120, "Vila Velha · ES"); c.drawRightString(right, top - 133, "oi@gabrieldeam.com"); c.drawRightString(right, top - 146, "linkedin.com/in/gabrieldeam")
rule(c, margin, top - 161, right)

y = top - 185; label(c, "Resumo", margin, y)
y = wrap(c, "Desenvolvedor Full Stack com experiência prática na manutenção e modernização de sistemas corporativos, atuando com C#, .NET, Blazor e SQL Server. Também desenvolvo soluções backend em Go, com foco em regras de negócio, arquitetura e persistência de dados.", margin + 116, y, right - margin - 116, size=9.2, leading=12)
rule(c, margin, y - 10, right); y -= 44
left_x, left_w, side_x, side_w = margin, 318, 402, right - 402
label(c, "Experiência profissional", left_x, y); y -= 19
c.setFillColor(ink); c.setFont("Helvetica-Bold", 11); c.drawString(left_x, y, "Desenvolvedor Full Stack — Estágio")
c.setFillColor(muted); c.setFont("Courier", 7.5); c.drawString(left_x, y - 13, "Sisecom"); c.drawRightString(left_x + left_w, y - 13, "nov/2024 — set/2025"); y -= 34
for item in ["Evolução e modernização de sistemas legados, manutenção corretiva e desenvolvimento de novas funcionalidades.", "Desenvolvimento com C#, .NET e Blazor em aplicações corporativas.", "Implementação de login por QR Code, integrando aplicativo e sistema web.", "Consultas, ajustes e atualizações em SQL Server, com testes funcionais e retestes."]:
    c.setFillColor(accent); c.circle(left_x + 2, y + 3, 1.4, fill=1, stroke=0); y = wrap(c, item, left_x + 10, y, left_w - 10, size=8.3, leading=10.5) - 3
y -= 12; label(c, "Projeto próprio", left_x, y); y -= 19
c.setFillColor(ink); c.setFont("Helvetica-Bold", 11); c.drawString(left_x, y, "Plataforma de Licenciamento de Software")
c.setFillColor(accent); c.setFont("Courier", 7.5); c.drawString(left_x, y - 13, "Metriscript · Backend em Go"); y -= 31
wrap(c, "Plataforma corporativa para gestão, emissão e controle de licenças de software, com arquitetura orientada a segurança, escalabilidade e evolução contínua.", left_x, y, left_w, size=8.3, leading=10.5)

sy = top - 263; label(c, "Stack principal", side_x, sy); sy -= 20
for heading, value in [("Backend", "C# · .NET · Go · Java · Spring Boot"), ("Frontend", "Blazor · React · Angular · JavaScript · HTML5 · CSS3"), ("Dados", "SQL · SQL Server · PostgreSQL · MongoDB · NoSQL"), ("Ferramentas", "Visual Studio · Git · Postman · CI/CD · DevOps · Scrum")]:
    rule(c, side_x, sy + 6, right); c.setFillColor(muted); c.setFont("Courier", 7); c.drawString(side_x, sy - 7, heading.upper()); sy = wrap(c, value, side_x, sy - 21, side_w, size=8.3, leading=10.5, color=ink) - 8
sy -= 8; label(c, "Perfil técnico", side_x, sy); sy -= 19
for item in ["Desenvolvimento full stack", "Sistemas legados", "APIs e integrações", "Banco de dados relacional", "Manutenção evolutiva", "Metodologias ágeis"]:
    c.setFillColor(accent); c.setFont("Helvetica", 8); c.drawString(side_x, sy, "—"); c.setFillColor(muted); c.drawString(side_x + 10, sy, item); sy -= 13
sy -= 13; label(c, "Formação", side_x, sy); sy -= 18
c.setFillColor(ink); c.setFont("Helvetica-Bold", 8.5); c.drawString(side_x, sy, "Sistemas de Informação"); c.setFillColor(muted); c.setFont("Courier", 7); c.drawString(side_x, sy - 12, "Graduação em andamento · UVV · 2025–2027")
c.setFillColor(ink); c.setFont("Helvetica-Bold", 8.5); c.drawString(side_x, sy - 33, "Técnico em Eletrônica"); c.setFillColor(muted); c.setFont("Courier", 7); c.drawString(side_x, sy - 45, "IFF · 2017–2019")
rule(c, margin, 43, right); c.setFillColor(muted); c.setFont("Courier", 7); c.drawString(margin, 28, "GABRIEL DEAM · CURRÍCULO PROFISSIONAL"); c.drawRightString(right, 28, "Atualizado em 2026")
c.save(); print(OUTPUT)
