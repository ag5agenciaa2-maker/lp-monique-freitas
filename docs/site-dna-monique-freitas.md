# SITE DNA — Monique Freitas Advocacia Tributária

**Nicho:** Advocacia Tributária — B2B e B2C  
**Posicionamento:** Especialista premium em recuperação e planejamento fiscal — atendimento nacional e internacional  
**Desenvolvido por:** AG5 Agência  
**URL:** lp-monique-freitas.pages.dev  
**Data de análise:** Março 2026

---

## 1. IDENTIDADE VISUAL

### Paleta de Cores

| Token | Hex | Função | Uso típico |
|---|---|---|---|
| `--bg-primary` | `#0A0A0A` | Fundo base | Body e seções alternadas escuras |
| `--bg-secondary` | `#111111` | Fundo padrão | Seções principais (Hero, Sobre) |
| `--bg-card` | `#1A1A1A` | Card / widget | Serviços, FAQ, Footer |
| `--bg-section-alt` | `#1E1E1E` | Seção alternada | Resultados, Depoimentos |
| `--border` | `#2A2A2A` | Borda sutil | Separadores, borda de cards |
| `--gold` | `#B8975A` | Acento primário | H1, CTAs, ícones, labels |
| `--gold-light` | `#D4AF78` | Acento hover/glow | Hover em botões e links |
| `--text-primary` | `#FFFFFF` | Texto principal | Headings e corpo em destaque |
| `--text-heading` | `#F0EAD6` | Heading warm-off | H2 de seções |
| `--text-body` | `#8A8A8A` | Texto corpo | Parágrafos e metadados |
| `--text-muted` | `#5A5A5A` | Texto muted | Rótulos secundários, placeholders |

### Tipografia

| Elemento | Família | Peso | Tamanho | Letter-spacing |
|---|---|---|---|---|
| H1 hero | Inter | 700 | `clamp(2.8rem, 5vw, 5rem)` | `+0.02em` |
| H2 seção | Inter | 700 | `2.25rem` | normal |
| H3 card | Inter | 700 | `1.35rem` | normal |
| Label / badge | Inter | 700 | `0.7rem` | `+0.15em` UPPERCASE |
| Body padrão | Inter | 400 | `1rem` (16px) | normal |
| Body pequeno | Inter | 400 | `0.875rem` | normal |
| Nav links | Inter | 600 | `0.85rem` | `+0.05em` UPPERCASE |
| Botão CTA | Inter | 600 | `0.9rem` | `+0.08em` UPPERCASE |
| Ticker / Marquee | Inter | 600 | `0.75rem` | `+0.12em` UPPERCASE |
| FAQ pergunta | Inter | 600 | `1rem` | normal |
| Monogram (MF) | Inter | 700 | `1.2rem` | `+0.1em` |

**Família principal:** Inter (Google Fonts) — sem serifa geométrico  
**Família de suporte:** Courier New — usada apenas em rótulos técnicos  
**Pesos em uso:** 400 (body) · 600 (nav/labels) · 700 (headings/CTAs)

### Estilo Geral

> Dark luxury editorial com geometria precisa — fundo quase-preto uniforme, paleta monocromática interrompida por um único acento dourado quente, tipografia Inter uppercase espaçada para labels e headings compactos para corpo, sem elementos decorativos supérfluos; credibilidade jurídica transmitida via minimalismo e hierarquia visual rígida.

---

## 2. LAYOUT — SEÇÃO POR SEÇÃO

---

### 01 · NAVBAR

**Estrutura:** Flex row — `justify-content: space-between` — altura fixa `72px`  
**Fundo inicial:** `transparent` (flutua sobre o hero)  
**Fundo ao scroll:** `#0A0A0A` + `box-shadow: 0 2px 20px rgba(0,0,0,0.8)`  
**Posição:** `fixed` · `top: 0` · `width: 100%` · `z-index: 1000`

**Elementos:**
- Esquerda: Logo `.webp` ~140×40px
- Direita: 6 links de navegação + botão CTA "Consulta Gratuita" (oculto em mobile)
- Mobile: hamburger icon (3 linhas → X) que abre menu fullscreen com overlay escuro

