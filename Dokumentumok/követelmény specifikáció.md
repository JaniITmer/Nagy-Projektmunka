# Követelmény specifikáció

## 1. Áttekintés
Az applikáció célja, hogy statisztikát tudjunk gyűjteni különböző kérdőívek alapján. Az alkalmazás web felületen elérhető. A felhasználó bejelentkezés nélkül csak a kérdőív témákat látja. Ahhoz, hogy kitölteni is tudja őket, be kell jelentkezni. Ha nem rendelkezik fiókkal a felhasználó, regisztrálnia szükséges. Az adminok különböző témájú kérdőíveket tudnak létrehozni.
## 2. A jelenlegi helyzet leírása
Napjainkban egyre elterjettebb, hogy kérdőíveket töltenek ki az emberek. Ezért gondoltuk, hogy egy olyan portált érdemes létrehozni, ahol kérdőívek szerepelnek. A weboldalon statisztikát tudunk gyűjteni a kérdőívekről. Ezzel a funkcióval kiderül, hogy a közösség mégis hogyan gondolkodik. Természetesen a statisztikák anoním módon vannak tárolva.
## 3. Vágyálomrendszer
A cél egy kérdőívportál elkészítése, web applikáció formájában. Lehetőség lesz kérdőíveket létrehozni, a leadott eredmények alapján pedig az oldal statisztikát készít. Az oldal magyar nyelvű lesz, felhasználóbarát kezelőfelülettel, könnyű kezelhetőséggel. Modern és jól átláható design-nal törekszünk a minél szélesebb felhasználói kör bevonzására.
## 4. Jelenlegi üzleti folyamatok modellje
Az oldalon kérdőíveket tölthetnek ki a felhasználók, témák szerint csoportosítva válogathatnak kedvük szerint. Az adott
válaszokból statisztikák készülnek, ami hasznos lehet például, ha valaki kutatómunkát vagy valamilyen elemzést végez. Természetesen előfordulhat, hogy egy felhasználó nem valós válaszokat ad, ami torzíthatja a statisztikát. Az ilyen esetek elkerülésének érdekében, az admin jogosultsággal rendelkező felhasználóknak lehetőségük lesz a statisztikák, illetve kérdőívek törlésére. 

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
•	Admin: Elsődleges jogosultság - teljes hozzáféréssel a weboldal összes funkciójához.
•	Felhasználó: Másodlagos jogosultsági - lekorlátozott hozzáférés, nincs lehetőség kérdőív létrehozására.
•	Vendég felhasználó: Harmadlagos jogosultság - lekorlátozott hozzáférés, nincs lehetőség kérdőív létrehozására, kérdőív kitöltésére, profil szerkeztésére.
•	Adatbázis: Strukturált adatgyűjtemény, amelyet úgy tárolnak és szerveznek, hogy hatékony visszakeresést tesz lehetővé.
•	XAMPP: Olyan szoftvercsomag, amely tartalmazza az Apache webszervert, a MySQL adatbázist és a PHP szkriptnyelvet.
•	React: A React.js egy nyílt forráskódú JavaScript könyvtár, melyet a felhasználói felületek fejlesztésére terveztek, és a deklaratív, komponensalapú megközelítésével segít az alkalmazások dinamikus és hatékony kialakításában.
•	Webszerver: Egy számítógépes rendszer, amely weboldalakat és más webes tartalmakat szállít felhasználóknak.
•	Adatbázis: Strukturált adatgyűjtemény, amelyet úgy tárolnak és szerveznek, hogy hatékony visszakeresést tesz lehetővé.
•	API: Az alkalmazásprogramozási felület, egy protokoll- és eszközkészlet a szoftveralkalmazások építéséhez.
•	HTTPS: A Hipertext Transzfer Protokoll biztonságos kiterjesztése, amely biztonságos kommunikációt biztosít az interneten.
•	MVC: A Model-View-Controller szoftvertervezési minta, amely három összekapcsolt részre bontja az alkalmazást: a modellre, a nézetre és az irányítóra.
•	SSL: A Secure Sockets Layer protokoll, amely biztonságos kommunikációs kapcsolatokat hoz létre a hálózaton keresztül kapcsolódó számítógépek között.

