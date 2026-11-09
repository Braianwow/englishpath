# EnglishPath

Plataforma para estudiar inglÃ©s B1â€“B2: gramÃ¡tica en 145 unidades, vocabulario con repeticiÃ³n espaciada, Mis palabras, listening, speaking con conversaciÃ³n por voz con IA, reading, writing, evaluaciones, racha diaria de 2 horas y cronÃ³metro de 30 minutos por secciÃ³n.

## Usar en tu compu

```bash
npm install
npm run dev
```

AbrÃ­ http://localhost:5173.

## PublicaciÃ³n

El sitio compilado (`npm run build`) se publica en la rama `gh-pages`, que GitHub Pages sirve.

## Claves de API (opcionales)

- **Claude** (conversaciÃ³n con Jake y asistente): se carga en *Ajustes*.
- **ElevenLabs** (voz mÃ¡s humana): se carga en *Ajustes â†’ Voz*.

Las claves se guardan solo en el navegador de quien las carga y se envÃ­an Ãºnicamente a la API correspondiente. Nunca se suben al repositorio.

## CrÃ©ditos

- Voz gratuita: modelo [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) (Apache-2.0) mediante `kokoro-js`.
- Todo el contenido de ejercicios es original de esta plataforma.
