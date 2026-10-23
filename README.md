# Sellio — site público

Páginas exigidas pela App Store e pelo Google Play, em português e inglês:

| Página | Ficheiro | Usada em |
|---|---|---|
| Apoio | `index.html` | URL de apoio (App Store), contacto (Play) |
| Política de privacidade | `privacy.html` | App (Conta e registo), App Store Connect, Play Console |
| Termos de utilização | `terms.html` | App (Conta e registo) |
| Apagar conta | `delete-account.html` | Play Console → Data safety → "Delete account URL" |

O idioma escolhe-se por `?lang=pt` ou `?lang=en` (a app envia-o), depois pela última escolha e, por
fim, pelo idioma do navegador. Sem JavaScript, as duas versões aparecem.

## Publicar no GitHub Pages

1. Cria um repositório **público** chamado `sellio-site` em github.com/patrikgsantos.
2. Nesta pasta:
   ```
   git init && git add -A && git commit -m "Site do Sellio"
   git branch -M main
   git remote add origin https://github.com/patrikgsantos/sellio-site.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, pasta `/ (root)`, **Save**.
4. Ao fim de um minuto ou dois, o site fica em `https://patrikgsantos.github.io/sellio-site/`.

## Atualizar

Edita o HTML, muda a data "Última atualização / Last updated" se mudares a política ou os termos, e faz
`git commit` e `git push`.
