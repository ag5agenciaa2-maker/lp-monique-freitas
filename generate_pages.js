const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const headPartMatch = html.match(/<head>[\s\S]*?<\/head>/);
const headerPartMatch = html.match(/<header.*?<\/header>/s);
const footerPartMatch = html.match(/<footer.*?<\/footer>/s);

const headPart = headPartMatch[0];
const headerPart = headerPartMatch[0];
const footerPart = footerPartMatch[0];

const termsHTML = `<!DOCTYPE html>
<html lang="pt-BR">
${headPart.replace(/<title>.*?<\/title>/, '<title>Termos e Condições - Monique Freitas Advocacia</title>')}
<body>
    ${headerPart.replace(/href="#/g, 'href="index.html#')}

    <main style="max-width: 900px; margin: 60px auto; padding: 40px; font-family: inherit; line-height: 1.8;">
        <h1 style="color: var(--rose-gold, #C9A882);">Termos e Condições de Uso</h1>
        <p><em>Última atualização: 19 de março de 2026</em></p>
        
        <section style="margin-top: 40px;">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o site da <strong>Monique Freitas Advocacia</strong>, você concorda em cumprir e estar vinculado a estes Termos e Condições de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou formulários de contato.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>2. Direitos de Propriedade Intelectual</h2>
            <p>Todo o conteúdo presente no site — incluindo marca, design, logotipos, textos, gráficos e as fotografias da Dra. Monique Freitas e do Campo Grande Office Mall — é de propriedade exclusiva da Monique Freitas Advocacia, protegido pelas leis brasileiras de direitos autorais (Lei nº 9.610/98) e propriedade intelectual. A reprodução não autorizada, total ou parcial, é expressamente proibida.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>3. Uso Aceitável</h2>
            <p>Você concorda em utilizar as funcionalidades e formulários do site apenas para fins de contato legítimo profissional. É proibido utilizar o site para o envio abusivo de solicitações de avaliação (spam), distribuir conteúdo malicioso ou tentar burlar a segurança da hospedagem web.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>4. Cookies e Tecnologias</h2>
            <p>Implementamos tecnologias de cookies divididos entre Necessários, Funcionais, Analíticos, Desempenho e Publicidade. Você pode gerenciar quais tipos aceita no acesso ou clicando no Painel de Preferências de Cookies no rodapé do site, em conformidade com as exigências da LGPD e do Banner recém-implementado.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>5. Limitação de Responsabilidade</h2>
            <p>As informações jurídicas apresentadas abragendo áreas como Recuperação Tributária e Consultoria possuem caráter informativo. A leitura das informações contidas não substitui uma consulta individualizada de análise concreta processual, de forma que não nos responsabilizamos por decisões tomadas unicamente baseadas no material do site sem auxílio da advogada.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>6. Lei Aplicável</h2>
            <p>A formulação, o entendimento e a execução destes Termos são regidos pela legislação da República Federativa do Brasil. Para a resolução de qualquer imprevisto ou controvérsia ligada à navegação ou captação de dados será eleito o foro da comarca da cidade do Rio de Janeiro - RJ.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>7. Contato</h2>
            <p>Para dúvidas sobre os termos, fale com a gente:</p>
            <ul>
                <li><strong>E-mail:</strong> contato@moniquefreitas.adv.br / moniquefreitas.adv@gmail.com</li>
                <li><strong>Telefone/WhatsApp:</strong> (21) 98294-2433 / (21) 99999-9999</li>
                <li><strong>Endereço Sede:</strong> Campo Grande Office Mall, Sala 403, Campo Grande, Rio de Janeiro — RJ</li>
            </ul>
        </section>
    </main>
    
    ${footerPart.replace(/href="#/g, 'href="index.html#')}
</body>
</html>`;

