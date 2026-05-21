# Portfólio — Tiago O. de Farias

Site estático de currículo publicado em [GitHub Pages](https://pages.github.com/).

**URL:** https://tofariasti.github.io/

## Estrutura

```
├── index.html          # Portfólio desenvolvimento (PT/EN)
├── drone.html          # Portfólio Tech Drone 360 (página separada)
├── css/style.css       # Estilos
├── js/script.js        # Idioma, menu, carrossel, cookies
├── img/favicon.svg     # Ícone
└── assets/
    └── Tiago-Farias-CV.pdf
```

## Publicar no GitHub Pages

1. Crie um repositório **público** chamado exatamente `tofariasti.github.io` na conta [tofariasti](https://github.com/tofariasti).

2. Envie este código para a branch `main`:

```bash
cd /caminho/para/este/projeto
git init
git add .
git commit -m "Add professional portfolio site"
git branch -M main
git remote add origin https://github.com/tofariasti/tofariasti.github.io.git
git push -u origin main
```

3. No GitHub: **Settings → Pages → Build and deployment → Source:** Deploy from a branch → **main** → **/ (root)** → Save.

4. Aguarde alguns minutos e abra https://tofariasti.github.io/

5. (Opcional) No [perfil GitHub](https://github.com/tofariasti), campo **Website**, coloque `https://tofariasti.github.io/`.

## Atualizar o currículo

1. Substitua `assets/Tiago-Farias-CV.pdf` pelo PDF atualizado.
2. Ajuste textos em `index.html` se necessário.
3. Faça commit e push.

## Desenvolvimento local

Abra `index.html` com um servidor local (evita problemas de CORS em alguns browsers):

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Páginas

- **Desenvolvimento:** https://tofariasti.github.io/
- **Drone (Tech Drone 360):** https://tofariasti.github.io/drone.html

Use as abas **Desenvolvedor de Software** / **Operador de Drone** no topo para alternar entre as duas áreas.

## Contactos no site

- WhatsApp: +55 51 98903-0405
- E-mail: tiago.farias.poa@gmail.com
- LinkedIn: https://linkedin.com/in/tiago-farias1985
- GitHub: https://github.com/tofariasti
