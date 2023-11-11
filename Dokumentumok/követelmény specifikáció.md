# Követelmény specifikáció

## 1. Áttekintés
Az applikáció célja, hogy statisztikát tudjunk gyűjteni különböző kérdőívek alapján. Az alkalmazás web felületen elérhető. A felhasználó bejelentkezés nélkül csak a kérdőív témákat látja. Ahhoz, hogy kitölteni is tudja őket, be kell jelentkezni. Ha nem rendelkezik fiókkal a felhasználó, regisztrálnia szükséges. Az adminok különböző témájú kérdőíveket tudnak létrehozni.
## 2. A jelenlegi helyzet leírása
Napjainkban egyre elterjettebb, hogy kérdőíveket töltenek ki az emberek. Ezért gondoltuk, hogy egy olyan portált érdemes létrehozni, ahol kérdőívek szerepelnek. A weboldalon statisztikát tudunk gyűjteni a kérdőívekről. Ezzel a funkcióval kiderül, hogy a közösség mégis hogyan gondolkodik. Természetesen a statisztikák anoním módon vannak tárolva.
## 3. Vágyálomrendszer
A cél egy kérdőívportál elkészítése, web applikáció formájában. Lehetőség lesz kérdőíveket létrehozni, a leadott eredmények alapján pedig az oldal statisztikát készít. 
## 4. Jelenlegi üzleti folyamatok modellje
Az oldalon különböző kérdőíveket tölthetnek ki a felhasználók, a kitöltés után a statisztikákat is láthatják, visszajelzést kapnak, hogy a többi felhasználó milyen válaszokat adott.
## 5. Igényelt üzleti folyamatok modellje
A felhasználó az főoldalon regisztrálhat, majd bejelentkezhet. Belépés nélkül a főoldalon csak a kérdőívek témáját látja, kitölteni nem tudja őket. Amennyiben a felhasználó admin, lehetősége lesz kérdőívet létrehozni, ha nem admin, akkor kérdőív kitöltésre van lehetősége, illetve a beérkező válaszokból készített statisztikák megtekintésére.
## 6. Követelménylista

| Id | Modul | Név | Leírás |
| :---: | --- | --- | --- |
| K1 | Főoldal | Design, Gombok | Könnyen kezelhető, figyelemfelkeltő főoldal |
| K2 | Főoldal | Kérdőív témák | Témák kialakítása |
| K3 | Bejelentkezés | Design | Bejelentkező felület kialakítása |
| K4 | Regisztráció | Design | Regisztrációs felület kialakítása |
| K5 | Funkció | Jelszó megváltoztatása | A felhasználó megtudja változtatni a jelszavát a profilján |
| K6 | Jogosultág | Szintek | <ul><li> Vendég: Regisztráció, Belépés, Témák láthatósága</li><li> Felhasználó: kérdőívek kitöltése, statisztika megnézése, jelszó módosítás </li><li>Admin: Kérdőív létrehozása</li></ul>|
| K7 | Főoldal | Kérdőív témák | Kérdőívek kialakítása |
| K8 | Kérdőív | Design | Témára kattintás után kérdőívek felsorolása |

## 7. Fogalomtár
