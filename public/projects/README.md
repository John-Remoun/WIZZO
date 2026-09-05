# Adding your own project photos

This folder is where you drop your own project photos. Everything in
`public/` is served as-is by the website, so a file at:

```
public/projects/project-1/photo-1.jpg
```

is reachable on the live site at the URL path:

```
/projects/project-1/photo-1.jpg
```

## Adding a new project

1. **Create a folder** for the project inside `public/projects/`, e.g.
   `public/projects/kitchen-rewire-nantes/`.
2. **Drop your photos** into that folder — as many as you like (JPG, PNG, or
   WebP). No naming convention is required, but something readable like
   `photo-1.jpg`, `photo-2.jpg` keeps things tidy.
3. **Register the project** in `src/data/content.ts`, in the `projects`
   array. Add a new entry and list your image paths in the `images` array:

   ```ts
   {
     id: 'kitchen-rewire-nantes',
     category: 'kitchen', // kitchen | rooms | bathrooms | construction | panel
     title: { fr: 'Rénovation cuisine', en: 'Kitchen rewire' },
     location: 'Nantes, France',
     description: {
       fr: 'Description en français…',
       en: 'Description in English…',
     },
     services: { fr: ['Rénovation'], en: ['Renovation'] },
     images: [
       '/projects/kitchen-rewire-nantes/photo-1.jpg',
       '/projects/kitchen-rewire-nantes/photo-2.jpg',
       '/projects/kitchen-rewire-nantes/photo-3.jpg',
     ],
     imageAlt: { fr: 'Description de l\'image', en: 'Image description' },
   },
   ```

4. Save the file. That's it — the project card will automatically:
   - cycle through all listed images on hover (desktop),
   - cycle through them every 3 seconds automatically (mobile/touch),
   - show all of them with navigation dots in the project detail popup.

## Updating an existing project's photos

Just add or remove files in that project's folder and update its `images`
array in `src/data/content.ts` to match. A project can have any number of
images — one is fine (no cycling will happen), and any number above that
will cycle automatically.

## Notes

- Keep photos reasonably sized (roughly 1200px wide is plenty) so the site
  stays fast to load.
- The 8 example projects currently in `content.ts` (`proj-1` through
  `proj-8`) use placeholder Unsplash photos in their `images` arrays.
  Replace those arrays with your own local paths (e.g.
  `public/projects/proj-1/photo-1.jpg`) the same way described above —
  you can keep the existing `id` values or rename them, as long as the
  folder name and the `images` paths match.
