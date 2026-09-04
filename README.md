# Formação Practitioner OCD — Landing Page

Página de divulgação estática (HTML + CSS + JS puro, sem build, sem backend) para o evento **Formação Practitioner OCD — Método OCD com Saulo Coelho**, 13 a 15 de novembro em São Paulo/SP.

Feita para publicar em **Vercel via GitHub**, sem nenhuma outra dependência.

## Antes de publicar: configure o botão de inscrição

O botão final "Quero participar" ainda **não tem destino definido**. Abra o arquivo `js/script.js` e edite a constante no topo:

```js
const CTA_URL = "#"; // <-- troque pelo link real
```

Coloque ali o link de WhatsApp (`https://wa.me/55SEUNUMERO?text=...`), formulário (Google Forms/Typeform) ou checkout. Enquanto ficar `"#"`, o botão mostra um aviso lembrando de configurar — não vai quebrar, mas também não vai converter ninguém.

Os outros botões da página ("Quero participar" do topo e do herói) apenas rolam a página até a seção final de inscrição — não precisam de alteração.

## Card do Instagram (seção "Siga o Saulo")

A seção também tem um card no estilo Instagram com a grade de conteúdo. Por padrão ele mostra só "Perfil oficial · Método OCD" no lugar dos números, porque não tínhamos acesso ao número real de seguidores/publicações. Se quiser exibir os números reais, edite no topo do `js/script.js`:

```js
const IG_FOLLOWERS = ""; // <-- ex: "18 mil"
const IG_POSTS = ""; // <-- ex: "640"
```

As 6 imagens da grade (`assets/grid/post1.jpg` a `post6.jpg`) foram recortadas a partir do print que você enviou (conteúdo real de Reels/Stories do Saulo). Se quiser trocar por posts mais recentes, basta substituir esses 6 arquivos (formato quadrado, 480×480px) mantendo os mesmos nomes.

## Seção "Dados de mercado"

Uma seção com 4 estatísticas reais sobre comportamento, liderança e o mercado de coaching/desenvolvimento comportamental, cada uma com a fonte citada (BCG, University College London, Gallup e ICF). Todas foram pesquisadas e checadas antes de entrar na página — se quiser trocar por outras, mantenha sempre a fonte visível junto do dado.

## Seção "Por que isso muda tudo" (MEC / CenBra)

