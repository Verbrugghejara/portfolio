# Project Data Aanpassen

Om je projecten aan te passen in de carousel, open `src/screens/homePage.vue` en zoek naar de `projects` array in het `<script setup>` gedeelte.

## Voorbeeld

```typescript
const projects = [
  {
    id: 1,
    title: 'The easy cat set',
    category: 'IoT',
    description: 'An IoT solution to make pet care easier',
    imageUrl: '/projects/catset.jpg' // Optioneel: voeg afbeelding toe aan /public/projects/
  },
  {
    id: 2,
    title: 'Project Name 2',
    category: 'Web App',
    description: 'A modern web application',
    imageUrl: ''
  },
  // ... meer projecten
]
```

## Een project vervangen

1. Zoek het project dat je wilt vervangen (bijv. project met id: 3)
2. Pas de gegevens aan:

```typescript
{
  id: 3,
  title: 'Mijn Nieuw Project',     // Nieuwe titel
  category: 'E-commerce',           // Nieuwe categorie
  description: 'Online winkel',    // Nieuwe beschrijving
  imageUrl: '/projects/shop.jpg'   // Nieuwe afbeelding (optioneel)
}
```

## Afbeeldingen toevoegen

- Plaats je project afbeeldingen in de `/public/projects/` map
- Gebruik het pad `/projects/jouw-afbeelding.jpg` in `imageUrl`
- Als `imageUrl` leeg is (`''`), wordt het project nummer getoond

## Een project toevoegen/verwijderen

- **Toevoegen**: Voeg een nieuw object toe aan de array
- **Verwijderen**: Verwijder het project object uit de array
- De carousel past zich automatisch aan!