const privacyHTML = `<!DOCTYPE html>
<html lang="pt-BR">
${headPart.replace(/<title>.*?<\/title>/, '<title>Política de Privacidade - Monique Freitas Advocacia</title>')}
<body>
    ${headerPart.replace(/href="#/g, 'href="index.html#')}
    
    <main style="max-width: 900px; margin: 60px auto; padding: 40px; font-family: inherit; line-height: 1.8;">
        <h1 style="color: var(--rose-gold, #C9A882);">Política de Privacidade</h1>
        <p><em>Última atualização: 19 de março de 2026</em></p>
        <p><strong>Esta política está em conformidade com a LGPD (Lei 13.709/2018)</strong></p>
        
        <section style="margin-top: 40px;">
            <h2>1. Informações que Coletamos</h2>
            <h3 style="margin-top: 20px;">1.1 Dados Fornecidos Diretamente</h3>
            <p>Durante seu contato voluntário na área de "Avaliação de Caso" ou por botões que abrem no WhatsApp, coletamos ativamente os dados inseridos e submetidos nos campos dos nossos formulários:</p>
            <ul>
                <li>Nome completo (Input text);</li>
                <li>Área de interesse (Recuperação Tributária, etc);</li>
                <li>Telefone WhatsApp;</li>
                <li>E-mail válido;</li>
                <li>Mensagem opcional;</li>
            </ul>
            <h3 style="margin-top: 20px;">1.2 Dados Coletados Automaticamente</h3>
            <p>Coletamos fragmentos estatísticos na sua visita como IP da conexão mascarado, tipo do navegador empregado e histórico de navegação interna no site (através dos cookies implementados em nosso banner dinâmico).</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>2. Como Usamos Suas Informações</h2>
            <p>Nós utilizamos os dados retidos de forma honesta, para duas finalidades estritas da prestação dos nossos serviços:</p>
            <ul>
                <li>Permitir nossa avaliação técnica da causa tributária, respondendo e analisando em até 24h as metas relatadas;</li>
                <li>Manter comunicação ágil por canais oficiais de triagem, além de gerar analíticos anônimos para otimização contínua da página.</li>
            </ul>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>3. Cookies</h2>
            <p>Este portal acopla 5 categorias fundamentais no Banner de Consentimento gerido no rodapé:</p>
            <ul>
                <li><strong>Necessários:</strong> Estritamente vitais para a estrutura técnica e permissões de privacidade funcionarem. Não guardam informações identificáveis.</li>
                <li><strong>Funcionais:</strong> Aprimoram a interface com tecnologias complementares.</li>
                <li><strong>Analíticos:</strong> Analisam quantitativamente as visitas (e.g. rejeição e permanência).</li>
                <li><strong>Desempenho:</strong> Analisam o índice de performance do site, otimizando carregamentos lógicos.</li>
                <li><strong>Publicidade:</strong> Otimização programática contextual a partir de interesses pregressos.</li>
            </ul>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>4. Compartilhamento de Dados</h2>
            <p>A proteção ao seu sigilo obedece rigorosamente às diretrizes do Estatuto da Advocacia. Suas informações não são alugadas nem comercializadas com terceiros externos de maneira infundada, compartilhando somente de forma sistêmica com o nosso servidor host da hospedagem, de forma invisível e coberta pelos acordos LGPD contratuais.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>5. Seus Direitos (LGPD)</h2>
            <p>Você é o detentor integral dos seus dados com amplo amparo nos artigos da lei aplicável (Lei 13.709/2018), podendo buscar direitos como:</p>
            <ul>
                <li>Confirmação da existência de tratamento dos seus dados;</li>
                <li>Acesso unificado e restrito aos dados da avaliação;</li>
                <li>Correção ou adendo de dados incompletos/incorretos registrados;</li>
                <li>Anonimização, bloqueio ou eliminação dos dados quando não contarem mais com validade ou necessidade processual intrínseca;</li>
                <li>Portabilidade processual à outra advocacia ou organização;</li>
                <li>Revogação ativa ou irretratável de consentimentos captados na rede, a qualquer instante.</li>
            </ul>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>6. Segurança</h2>
            <p>Todo o trânsito das informações é acobertado por conexões cifradas seguras (SSL / HTTPS) mantendo barreira estrita e medidas razoáveis de proteção em nossas rotinas e nas de parceiros estruturais perante qualquer tipo de acesso indevido ou invasão massiva de bots.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>7. Retenção de Dados</h2>
            <p>Os registros inseridos serão guardados pelo período necessário da relação profissional instaurada de acordo com as determinações baseadas no arquivamento de consultoria e também dentro dos prazos de responsabilidade legal obrigatoriamente mantidos para defesa ou prestação fiscal nacional.</p>
        </section>

        <section style="margin-top: 40px;">
            <h2>8. Menores de Idade</h2>
            <p>Como nosso foco mercadológico reside primordialmente na elisão e representação de Pessoas Jurídicas e Pessoas Físicas em fase produtiva da vida ou herdeiros, o recolhimento atrelado à faixa etária inferior à maturidade civil das normas nacionais (18 anos) não é visado ou operado de forma intencional sistêmica.</p>
        </section>
        
        <section style="margin-top: 40px;">
            <h2>9. Contato e Encarregado de Dados</h2>
            <p>Para o contato com nosso DPO / Encarregado apto ao exercício irrestrito de seus direitos e dúvidas pontuais sobre segurança ou sigilo empregado, contacte preferencialmente o endereço com identificação de "Demanda LGPD":</p>
            <p>E-mail: <strong>contato@moniquefreitas.adv.br</strong> / <strong>moniquefreitas.adv@gmail.com</strong></p>
        </section>
    </main>
    
    ${footerPart.replace(/href="#/g, 'href="index.html#')}
</body>
</html>`;

fs.writeFileSync('termos-e-condicoes.html', termsHTML);
fs.writeFileSync('politica-de-privacidade.html', privacyHTML);
console.log('Arquivos regerados com a exatidão estrutural exigida na Skill.');
