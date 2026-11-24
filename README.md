# Site da AAVP — Associação de Artistas Visuais em Portugal

Este repositório contém o site da AAVP. Este documento explica como o site funciona, como se publica e o que é preciso saber para passar o trabalho a outra pessoa.

**Endereço provisório:** https://aavp-artistas.github.io/site/
**Domínio próprio:** ainda por ligar (ver "Domínio próprio", mais abaixo).

> **Atenção:** este repositório é público. Nunca escrever aqui palavras-passe, códigos de recuperação nem dados pessoais.

---

## Como funciona

- O site é **estático**: não há servidor, base de dados nem plugins para atualizar. Não tem custos.
- O **GitHub Pages** monta o site a partir dos ficheiros deste repositório, sempre que há uma alteração. Demora um a dois minutos.
- **Notícias** e **comunicados de imprensa** são fichas (pequenos ficheiros de texto) nas pastas `_noticias` e `_comunicados`. Editam-se num formulário, no **Pages CMS** (https://app.pagescms.org), sem mexer em código.
- As restantes páginas (Sobre, Estatutos, Apoios, Contactos, Adesão) mudam pouco e editam-se diretamente nos ficheiros.

---

## Contas e acessos

Lista do que existe e de onde se recupera. **As credenciais não ficam aqui**: guardam-se no local indicado pela direção.

| Conta | Para quê | Como se recupera |
|---|---|---|
| Gmail **aavp.artistas@gmail.com** | É a chave de tudo: recupera a conta GitHub e recebe os convites do Pages CMS. | Telefone e e-mail de recuperação definidos no Gmail: devem pertencer à associação ou a mais do que uma pessoa da direção. |
| GitHub **AAVP-Artistas** | Dona deste repositório e do site. Dá acesso total ao Pages CMS. | Palavra-passe recuperável pelo Gmail acima. A verificação em dois passos tem **códigos de recuperação**, guardados com as credenciais da associação (GitHub → Settings → Password and authentication). |
| Pages CMS | Formulários de notícias e comunicados. A aplicação está instalada na conta AAVP-Artistas, no repositório `site`. | Entra-se com a conta GitHub da AAVP ou com um convite por e-mail. |
| Domínio | Endereço próprio do site. | Registado em: _(a preencher quando o domínio for ligado)_ |

**Credenciais guardadas em:** _(a preencher pela direção, por exemplo um gestor de palavras-passe partilhado)_

### Quando alguém sai da direção

1. Retirar o convite dessa pessoa no Pages CMS (ver "Convidar e retirar quem edita").
2. Se a pessoa conhecia as palavras-passe do Gmail ou do GitHub, mudá-las e atualizar o local onde estão guardadas.
3. Confirmar que a verificação em dois passos do GitHub não ficou presa ao telemóvel dessa pessoa. Se ficou, entrar com os códigos de recuperação e configurar um novo método.

---

## Publicar uma notícia

1. Entrar em https://app.pagescms.org e abrir o repositório `site`.
2. Escolher **Notícias** → **Add an entry**.
3. Preencher:
   - **Título**: curto, de preferência duas a cinco palavras. Aparece em letras grandes no cartão.
   - **Etiqueta**: linha pequena por cima do título (por exemplo, *Assembleia Geral*). Na notícia aberta aparece como subtítulo a negrito.
   - **Data**: define a ordem e o número da notícia. No site só aparecem o mês e o ano.
   - **Imagens**: opcional, até seis. Aparecem à esquerda, pela ordem indicada. JPG ou PNG com cerca de 1500 px de largura.
   - **Texto**: o corpo da notícia. O editor permite negrito, itálico, listas e ligações.
     **Para colar texto de outro sítio** (Word, Google Docs, e-mail, Facebook), usar **Ctrl+Shift+V** (no Mac, **Cmd+Shift+V**), que cola sem formatação. Com Ctrl+V normal, o texto pode trazer negritos e tipos de letra do original. Se mesmo assim um texto ficar todo a negrito, o site retira esse negrito automaticamente; os negritos pontuais mantêm-se.
4. Carregar em **Save**.
5. Esperar um a dois minutos e ver o site. Se a alteração não aparecer, recarregar a página com **Ctrl+Shift+R** (no Mac, **Cmd+Shift+R**), porque o browser pode estar a mostrar uma cópia guardada.

A numeração das notícias é automática: a mais recente fica com o número mais alto e aparece primeiro. Apagar uma notícia antiga faz mudar o número das que vêm depois.

## Publicar um comunicado de imprensa

1. No Pages CMS, escolher **Comunicados de imprensa** → **Add an entry**.
2. Preencher:
   - **Número**: o seguinte ao do último comunicado (a numeração é manual, porque a sequência antiga tem falhas: não existem o #13 e o #14).
   - **Data**: aparece na barra do comunicado (dd.mm.aaaa).
   - **Título**: opcional. Aparece em maiúsculas no início do texto.
   - **Texto**: colar com **Ctrl+Shift+V** (no Mac, **Cmd+Shift+V**), como nas notícias.
3. **Save**. O comunicado mais recente aparece em primeiro lugar e já aberto.

## Corrigir ou apagar

No Pages CMS, abrir a ficha, corrigir e carregar em **Save**. Para apagar, usar o menu da ficha. O GitHub guarda o histórico de todas as alterações, por isso qualquer engano se pode desfazer (aba **Commits** do repositório).

---

## Convidar e retirar quem edita

Só quem entra no Pages CMS com a **conta GitHub da AAVP** pode gerir convites.

1. No Pages CMS, abrir o repositório `site` → **Settings** → **Collaborators**.
2. Escrever o e-mail da pessoa e enviar o convite. A pessoa não precisa de conta GitHub.
3. Para retirar o acesso, apagar esse e-mail da lista.

Quem é convidado pode criar e editar notícias, comunicados e imagens. Não pode mexer na configuração nem convidar outras pessoas.

Recomenda-se um convite por pessoa, com o e-mail de cada uma, para se saber quem publicou o quê e para se poder retirar o acesso individualmente. O e-mail da associação pode ficar também convidado, como reserva.

---

## Mudar o aspeto (tema)

No ficheiro `_config.yml`, a linha:

```
tema: colorido
```

- `colorido`: fundo amarelo, superfícies cinzentas e vermelho. **É o tema escolhido pela direção (novembro de 2026).**
- `sobrio`: a paleta original do desenho, com fundo cinzento claro.

Muda-se uma palavra, grava-se, e o site atualiza em um a dois minutos.

---

## Editar as outras páginas

| Página | Ficheiro |
|---|---|
| Sobre (página inicial, órgãos sociais) | `index.html` |
| Estatutos | `estatutos.html` |
| Adesão | `adesao.html` (a ficha em PDF está em `docs/`) |
| Apoios | `apoios.html` |
| Contactos | `contactos.html` |
| Menu, cabeçalho e rodapé (comuns a todas) | `_layouts/base.html` |
| Cores, letras e medidas | `css/aavp.css` |

A forma mais simples de editar é o editor no browser: abrir **https://github.dev/AAVP-Artistas/site**, alterar o texto e gravar em **Source Control** → **Commit & Push**.

Cuidados:

- Não alterar as linhas entre `---` no topo de cada página, nem o que está entre `<` e `>`. Mudar só o texto.
- Ao mudar os órgãos sociais em `index.html`, cada pessoa ocupa uma linha `<dt>Cargo</dt><dd>Nome</dd>`.

---

## Estrutura do repositório (não apagar)

```
_config.yml        configuração do site e tema
.pages.yml         formulários do Pages CMS (o ponto no início do nome é obrigatório)
_layouts/          cabeçalho, menu e rodapé comuns
_noticias/         fichas das notícias
_comunicados/      fichas dos comunicados
css/  js/  fonts/  estrutura visual e fontes (Inter, licença aberta SIL OFL)
img/               imagens (as das notícias em img/noticias)
docs/              ficha de adesão em PDF
*.html             as páginas
README.md          este documento
```

Ao enviar ficheiros pelo GitHub (**Add file → Upload files**), arrastar **as pastas** e não os ficheiros soltos. Caso contrário, o GitHub põe tudo na raiz e o site deixa de usar as versões novas.

---

## Cópias de segurança

O GitHub guarda o histórico de todas as alterações (aba **Commits**), o que protege contra enganos do dia a dia. A cópia de segurança protege contra o resto: perda de acesso à conta, repositório apagado por engano, problemas do serviço ou mudança futura para outro alojamento.

**Como fazer:**

1. Na página do repositório, botão verde **Code** → **Download ZIP**. O zip contém o site inteiro: páginas, notícias, comunicados, imagens, PDF e configuração (incluindo o `.pages.yml`). Não inclui o histórico de alterações, que não é preciso para repor o site.
2. Guardar o zip no Google Drive da associação (aavp.artistas@gmail.com), na pasta **Site – cópias de segurança**, com a data no nome: `site-aavp-AAAA-MM-DD.zip`.
3. Manter pelo menos as três cópias mais recentes.

**Quando fazer:** depois de cada mudança grande (desenho, menu, páginas fixas, órgãos sociais) e, além disso, de três em três meses.

**Guardar também, na mesma pasta:**

- o ficheiro de desenho do site, `AAVP.fig` (Figma, da designer Raquel), que é a origem do desenho;
- este README, para quem precise de repor o site sem acesso ao GitHub.

**Não guardar na mesma pasta:** palavras-passe e códigos de recuperação. Ficam no local próprio das credenciais da associação, com acesso restrito à direção.

**Para repor o site a partir de uma cópia:** criar um repositório novo numa conta GitHub da associação, enviar o conteúdo do zip mantendo as pastas (ver "Estrutura do repositório"), ativar **Settings → Pages → Deploy from a branch** (`main`, `/ (root)`), voltar a ligar o domínio e reinstalar o Pages CMS nesse repositório.

---

## Domínio próprio

_(Secção a completar quando o domínio for ligado.)_

1. No repositório: **Settings → Pages → Custom domain**, escrever o domínio e gravar. O GitHub cria um ficheiro `CNAME` na raiz, que **não deve ser apagado**.
2. No registo do domínio, configurar o DNS:
   - registos **A** do domínio para `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`;
   - registo **CNAME** de `www` para `aavp-artistas.github.io`.
3. Quando o GitHub confirmar o domínio, ativar **Enforce HTTPS** na mesma página.

---

## Quando alguma coisa corre mal

- **A alteração não aparece:** esperar dois minutos e recarregar com Ctrl+Shift+R. Na aba **Actions** do repositório, a última execução de *pages build and deployment* deve estar a verde. Se estiver a vermelho, abrir e ler a mensagem de erro.
- **Páginas sem estilo, ou com código à vista** (por exemplo `{% for` ou `layout: base`): faltam as pastas com `_`, ou o GitHub Pages não está em **Settings → Pages → Deploy from a branch** (`main`, `/ (root)`), ou existe um ficheiro `.nojekyll`, que deve ser apagado.
- **O Pages CMS não mostra Notícias nem Comunicados:** falta o ficheiro `.pages.yml` na raiz, ou perdeu o ponto no início do nome.

---

## Créditos

Desenho do site: Raquel (ficheiro Figma "AAVP"). Fonte: Inter, SIL Open Font License. Site estático em GitHub Pages (Jekyll), com edição de conteúdos em Pages CMS. Novembro de 2026.
