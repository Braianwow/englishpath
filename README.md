# EnglishPath

Plataforma para estudiar inglés B1–B2: gramática en 145 unidades, vocabulario con repetición espaciada, Mis palabras, listening, speaking con conversación por voz con IA, reading, writing, evaluaciones, racha diaria de 2 horas y cronómetro de 30 minutos por sección.

## Usar en tu compu

```bash
npm install
npm run dev
```

Abrí http://localhost:5173.

## Publicación

El sitio compilado (`npm run build`) se publica en la rama `gh-pages`, que GitHub Pages sirve.

## Claves de API (opcionales)

- **Claude** (conversación con Jake y asistente): se carga en *Ajustes*.
- **ElevenLabs** (voz más humana): se carga en *Ajustes → Voz*.

Las claves se guardan solo en el navegador de quien las carga y se envían únicamente a la API correspondiente. Nunca se suben al repositorio.

## Créditos

- Voz gratuita: modelo [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) (Apache-2.0) mediante `kokoro-js`.
- Todo el contenido de ejercicios es original de esta plataforma.