Explica por que a certificação (CenBra) e a extensão reconhecida pelo MEC diferenciam o Método OCD de conteúdo motivacional avulso, com um link para o [Centro Brasileiro de PNL](https://centrobrasileirodepnl.com.br). Se algum dado sobre a certificação mudar (carga horária, nome da instituição parceira do MEC etc.), atualize o texto direto em `index.html`, na seção `<section class="section mec" id="credibilidade">`.

## Barra fixa de inscrição

Uma barra fica fixada na parte inferior da tela com o botão "Quero participar", acompanhando o scroll. Ela some enquanto o herói está visível (não precisa duplicar o CTA logo de cara) e some de novo perto da seção final de inscrição e do rodapé (para não duplicar o botão ali). Não precisa configurar nada — é só o mesmo link `#inscricao` dos outros botões do topo.

## Animações de entrada

Os textos, cards e listas aparecem com uma animação suave (fade + leve deslocamento para cima) conforme o visitante rola a página. Isso é feito pela classe `.reveal` no HTML e um `IntersectionObserver` em `js/script.js` — não precisa de nenhuma biblioteca externa. Para animar um novo elemento, basta adicionar `class="reveal"` a ele. Quem tem "reduzir movimento" ativado no sistema não vê a animação (o conteúdo aparece direto), por acessibilidade.

## Ícones

Os emojis (📅 📍 ✅ ✔) foram trocados por ícones em traço, no mesmo tom dourado do site. Eles ficam definidos uma única vez como um sprite SVG (`<symbol>`) logo no topo do `<body>` em `index.html`, e são usados pelo resto da página assim: `<svg class="icon"><use href="#icon-calendar"/></svg>`. Para adicionar um ícone novo, inclua um novo `<symbol>` no sprite e use o mesmo padrão — não precisa de nenhuma biblioteca de ícones externa.

## Fundo do herói (MASP) e selo na seção "O evento"

O fundo do herói é a foto real do MASP à noite que você enviou (`assets/hero-bg.jpg`), cobrindo a seção inteira (`background-size: cover`) com uma camada escura por cima (`.hero::before`, um gradiente preto a ~65–85% de opacidade) para o texto ficar legível — o mesmo tipo de tratamento usado no site de referência que você mostrou. Para trocar a foto, substitua `assets/hero-bg.jpg` mantendo o nome do arquivo (funciona melhor uma imagem larga, formato paisagem). Para ajustar o quão escuro fica, mexa nos valores de opacidade em `.hero::before` no `css/styles.css`.

**Sobre o selo na seção "O evento":** a logo circular do Método OCD (`assets/logo-seal.png`, recortada e com borda suavizada a partir do arquivo que você enviou) agora aparece ao lado do título "São Paulo vai receber a Formação Practitioner OCD", reforçando a marca logo na segunda seção da página. Em telas pequenas ela fica centralizada acima do texto. Para trocar por uma versão mais nítida da logo (o arquivo atual tem resolução limitada), substitua `assets/logo-seal.png` mantendo o formato quadrado com fundo transparente.

## Estrutura do projeto

```
ocd-practitioner-landing/
├── index.html            # página única
├── css/styles.css        # estilos (preto + dourado, fiel à identidade visual do evento)
├── js/script.js          # comportamento (ano automático, link do CTA, stats do Instagram)
├── assets/                # imagens otimizadas para web
│   ├── logo-selo.png
│   ├── logo-seal.png     # logo recortada em círculo, usada na seção "O evento"
│   ├── hero-bg.jpg       # fundo do herói (foto do MASP à noite)
│   ├── saulo-coelho.jpg
│   ├── saulo-avatar.jpg  # foto de perfil usada no card do Instagram
│   ├── og-image.jpg      # imagem de compartilhamento (WhatsApp/redes sociais)
│   ├── favicon-512.png
│   └── grid/              # 6 imagens da grade do card do Instagram
│       ├── post1.jpg ... post6.jpg
├── vercel.json
└── .gitignore
```

Não há build step: é HTML/CSS/JS estático puro. O Vercel detecta isso automaticamente.

## Passo a passo para publicar (GitHub + Vercel)

### 1. Criar o repositório no GitHub

1. Entre em [github.com/new](https://github.com/new) e crie um repositório (ex: `ocd-practitioner-landing`). Pode deixar público ou privado.
2. No seu computador, dentro da pasta deste projeto, rode:

```bash
git init
git add .
git commit -m "Landing page Formação Practitioner OCD"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/ocd-practitioner-landing.git
git push -u origin main
```

(troque `SEU-USUARIO` pelo seu usuário do GitHub)

### 2. Importar no Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e faça login com sua conta GitHub.
2. Clique em **Import** no repositório que você acabou de criar.
3. Em "Framework Preset", deixe **Other** (ou "Static") — não é necessário configurar build command nem output directory, a Vercel serve os arquivos como estão.
4. Clique em **Deploy**.

Em cerca de um minuto sua página estará no ar em uma URL do tipo `https://ocd-practitioner-landing.vercel.app`.

### 3. Domínio próprio (opcional)

No painel do projeto na Vercel: **Settings → Domains** → adicione seu domínio (ex: `formacaopracticioner.com.br`) e siga as instruções de DNS que a Vercel mostrar (geralmente um registro `CNAME` ou `A`).

### 4. Atualizações futuras

Qualquer alteração que você fizer no código e enviar para o `main` do GitHub (`git push`) é publicada automaticamente pela Vercel — não precisa reimportar nada.

```bash
git add .
git commit -m "Atualiza texto da seção X"
git push
```

## Editar conteúdo

Todo o texto está em `index.html`, em português, organizado por seções comentadas, nesta ordem: Hero (só a Big Idea, sem foto), O Evento, Sobre o Saulo (com a foto dele), Dados de Mercado, Programação, CenBra, MEC, O que você leva, Local, Inscrição e, por último — depois do botão final de inscrição — a seção "Siga no Instagram". Basta editar o HTML diretamente — não há CMS nem dados externos.

Para trocar as fotos, substitua os arquivos dentro de `assets/` mantendo os mesmos nomes, ou atualize os caminhos correspondentes no `index.html`.
