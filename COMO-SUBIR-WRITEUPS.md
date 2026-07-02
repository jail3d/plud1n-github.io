# pelud1n · Cómo hacer y subir writeups

Tu web ahora tiene un sistema de writeups con el mismo estilo. Escribes en **Markdown** y se convierte solo. Nada de HTML.

## Cómo funciona
- **`writeups.html`** → la lista de todos tus writeups (lee `writeups/list.json`).
- **`writeup.html?p=SLUG`** → renderiza `writeups/SLUG.md` con el estilo pelud1n.
- Desde la home, la sección **WRITEUPS** ya enlaza aquí.

## Crear un writeup nuevo (3 pasos)

1. **Copia la plantilla.** Duplica `writeups/_PLANTILLA.md` y renómbralo con un nombre corto en minúsculas y con guiones, p. ej. `htb-codify.md`. Ese nombre (sin `.md`) es el **slug**.

2. **Rellena el front-matter y escribe.** Arriba del archivo, entre las dos líneas `---`, van los datos:
   ```
   ---
   machine: Codify
   platform: HTB
   difficulty: Easy        # Easy / Medium / Hard / Insane (cambia el color solo)
   os: Linux
   ip: 10.10.11.239
   date: 2026-07-02
   points: 20
   tags: web, nodejs, privesc
   ---
   ```
   Debajo escribes el writeup en Markdown normal (ver chuleta abajo).
   - **Capturas:** mételas en `writeups/img/` y ponlas con `![texto](img/tu-captura.png)`.

3. **Añade una línea a `writeups/list.json`** para que aparezca en la lista:
   ```json
   { "slug": "htb-codify", "title": "Codify", "platform": "HTB", "difficulty": "Easy", "date": "2026-07-02", "tags": ["web","nodejs","privesc"] }
   ```
   (Ojo con las comas entre elementos del array.)

## Subirlo (GitHub Desktop — ya lo tienes clonado)

1. Guarda tu `.md` (y las capturas) dentro de `Documentos\GitHub\plud1n-github.io\writeups\`.
2. Actualiza `writeups\list.json`.
3. Abre **GitHub Desktop** → verás los cambios → escribe un resumen (ej. `writeup: Codify`) → **Commit to main** → **Push origin**.
4. En ~1-2 min está online:
   - Lista: `https://jail3d.github.io/plud1n-github.io/writeups.html`
   - Writeup: `https://jail3d.github.io/plud1n-github.io/writeup.html?p=htb-codify`

> Truco: puedes editar el `.md` directamente en la carpeta del repo con VS Code o el Bloc de notas; GitHub Desktop detecta el cambio al guardar.

## Chuleta Markdown

```
# Título grande        ## Sección        ### Subsección
**negrita**   *cursiva*   `código en línea`

​```bash
comando en bloque tipo terminal
​```

- lista
1. lista numerada

> cita / aviso

| col A | col B |
|-------|-------|
| dato  | dato  |

![descripción](img/captura.png)
[texto del enlace](https://url)
```

Con eso tienes writeups con el estilo pelud1n en 3 pasos. 
