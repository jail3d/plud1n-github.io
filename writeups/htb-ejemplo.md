---
title: Ejemplo
machine: Ejemplo
platform: HTB
difficulty: Easy
os: Linux
ip: 10.10.11.123
date: 2026-07-02
points: 20
tags: ejemplo, plantilla, web, sqli, privesc
---

Esta es una **plantilla de writeup** con el estilo pelud1n. Copia este archivo, renómbralo y edita el contenido: todo lo que escribas en Markdown se convierte a este estilo automáticamente (títulos, bloques de código tipo terminal, tablas, capturas y badges).

## Reconocimiento

Escaneo de puertos con `nmap`:

```bash
nmap -sC -sV -oA nmap/ejemplo 10.10.11.123
```

Puertos relevantes:

| Puerto | Servicio | Versión |
|--------|----------|---------|
| 22/tcp | ssh      | OpenSSH 8.9 |
| 80/tcp | http     | nginx 1.18  |

## Enumeración web

Fuzzing de directorios con `gobuster`:

```bash
gobuster dir -u http://10.10.11.123 -w /usr/share/wordlists/dirb/common.txt
```

> Recuerda: trabaja siempre sobre entornos de laboratorio **autorizados**.

Encontramos un panel de login en `/admin`.

![Panel de login](img/ejemplo-login.png)

## Explotación

Inyección SQL en el formulario de login:

```sql
' OR 1=1-- -
```

Con acceso, subimos una webshell y obtenemos ejecución de comandos (`www-data`).

## Escalada de privilegios

Buscamos binarios SUID mal configurados:

```bash
find / -perm -4000 -type f 2>/dev/null
```

Abusamos de uno con la técnica de [GTFOBins](https://gtfobins.github.io/) y llegamos a `root`.

## Conclusión

- **Cadena:** SQLi → webshell → SUID → root.
- **Aprendizajes:** validar la entrada del usuario y revisar `sudo -l` y binarios SUID.

*Flags obtenidas en laboratorio controlado.*