**Animação:**
- Fundo: `background-color transparent → #0A0A0A` em `300ms ease` quando `scrollY > 80px`
- Links: `color #8A8A8A → #B8975A` em `200ms ease` no hover
- Botão CTA: `background transparent → #B8975A` em `200ms ease`

**Micro-interações:**
- Link ativo: cor dourada + `text-decoration underline 1px` · `underline-offset: 4px`
- Menu mobile: `opacity 0→1` + `translateX(-100%→0)` em `350ms cubic-bezier(.4,0,.2,1)` · stagger `50ms` por item

---

### 02 · HERO

**Estrutura:** CSS Grid — 2 colunas `55% / 45%` — `min-height: 100vh`  
**Fundo:** `#111111` + grain noise sutil via `::before` (`opacity: 0.03`)  
**Alinhamento:** conteúdo verticalmente centralizado · `padding-top: 72px`

**Coluna esquerda (55%):**
- Badge label: "ADVOCACIA TRIBUTÁRIA" — uppercase · dourado · `border-left: 2px solid #B8975A` · `padding-left: 12px`
- H1: "Recupere o que é seu." / "Com segurança jurídica." — `line-height: 1.1` · `color: #FFFFFF`
- Subtítulo: `font-size: 1.05rem` · `color: #8A8A8A` · `max-width: 480px` · `margin-top: 24px`
- 2 botões em flex row com `gap: 16px` — CTA primário + CTA secundário outline

**Coluna direita (45%):**
- Foto da advogada: `object-fit: cover` · `border-radius: 4px` · bottom-aligned · altura ~85vh
- Monogram "MF": `position: absolute` · `top-right` da imagem · ~60px · cor dourada · borda fina

**Animações de entrada (Intersection Observer):**

| Elemento | De → Para | Duração | Delay |
|---|---|---|---|
| Badge | `opacity 0, translateY(20px)` → visível | 600ms | 0ms |
| H1 | `opacity 0, translateY(30px)` → visível | 700ms | 150ms |
| Subtítulo | `opacity 0, translateY(20px)` → visível | 600ms | 300ms |
| Botões | `opacity 0, translateY(20px)` → visível | 600ms | 450ms |
| Imagem | `opacity 0, scale(1.02)` → visível | 900ms ease-out | 200ms |

**Elemento diferenciador:** H1 em duas frases com quebra de linha semântica — promessa + qualificação — cria ritmo visual de impacto e contexto.

---

### 03 · "VOCÊ SABIA?" — PROPOSTA DE VALOR

**Estrutura:** Flex column + grid `3 colunas` de cards · `gap: 32px` · `padding: 100px 0`  
**Fundo:** `#111111` com divisor top `1px solid #2A2A2A`

**Topo:**
- Label overline: "VOCÊ SABIA?" — uppercase · dourado · centered
- H2: "Sua empresa paga mais tributos do que deveria?" — centered · `max-width: 640px`

**Cards de dor/solução (×3):**
- Fundo: `#1A1A1A` · border: `1px solid #2A2A2A` · `border-radius: 8px` · `padding: 40px 32px`
- Ícone SVG geométrico dourado ~32px + H3 + parágrafo
- Hover: `border-color → #B8975A` + `translateY(-4px)` em `250ms ease`

**Ticker / Marquee (abaixo dos cards):**
- Fullwidth · fundo `#0A0A0A` · altura `48px` · `overflow: hidden`
- Conteúdo: lista de serviços separados por "•" duplicada para loop sem salto
- Animação: `translateX(0 → -50%)` `linear infinite 30s`
- Texto: uppercase · `0.75rem` · `letter-spacing: 0.12em` · `color: #5A5A5A`

---

### 04 · ÁREAS DE ATUAÇÃO

**Estrutura:** Flex column — lista vertical fullwidth · cada item = linha com número + conteúdo  
**Fundo:** `#111111`

**Label + heading:**
- Overline: "ÁREAS DE ATUAÇÃO" — dourado
- H2: "Expertise tributária em todas as frentes" — `max-width: 540px`

**Estrutura de cada item (×6):**
- Numeração "/ 01": `font-size: 0.8rem` · `color: #2A2A2A` · `font-weight: 700` · left
- H3: `color: #F0EAD6` · `font-weight: 700`
- Descrição: `color: #8A8A8A` · `font-size: 0.95rem` · `max-width: 560px`
- "Para: ...": `color: #5A5A5A` · `font-size: 0.85rem` · `font-style: italic`
- Link "Saiba mais" → WhatsApp: cor dourada · sem sublinhado · chevron → animado
- Separador: `border-bottom: 1px solid #2A2A2A` entre cada item

