# Site Art'Ervas

Site institucional estático (HTML, CSS e JavaScript puros, sem build e sem frameworks) da Farmácia Art'Ervas.

## Estrutura

- `index.html` — página principal
- `css/style.css` — estilos
- `js/main.js` — menu mobile e montagem dos links de WhatsApp
- `images/` — pasta reservada para logotipo e fotos (ainda vazia)

## Pendências (marcadas com `[PREENCHER]` no código)

- Links do Instagram e do LinkedIn (no rodapé e na seção de Contato)
- Endereço de envio (`action`) do formulário de contato em `index.html` — configure um serviço como o [Formspree](https://formspree.io) e cole o endereço gerado
- Logotipo e fotos reais na pasta `images/` (hoje a marca usa apenas texto estilizado)

## Publicação

Como o site usa apenas caminhos relativos, ele funciona diretamente no GitHub Pages: basta publicar a raiz deste repositório.

## Assistente de vendas

Há um espaço reservado ao final do `<body>` do `index.html` para, futuramente, incluir o `chat.js` do assistente de vendas.
