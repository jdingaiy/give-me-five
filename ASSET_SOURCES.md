# Icon resources

- Interface icons except the retained iOS-style status bar use official Phosphor SVG geometry from https://github.com/phosphor-icons/core/tree/main/assets (regular / fill).
- Reference catalog: https://phosphoricons.com/. `dist/phosphor-icons.js` embeds original paths unchanged; sizes and colors follow the prototype.
- Selected glyphs: at, chat-circle-dots, heart, smiley-sad, star, user (fill), hand-palm, pencil-simple-line, share-fat.
- Menus, composer and messages also use Phosphor. The top status bar retains its previous Apple-style artwork. License: `dist/PHOSPHOR-LICENSE.txt`.
- Avatar artwork, note photos and animated hand emoji are content, separate from interface icons.

- Updated selections: hands-clapping regular/fill for high-five; chat-teardrop for 问点点; wifi-medium rotated clockwise 90 degrees for private chat voice.

- High-five motion: user supplied `pdjWAaVoEn(1).json`, embedded unchanged in `dist/assets/high-five-data.js`; renderer omits the Background layer and plays the first contact/recoil only. Local Lottie SVG player v5.12.2: https://github.com/airbnb/lottie-web (MIT, `dist/vendor/LOTTIE-LICENSE.txt`). Avatar translation and photo compression use the existing CSS animation system.