**Hover no item:**
- Background: `rgba(184,151,90,0.04)` em `200ms`
- Número: `color #2A2A2A → #B8975A` em `200ms`
- Chevron: `translateX(0 → 6px)` em `200ms ease`

**Elemento diferenciador:** numeração estilizada com "/" antes do dígito — associa numeração editorial a um sistema de índice técnico-jurídico.

---

### 05 · RESULTADOS QUE TRANSFORMAM (CTA INTERMEDIÁRIO)

**Estrutura:** Flex column centered — `padding: 120px 0`  
**Fundo:** `#1E1E1E` (tom alternado para separar visualmente do anterior)

**Elementos:**
- Overline: "RESULTADOS QUE TRANSFORMAM" — dourado
- H2: "Cada centavo recuperado é uma vitória para o seu negócio" — `font-size: 2.5rem` · `max-width: 680px` · centered
- Parágrafo: 2 frases de contexto emocional · `max-width: 560px` · centered · `color: #8A8A8A`
- CTA único: "Fale com a Especialista" — botão primário · `padding: 16px 40px`

**Animação:** Intersection Observer — `opacity 0→1` + `translateY(40px→0)` em `700ms ease-out` ao entrar em viewport.

---

### 06 · A ESPECIALISTA (SOBRE)

**Estrutura:** CSS Grid — `45% / 55%` · `gap: 80px`  
**Fundo:** `#111111`

**Coluna esquerda — Galeria mosaic 2×2:**
- 4 fotos em grid com micro-labels sobrepostos (pill flutuante)
- Labels: "Atuação Estratégica" · "Excelência Jurídica" · "Estrutura Premium" · "Foco em Resultados"
- Pill style: `background: rgba(0,0,0,0.7)` · `border: 1px solid #2A2A2A` · posição `bottom-left` de cada foto
- Hover: `scale(1.03)` em `400ms ease` + overlay `rgba(184,151,90,0.1)`

**Coluna direita — Conteúdo:**
- Overline: "A ESPECIALISTA"
- H2: "Monique Freitas" — `font-size: 2.8rem`
- Sub-label bio: italic · `color: #8A8A8A` · `border-left: 3px solid #B8975A` · `padding-left: 16px`
- 3 parágrafos de bio · `font-size: 1rem` · `color: #8A8A8A`
- 3 stat boxes em flex row

**Stat boxes:**
- Fundo `#1A1A1A` · border `1px solid #2A2A2A` · `border-radius: 6px` · `padding: 20px 24px`
- Valor: `font-size: 2rem` · `font-weight: 700` · `color: #B8975A`
- Label: `font-size: 0.75rem` · uppercase · `color: #5A5A5A` · `margin-top: 4px`
- Conteúdo: "06 / Áreas de Especialidade" · "BR / Atendimento Nacional" · "100% / Foco Tributário"

---

### 07 · DEPOIMENTOS (CARROSSEL INFINITO)

**Estrutura:** 2 tracks horizontais em loop infinito · `overflow: hidden` · direções opostas  
**Fundo:** `#0A0A0A`

**Cards de depoimento:**
- Largura: `340px` fixo · `border: 1px solid #2A2A2A` · `border-radius: 8px` · `padding: 32px`
- Fundo: `#1A1A1A` · `box-shadow: 0 4px 24px rgba(0,0,0,0.4)`
- Quote: `font-size: 0.95rem` · `color: #8A8A8A` · `line-height: 1.65` · `border-top: 1px solid #2A2A2A`
- Autor: `font-weight: 700` · `color: #F0EAD6` · `font-size: 0.9rem` · `margin-top: 20px`
- Cargo: `font-size: 0.8rem` · `color: #5A5A5A` · `font-style: italic`

**Animação dos tracks:**
- Track 1: `translateX(0 → -50%)` `linear 40s infinite`
- Track 2: `translateX(-50% → 0)` `linear 40s infinite` — direção oposta
- Hover: `animation-play-state: paused`
- Fade nas bordas: `::after` com `linear-gradient(90deg, #0A0A0A, transparent 15%, transparent 85%, #0A0A0A)`

