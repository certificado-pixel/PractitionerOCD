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

## Estrutura do projeto

```
ocd-practitioner-landing/
├── index.html          # página única
├── css/styles.css       # estilos (preto + dourado, fiel à identidade visual do evento)
├── js/script.js         # comportamento (ano automático no rodapé + link do CTA)
├── assets/               # imagens otimizadas para web
│   ├── logo-selo.png
│   ├── saulo-coelho.jpg
│   ├── og-image.jpg     # imagem de compartilhamento (WhatsApp/redes sociais)
│   └── favicon-512.png
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

Todo o texto está em `index.html`, em português, organizado por seções comentadas (Hero, Sobre o Saulo, O Evento, Programação, Certificações, Local, Inscrição). Basta editar o HTML diretamente — não há CMS nem dados externos.

Para trocar as fotos, substitua os arquivos dentro de `assets/` mantendo os mesmos nomes, ou atualize os caminhos correspondentes no `index.html`.
