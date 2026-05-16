# Relatório de Auditoria SEO/GEO — Monique Freitas Advocacia

**Data da auditoria:** 14 de abril de 2026  
**Projeto:** Landing Page Monique Freitas Advocacia Tributária  
**Escopo:** `index.html`, `politica-de-privacidade.html`, `termos-e-condicoes.html`, `script.js`, `style.css`

---

## 1. Resumo Executivo

Foram aplicadas otimizações técnicas de SEO on-page, Core Web Vitals, E-E-A-T e GEO (Generative Engine Optimization) diretamente nos arquivos do projeto. Todas as alterações são internas e não dependem de servidores ou ferramentas externas.

---

## 2. Alterações Realizadas

### 2.1 Meta Tags & Indexação

| Arquivo | Alteração |
|---------|-----------|
| `index.html` | **Title otimizado** com front-loading strategy: `"Advogada Tributarista em Campo Grande RJ \| Monique Freitas Advocacia"` (foco local + keyword no início) |
| `index.html` | **Meta description** reescrita para ~160 caracteres com CTA e localização |
| `index.html` | Adicionada **tag canonical**: `<link rel="canonical" href="https://moniquefreitas.adv.br/">` |
| `index.html` | Adicionadas **geo tags** (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) para reforço de sinal local |
| `politica-de-privacidade.html` | Title/description/canonical otimizados para a página |
| `termos-e-condicoes.html` | Title/description/canonical otimizados para a página |

### 2.2 Open Graph & Twitter Cards

| Arquivo | Alteração |
|---------|-----------|
| `index.html` | `og:title` e `twitter:title` atualizados para refletir o novo title otimizado |
| `politica-de-privacidade.html` | `og:title` atualizado |
| `termos-e-condicoes.html` | `og:title` atualizado |

### 2.3 Schema.org (JSON-LD)

| Arquivo | Alteração |
|---------|-----------|
| `index.html` | **LegalService** corrigido: `postOfficeBoxNumber` → `postalCode`; `addressLocality` separado para `"Campo Grande"` (padrão Schema.org) |
| `index.html` | Adicionado campo `priceRange: "$$"` no schema de LegalService |
| `index.html` | **Novo schema FAQPage** adicionado com as 7 perguntas da seção FAQ — crucial para Rich Snippets e GEO |
| `index.html` | **Novo schema AggregateRating** adicionado com `ratingValue: 5.0` e `reviewCount: 6` — baseado nos 6 depoimentos exibidos |
| `politica-de-privacidade.html` | Schema LegalService corrigido (postalCode + addressLocality) |
| `termos-e-condicoes.html` | Schema LegalService corrigido (postalCode + addressLocality) |

### 2.4 Performance & Core Web Vitals

| Arquivo | Alteração |
|---------|-----------|
| `index.html` | Todas as imagens receberam atributos `width` e `height` explícitos — reduz **CLS** (Cumulative Layout Shift) |
| `index.html` | Imagens abaixo da dobra receberam `loading="lazy"` |
| `index.html` | Hero image e logo header receberam `fetchpriority="high"` |
| `index.html` | Script `script.js` alterado para `defer` — melhora parse do HTML e INP |
| `script.js` | Preload de imagens otimizado: apenas acima da dobra (hero + logo), evitando desperdício de bandwidth |
| `style.css` | Adicionado fallback `aspect-ratio` para imagens sem dimensões explícitas |

### 2.5 Correções de Conteúdo & Estrutura

| Arquivo | Alteração |
|---------|-----------|
| `index.html` | Corrigido path de imagem com barras invertidas (`imagens\...`) para barras normais (`imagens/...`) |
| `index.html` | Seção de localização: telefone corrigido de placeholder `(21) 99999-9999` para `(21) 98294-2433` com link `tel:` clicável |
| `index.html` | E-mail na localização transformado em link `mailto:` clicável |
| `index.html` | Alt texts de imagens enriquecidos com localização (ex: `"Confiança e resultado em advocacia tributária em Campo Grande RJ"`) |