**Elemento diferenciador:** dois tracks em sentidos opostos simulam profundidade sem 3D real — efeito editorial raro em LPs de advocacia.

---

### 08 · FAQ (ACCORDION)

**Estrutura:** Flex column · `max-width: 800px` · centered  
**Fundo:** `#111111`

**Cada item:**
- Pergunta: flex row `space-between` · `font-weight: 600` · `color: #F0EAD6` · `cursor: pointer`
- Ícone toggle: "+" → rotacionado `45deg` em `300ms ease` · `color: #B8975A`
- Separador: `border-bottom: 1px solid #2A2A2A` · `padding: 28px 0`
- Resposta: `font-size: 0.95rem` · `color: #8A8A8A` · `line-height: 1.7` · `padding-bottom: 24px`

**Animação de abertura:** `max-height: 0 → 1000px` + `opacity: 0→1` em `350ms ease`  
**Micro-interação:** hover na pergunta: `color #8A8A8A → #F0EAD6` em `200ms ease`

---

### 09 · CONTATO + CTA FINAL

**Estrutura:** CSS Grid — `45% / 55%` · `gap: 80px` · `padding: 120px 0`  
**Fundo:** `#0A0A0A`

**Coluna esquerda:**
- Foto decorativa da advogada · `border-radius: 4px` · ~80% da altura do formulário
- Overline: "ENTRE EM CONTATO"
- H2: "Pronto para recuperar o que é seu?"
- Checklist: 3 itens com ✓ dourado · `font-size: 0.95rem` · `gap: 12px`

**Coluna direita — Formulário:**
- H3: "Solicite uma Avaliação" + badge pill "Resposta em até 24h"
- Campos: Nome · Select (Área de interesse) · Telefone · E-mail · Textarea (opcional)
- Input style: `background: #1A1A1A` · `border: 1px solid #2A2A2A` · `padding: 14px 18px` · `border-radius: 4px`
- Focus: `border-color: #B8975A` + `box-shadow: 0 0 0 3px rgba(184,151,90,0.15)` em `200ms ease`
- Select: aparência nativa removida · chevron SVG dourado em `right: 16px`
- Botão submit: fullwidth · `background: #B8975A` · `color: #0A0A0A` · `font-weight: 700` · `padding: 16px`
- Hover botão: `background: #D4AF78` em `200ms ease`

---

### 10 · LOCALIZAÇÃO

**Estrutura:** Flex column + grid de info em 2 colunas + Google Maps embed  
**Fundo:** `#111111`

**Elementos:**
- Overline + H2: "ONDE ESTAMOS" / "Visite nosso escritório"
- 4 blocos de info: Endereço · Horário · Telefone/WhatsApp · E-mail + Instagram — com ícone SVG dourado
- Google Maps iframe: `border-radius: 8px` · `border: 1px solid #2A2A2A` · `height: 400px`

---

### 11 · FOOTER

**Estrutura:** Grid 4 colunas · `padding: 80px 0 40px`  
**Fundo:** `#0A0A0A`

**Colunas:**
- Col 1: Logo footer + tagline `font-size: 0.875rem` · `color: #5A5A5A` · `max-width: 260px`
- Cols 2–4: H4 uppercase `letter-spacing: 0.15em` · `color: #B8975A` · `border-bottom: 1px solid #2A2A2A` + lista de links

**Links footer:** `font-size: 0.875rem` · `color: #5A5A5A` · hover `color: #B8975A` · `transition: 200ms`

**Rodapé inferior:**
- Divider `1px #2A2A2A` · `padding-top: 32px`
- Copyright + Links legais: `font-size: 0.8rem` · `color: #3A3A3A`
- "Desenvolvido por AG5 Agência": `color: #5A5A5A` · hover dourado

---

## 3. COMPONENTES REUTILIZÁVEIS

### Botões

**Primário (CTA):**
```css
background: #B8975A;
color: #0A0A0A;
font-family: Inter;
font-weight: 700;
font-size: 0.9rem;
letter-spacing: 0.08em;
text-transform: uppercase;
padding: 14px 32px;
border-radius: 4px;
border: none;

/* Hover */
background: #D4AF78;
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(184,151,90,0.35);
transition: all 200ms ease;

/* Active */
transform: translateY(0);
box-shadow: 0 4px 12px rgba(184,151,90,0.2);
transition: all 100ms ease;
```

