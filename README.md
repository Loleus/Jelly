# Glut Żelek - Wieże

Gra platformowa 3D. Wspinaj sie po spiralnej wiezy, zbieraj klejnoty i unikaj przeszkod.

## Sterowanie

| Klawisz | Akcja |
|---|---|
| Lewo/Prawo lub A/D | Ruch |
| Gora lub Spacja | Skok |
| Dol lub S | Drzwi / Dzwignia |
| R | Restart poziomu |

## Elementy wiezy

- **Schodki** - podstawowe platformy. Zlota krawedz.
- **Windy** - ruchome platformy, niebieska krawedz.
- **Sprezyny** - wyrzucaja gracza w gore.
- **Klejnoty** - zbierz wszystkie aby zaliczyc poziom.
- **Checkpointy** - zapisuja postep na wiezy.
- **Drzwi** - teleportuja miedzy dwoma punktami. Stan i nacisnij Dol/S.
- **Zapadnie** - schodki z czerwona krawedzia. Po wejsciu chowaja sie w sciane na kilka sekund.
- **Dzwignie** - przelaczniki z kolorowa kulka. Dol/S wysuwa lub chowa polaczony schodek. Kulka zielona = wysuniety, czerwona = schowany.
- **Pilki** - czerwone kule patrolujace lub skaczace. Unikaj kontaktu.

## Zasady

- Aby zaliczyc poziom, musisz zebrac wszystkie klejnoty i dotrzec na szczyt wiezy.
- Zegar startuje przy pierwszym ruchu.
- Po zaliczeniu wszystkich poziomow gra konczy sie ekranem gratulacyjnym.

## Technologia

- Three.js (WebGL)
- React + TypeScript
- Vite
- Tailwind CSS

## Uruchomienie

npm install
npm run dev

## Autor

Loleus