---

## 3. Checklist SEO/GEO Aplicado

### Técnico & Local SEO
- [x] `lang="pt-BR"` e `charset="UTF-8"` definidos
- [x] Canonical tags presentes em todas as páginas
- [x] Viewport meta tag presente
- [x] Geo tags (`geo.region`, `geo.position`, `geo.placename`) adicionados
- [x] NAP (Name, Address, Phone) visível em HTML texto e clicável

### Social & Semântico
- [x] Open Graph completo (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`)
- [x] Twitter Cards (`twitter:card`, `twitter:title`, `twitter:image`)
- [x] Estrutura semântica com `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [x] `aria-label` em botões de ícone (menu, fechar, WhatsApp)

### Conteúdo SEO
- [x] Title tag otimizado com front-loading (keyword + localidade no início)
- [x] Meta description entre 150-160 caracteres, com CTA
- [x] Apenas um H1 por página
- [x] Internal linking com anchor texts descritivos
- [x] Alt texts descritivos em todas as imagens

### Schema Markups Essenciais
- [x] `LegalService` (Organization-like para escritórios de advocacia)
- [x] `FAQPage` — 7 perguntas estruturadas
- [x] `AggregateRating` — 5.0 estrelas, 6 reviews

### GEO & E-E-A-T
- [x] Seção FAQ presente (respostas diretas e citáveis)
- [x] Credenciais da advogada visíveis (formação, áreas de atuação)
- [x] Endereço físico, telefone e e-mail transparentes
- [x] Links para política de privacidade e termos de uso
- [x] Conteúdo localizado (Campo Grande, RJ)

### Performance
- [x] Imagens em formato moderno (`.webp`)
- [x] `loading="lazy"` em imagens abaixo da dobra
- [x] `fetchpriority="high"` na hero image
- [x] `width` + `height` em todas as imagens para evitar CLS
- [x] Scripts com `defer`

---

## 4. Tarefas Externas / Off-Page (Não aplicáveis via código)

> ⚠️ **Importante:** As tarefas abaixo dependem de ações manuais ou ferramentas externas e devem ser realizadas pelo time responsável.

- [ ] **Google Business Profile (GBP):** Verificar e completar o perfil local do escritório. Garantir que NAP coincida 100% com o site.
- [ ] **Google Search Console:** Adicionar a propriedade, enviar o sitemap e solicitar indexação das URLs.
- [ ] **Google Analytics / Tag Manager:** Implementar código de rastreamento (G-XXXX ou GA4) se ainda não estiver ativo.
- [ ] **Backlink Building:** Cadastrar o escritório em diretórios locais (OAB-RJ, GuiaMais, Apontador) e parcerias de indústria.
- [ ] **Redes Sociais:** Garantir que Instagram e LinkedIn apontem de volta para `https://moniquefreitas.adv.br/`.
- [ ] **PageSpeed Insights:** Rodar teste ao vivo após deploy para identificar atrasos do lado do servidor.
- [ ] **Certificado SSL:** Confirmar que o servidor força HTTPS (parece OK, mas validar no ambiente de produção).
- [ ] **Sitemap.xml:** Gerar e hospedar `sitemap.xml` na raiz do domínio.
- [ ] **Robots.txt:** Criar/verificar `robots.txt` apontando para o sitemap e permitindo todos os bots relevantes (incluindo GPTBot, ClaudeBot, PerplexityBot se desejar GEO).

---

## 5. Próximos Passos Recomendados

1. **Deploy** das alterações e validação via [Google Rich Results Test](https://search.google.com/test/rich-results).
2. **Submeter sitemap.xml** no Google Search Console.
3. **Solicitar indexação** das 3 páginas principais.
4. **Acompanhar** aparecimento de Rich Snippets (FAQ + estrelas) nas SERPs em 2–4 semanas.
5. **Criar conteúdo de blog** com definições claras e estatísticas sobre tributação para aumentar citações em IA (GEO).

---

*Relatório gerado automaticamente após aplicação da Skill SEO/GEO AG5.*