**Secundário (Outline):**
```css
background: transparent;
border: 1px solid #B8975A;
color: #B8975A;
font-weight: 600;
font-size: 0.9rem;
letter-spacing: 0.08em;
text-transform: uppercase;
padding: 13px 32px;
border-radius: 4px;

/* Hover */
background: rgba(184,151,90,0.08);
border-color: #D4AF78;
color: #D4AF78;
transition: all 200ms ease;
```

**WhatsApp (link inline):**
- Texto-link dourado + ícone WhatsApp SVG + chevron →
- Hover: `color: #D4AF78` + chevron `translateX(+4px)` em `200ms ease`

---

### Cards

**Card de Serviço:**
```css
background: #1A1A1A;
border: 1px solid #2A2A2A;
border-radius: 8px;
padding: 40px 32px;
box-shadow: none; /* base */

/* Hover */
border-color: #B8975A;
box-shadow: 0 8px 32px rgba(184,151,90,0.12);
transform: translateY(-4px);
transition: all 250ms ease;
```

**Card de Depoimento:**
```css
background: #1A1A1A;
border: 1px solid #2A2A2A;
border-radius: 8px;
padding: 32px;
width: 340px; /* fixo */
box-shadow: 0 4px 24px rgba(0,0,0,0.4);

/* Hover (dentro do track) */
border-color: rgba(184,151,90,0.3);
transition: border-color 200ms;
```

**Stat Box:**
```css
background: #1A1A1A;
border: 1px solid #2A2A2A;
border-radius: 6px;
padding: 20px 24px;

/* Valor */
font-size: 2rem;
font-weight: 700;
color: #B8975A;
display: block;

/* Label */
font-size: 0.75rem;
text-transform: uppercase;
color: #5A5A5A;
margin-top: 4px;
```

---

### Navbar

| Estado | Propriedades |
|---|---|
| Inicial | `background: transparent` · `position: fixed` · `z-index: 1000` |
| Scroll > 80px | `background: #0A0A0A` · `box-shadow: 0 2px 20px rgba(0,0,0,0.8)` · `transition: 300ms ease` |
| Link hover | `color #8A8A8A → #B8975A` em `200ms` |
| Link ativo | `color: #B8975A` · `text-decoration: underline 1px` · `underline-offset: 4px` |
| CTA navbar | Outline pequeno · `padding: 8px 20px` · desktop only |
| Mobile hamburger | 3 barras → X com rotate + morph em `300ms cubic-bezier(.4,0,.2,1)` |
| Menu mobile | Fullscreen `#0A0A0A` · links centralizados · `font-size: 1.5rem` · stagger `50ms/item` |

---

### Inputs / Formulário

```css
/* Base */
background: #1A1A1A;
border: 1px solid #2A2A2A;
border-radius: 4px;
padding: 14px 18px;
color: #FFFFFF;
font-family: Inter;
font-size: 1rem;

/* Placeholder */
color: #3A3A3A;

/* Focus */
border-color: #B8975A;
box-shadow: 0 0 0 3px rgba(184,151,90,0.15);
transition: all 200ms ease;

/* Error */
border-color: #CC4444;
/* + mensagem vermelha abaixo em 0.8rem */

/* Select */
appearance: none;
/* chevron SVG dourado posicionado right: 16px */
```

---

## 4. ANTI-PADRÕES REGISTRADOS

Elementos deliberadamente evitados neste projeto:

