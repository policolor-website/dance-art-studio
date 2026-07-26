# Cabanele Rus Budești — Plan Adaptare Template

## Template sursă
Pensiunea Angela (Next.js 16, React 19, Tailwind CSS v4, TypeScript)
- **Cale template:** `/Users/teraki/Desktop/SITE-URI PENSIUNI/PENSIUNEA ANGELA`
- **Cale destinație:** `/Users/teraki/Desktop/SITE-URI PENSIUNI/Cabanele RUS`

## Ce se modifică vs ce se păstrează

### Păstrăm (structură + componente)
- ✅ Toate componentele: Navbar, Footer, Hero, BookingEngine, BookingForm, DatePicker, ImageSlider, RoomGallery, Facilities, Reviews, CTA, Reveal, FAQ, Phone3D
- ✅ Structura pagini: /, /despre-noi, /camere, /camere/[slug], /galerie, /contact, /blog
- ✅ Booking Engine cu WhatsApp (schimbăm doar numărul de telefon)
- ✅ Design: paletă night/gold/cream, fonturi Playfair Display + Inter
- ✅ Lightbox, galerie cu tab-uri, slider autoplay
- ✅ Dark theme cu gradient auriu

### Modificăm

#### 1. `src/lib/data.ts` — Date complete
- **Rooms:** 4 tipuri (nu 5) — Camera dublă la parter, Camera dublă la etaj, Camera dublă, Camera dublă family
- **Gallery images:** 47 imagini noi din `/images/cabanele-rus/` (nu pensiunea-angela)
- **Activities:** Activități specifice Cabanele Rus (Husky, ponei, piscină, schi Cavnic, drumeții, călărie)
- **Reviews:** Recenzii noi (Ion Burlan, etc.)
- **FAQ:** Întrebări specifice Cabanele Rus

#### 2. `BookingEngine.tsx` + `BookingForm.tsx`
- **Telefon WhatsApp:** 40758660941 (în loc de 40727795599)
- **Nume în mesaj:** "Cabanele Rus" (în loc de "Pensiunea Angela")

#### 3. `Navbar.tsx`
- **Logo:** Logo Cabanele Rus (trebuie creat/obținut)
- **Meniu:** Acasă, Despre noi, Cabane, Galerie, Agrement, Contact
  - "Camere" → "Cabane" (sau "Cazare")

#### 4. `Footer.tsx`
- **Nume:** Cabanele Rus Budești
- **Adresa:** Strada Principală nr. 266 R1 și R2, Budești, Maramureș
- **Telefon:** 0758 660 941
- **Link-uri utile:** Obiective turistice din Maramureș

#### 5. `Hero.tsx`
- **Titlu:** Cabanele Rus
- **Subtitlu:** Budești · Maramureș
- **Video/Imagine:** Imagine din pozele descărcate (nu video pensiune)

#### 6. `DespreNoi.tsx`
- **Text:** Descriere Cabanele Rus (3 cabane, 1.9 ha, Valea Răchițele, Husky, ponei)
- **Imagine:** hotel-38291926 sau 27

#### 7. `Facilities.tsx`
- **Facilități:** Piscină încălzită, șemineu, grătar, jacuzzi, ponei, husky, parcare, WiFi, terasă, loc de joacă

#### 8. `ImageSlider.tsx`
- **Imagini:** Din `/images/cabanele-rus/` (selectăm cele mai bune 6-8)

#### 9. `RoomsPreview.tsx`
- **Camere:** 4 tipuri (nu 5)
- **Imagini:** camera-12415450, 59, 79, 87

#### 10. `Reviews.tsx`
- **Recenzii:** Cele 3 recenzii detaliate + scor 9.6/10

#### 11. `CTA.tsx`
- **Text:** Specific Cabanele Rus
- **Telefon:** 0758 660 941

#### 12. `globals.css`
- **Paletă:** Păstrăm night/gold/cream (funcționează bine pentru cabane rustice)

#### 13. `layout.tsx`
- **Metadata:** Cabanele Rus Budești — titlu, descriere, SEO

#### 14. Imagini
- **Ștergem:** `/images/pensiunea-angela/`, `/images/camere/`, `/images/agrement/`, `logo-angela.png`
- **Păstrăm:** `/images/cabanele-rus/` (47 imagini)
- **Logo:** Trebuie creat logo Cabanele Rus

#### 15. `page.tsx` (camere)
- **Titlu:** "Cabanele noastre" sau "Cazare"
- **BookingEngine:** Păstrăm, schimbăm numărul

#### 16. `camere/[slug]/page.tsx`
- **Room data:** Din noul data.ts

#### 17. `galerie/page.tsx`
- **Tab-uri:** Toate / Exterior / Interior / Camere / Facilități
- **Imagini:** Din `/images/cabanele-rus/`

#### 18. `agrement/`
- **Activități:** 
  1. Piscină încălzită cu vedere
  2. Plimbări cu ponei
  3. Curse cu sanii trase de Husky
  4. Schi — Pârtiile Cavnic (5km)
  5. Drumeții — Creasta Cocoșului
  6. Călărie — Centrul Casa Pașcu (1km)
  7. Bazine apă sărată — Ocna Șugatag (13km)
  8. Izvor BORCUT — apă minerală (0.8km)

#### 19. `contact/page.tsx`
- **Adresa:** Strada Principală nr. 266 R1 și R2, Budești, Maramureș
- **Telefon:** 0758 660 941
- **Email:** (de obținut)
- **Hartă:** Google Maps embed pentru Budești, Maramureș

## Ordine de execuție
1. Curățare imagini vechi + păstrare imagini noi
2. `data.ts` — date complete (rooms, gallery, activities, reviews, FAQ)
3. `BookingEngine.tsx` + `BookingForm.tsx` — telefon + nume
4. `Navbar.tsx` + `Footer.tsx` — logo, meniu, contact
5. `Hero.tsx` — titlu, imagine
6. `DespreNoi.tsx` — text, imagine
7. `Facilities.tsx` — facilități noi
8. `ImageSlider.tsx` — imagini noi
9. `RoomsPreview.tsx` — camere noi
10. `Reviews.tsx` — recenzii noi
11. `CTA.tsx` — text + telefon
12. `layout.tsx` — metadata
13. Pagini: `camere/`, `camere/[slug]/`, `galerie/`, `agrement/`, `contact/`
14. Testare locală
