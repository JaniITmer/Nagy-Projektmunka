# Követelmény specifikáció

## 1. Áttekintés
Az weboldal célja, hogy statisztikát tudjunk gyűjteni különböző kérdőívek alapján. Az szoftver web felületen elérhető. A felhasználó bejelentkezés nélkül vendég módban van, ez azt jelenti, hogy a főoldalon nem jelennek meg a kérdőívek, se a kérdőívek létrehozásának lehetősége. A kérdőívek megjelenítésére először be kell jelentkezni, ezt követőleg felhasználó rangot kapja meg az aktuális felhasználó. A felhasználói jog biztosítja a kérdőívek létrehozást, kitöltése, valamint elérhető lesz a statisztika illetve profil oldalak is. A felhasználó regisztrálása után az adatai elmentésre kerülnek az adatbázisban, amit követelőleg bejelentkezni is van lehetősége.
## 2. A jelenlegi helyzet leírása
Napjainkban egyre elterjettebb, hogy kérdőíveket töltenek ki az emberek, és ezek nagy segítséget jelenthetnek a különböző témákban való véleménynyilvánításban. A modern technológia lehetővé teszi, hogy egy online portálon keresztül könnyen elérhetőek legyenek a különböző témájú kérdőívek, amelyekre az emberek könnyedén válaszolhatnak. Egy ilyen portál segítségével nemcsak a felhasználók kényelmesen fejezhetik ki véleményüket, hanem a platform üzemeltetői is értékes adatokhoz juthatnak a felhasználói preferenciákról. A weboldalon statisztikákat gyűjthetünk a kérdőívek eredményeiről, és ezáltal betekintést nyerhetünk a közösség gondolkodásmódjába.Fontos kiemelni, hogy a felhasználók válaszai teljes mértékben anonimek és bizalmasak, hiszen a statisztikák tárolása során nem kerül rögzítésre az egyes személyek azonosítója. Ezáltal a résztvevők biztonságban érezhetik magukat, és szabadon kifejezhetik véleményüket a különféle témákról, miközben hozzájárulnak egy szélesebb közösség véleményének formálásához.
## 3. Vágyálomrendszer
A cél egy kérdőívportál elkészítése, weboldal formájában. Lehetőség lesz kérdőíveket létrehozni, a leadott eredmények alapján pedig az oldal statisztikát készít. Az oldal magyar nyelvű lesz, felhasználóbarát kezelőfelülettel, könnyű kezelhetőséggel. Modern és jól átláható design-nal törekszünk a minél szélesebb felhasználói kör bevonzására. Emellett folyamatos fejlesztéseken keresztül biztosítjuk a biztonságos és innovatív megoldásokat az optimális felhasználói élmény érdekében.
## 4. Jelenlegi üzleti folyamatok modellje
Az oldalon kérdőíveket tölthetnek ki a felhasználók, témák szerint csoportosítva válogathatnak kedvük szerint. Az adott válaszokból statisztikák készülnek, ami hasznos lehet például, ha valaki kutatómunkát vagy valamilyen elemzést végez. A felhasználók könnyedén létrehozhatnak saját kérdőíveket, személyre szabva azokat saját témájuk és preferenciájuk szerint. Az oldal által készített részletes statisztikák segítik a felhasználókat az adatok mélyebb megértésében és az információk hatékonyabb felhasználásában.

## 5. Igényelt üzleti folyamatok modellje
A felhasználó az főoldalon regisztrálhat, majd bejelentkezhet. Amennyiben a felhasználó már nem vendég felhasználói joggal rendelkezik, lehetősége lesz kérdőívet létrehozni, kérdőív kitöltésre van lehetősége, illetve a beérkező válaszokból készített statisztikák megtekintésére.
## 6. Követelménylista

| Id | Modul | Név | Leírás |
| :---: | --- | --- | --- |
| K1 | Főoldal | Design, Gombok | Könnyen kezelhető, figyelemfelkeltő főoldal |
| K2 | Főoldal | Kérdőív témák | Témák kialakítása |
| K3 | Főoldal | Kérdőívek | Kérdőívek kialakítása |
| K4 | Bejelentkezés | Design | Bejelentkező felület kialakítása |
| K5 | Regisztráció | Design | Regisztrációs felület kialakítása |
| K6 | Jogosultág | Szintek | <ul><li> Vendég: Regisztráció, Belépés </li><li> Felhasználó: kérdőívek kitöltése, kérdőívek létrehozása, statisztika megnézése, profil megnézése </li></ul>|
| K7 | Főoldal | Kérdőív témák, kérdőívek | Témák, Kérdőívek kialakítása |
| K8 | Kérdőív | Design | Témákon belül kérdőívek megjelenítése |
| K9 | Statisztika | Design | Kitöltött kérdőívek megjelenítése |
| K10 | Statisztika | Funkció | Kitöltött kérdőívre kattintás után statisztika megjelenítése |

## 7. Fogalomtár

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

