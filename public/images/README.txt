This site currently uses free stock photos from Unsplash (linked directly by
URL in src/data/siteConfig.js and src/data/packages.js) so it looks complete
out of the box.

To use your own photos instead:

1. Add your image files here, e.g.:
   hero.jpg
   guide.jpg
   hiking.jpg
   family.jpg
   birthday.jpg

2. In src/data/siteConfig.js, change each path in the `images` object to
   "/images/your-file-name.jpg".

3. In src/data/packages.js, change each package's "image" field the same way.

Any image around 1200px wide works well. Keep file sizes under ~300KB each
so the page stays fast to load on mobile data.