- **Fundo claro** — toda a LP é dark-only sem exceção
- **Gradientes entre cores** — variações entre seções usam apenas tons de preto (`#111111 ↔ #0A0A0A ↔ #1E1E1E`)
- **Segunda cor de acento** — apenas dourado; nenhum azul, verde, vermelho ou roxo
- **Sombras coloridas em seções** — `box-shadow` sempre `rgba(0,0,0,x)` ou `rgba(184,151,90,x)` somente em hover
- **Imagens com fundo branco visível** — todas recortadas ou de fundo neutro/escuro
- **Ícones ilustrativos cartoon** — apenas SVG geométrico minimalista ou nenhum ícone
- **Parallax de scroll em imagens** — causa instabilidade de layout em mobile
- **Scroll-jacking ou snap obrigatório** — scroll sempre nativo
- **Popups modais intrusivos** — único modal é o cookie consent no carregamento
- **Badges e selos gráficos complexos** — credenciais transmitidas exclusivamente via texto
- **Contador animado de números** ("1.200+ clientes") — optou-se por stats contextuais honestos
- **Vídeo autoplay no hero** — impacto em performance e dados móveis
- **Múltiplas famílias tipográficas** — apenas Inter; Courier New restrito a labels técnicos
- **Border-radius > 8px nos cards** — mantém sensação premium/sóbria, não soft/friendly
- **Texto centralizado em blocos de lista** — alinhamento left mantém leiturabilidade em serviços

---

## 5. COMBINAÇÕES BLOQUEADAS PARA PRÓXIMOS PROJETOS

| # | Paleta | Layout + Animação | Motivo |
|---|---|---|---|
| 01 | `#0A0A0A` + `#B8975A` + Inter bold | Grid 2col hero (foto right) + fade-in staggered + ticker marquee | Identidade exata deste projeto — uso em outro nicho jurídico cria confusão direta |
| 02 | Dark `#111` + dourado + branco — sem terceira cor | Lista vertical de serviços com numeração "/" + card hover borda dourada | Sistema de serviços proprietário deste projeto |
| 03 | Dark total + dourado + foto da profissional como hero | LP one-page para advogado/consultor com galeria mosaic 2×2 na seção Sobre | Fingerprint visual muito específico — clone óbvio |
| 04 | Monocromático escuro (qualquer) + acento único quente | Carrossel duplo de depoimentos com tracks em direções opostas | Mecânica e estética identificam imediatamente este template |
| 05 | `#B8975A` / `#D4AF78` como acento + fundo escuro | FAQ accordion com + → − rotacionado + border-bottom only entre itens | Padrão idêntico ao deste projeto em cores e mecânica |

**Regra geral:** qualquer projeto que combine (1) fundo monocromático escuro `#0A0A0A–#1E1E1E`, (2) acento dourado `#B8975A` como única cor de destaque, (3) Inter bold uppercase para labels, (4) foto de profissional em hero 2 colunas com monograma — deve ser tratado como clone visual e exige ao menos 3 mudanças estruturais antes de aprovação.

---

## 6. NOTAS TÉCNICAS DE IMPLEMENTAÇÃO

### Stack inferida
- HTML5 semântico puro + CSS3 Custom Properties
- JavaScript vanilla — sem React, Vue ou Next.js detectado
- Hospedagem: Cloudflare Pages (domínio `.pages.dev`)
- Imagens: formato `.webp` · `loading="lazy"` inferido
- Fontes: Google Fonts CDN (Inter)

### CSS Custom Properties

```css
:root {
  --bg-primary:      #0A0A0A;
  --bg-secondary:    #111111;
  --bg-card:         #1A1A1A;
  --bg-alt:          #1E1E1E;
  --border:          #2A2A2A;
  --gold:            #B8975A;
  --gold-light:      #D4AF78;
  --text-primary:    #FFFFFF;
  --text-heading:    #F0EAD6;
  --text-body:       #8A8A8A;
  --text-muted:      #5A5A5A;
  --radius-sm:       4px;
  --radius-md:       8px;
  --transition-fast: 200ms ease;
  --transition-mid:  300ms ease;
  --shadow-gold:     0 8px 32px rgba(184,151,90,0.12);
}
```

### Breakpoints

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | `< 768px` | Stack vertical · hamburger · hero 1 coluna |
| Tablet | `768px–1199px` | 2 colunas reduzidas · galeria 1×4 |
| Desktop | `≥ 1200px` | Layout full conforme documentado |
| Container max | `1280px` | `margin: 0 auto` · `padding: 0 80px` (desktop) / `0 24px` (mobile) |

### Performance
- Imagens `.webp` com `srcset` para mobile/desktop
- Inter com `font-display: swap`
- Ticker/marquee via CSS animation (GPU-accelerated) — sem JS de scroll
- Intersection Observer para animações de entrada — sem GSAP ou ScrollTrigger

---

*— Fim do Site DNA — Monique Freitas Advocacia Tributária —*
