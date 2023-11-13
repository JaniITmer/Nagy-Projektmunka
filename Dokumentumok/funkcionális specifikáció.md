# Funkcionális specifikáció
## 1. Jelenlegi helyzet leírása
A mai viálágban már mindenki találkozott valamilyen kérdőívvel, legyen szó papír vagy akár elektronikus alpú kérdőívekről. A papír alapú kérdőívekkel a következők a problémák: a nyomtatás, a postaköltségek, a beérkező kérdőívek kódolásának bonyodalmai és költségei. Az elektronikus kérdőívek esetében viszont a visszaérkezett adatokat nem kell kódolni, egy jól megírt program automatikusan kitudja értékelni vagy akár statisztikát is tud készíteni belőle. A felhasználó(kitöltő) számára ez egy könnyű, komfortos módszer, így a válaszadási hajlandóság is növelhető. Összességében az online kérdőívek egyre csak népszerűbb alternatíva, hiszen kényelmes, és az otthon melegében is egyszerűen kitölthető.
## 2. Vágyálomrendszer leírása
A következőképpen nézz ki a kérdőív portál vágyálom rendszere:

   1. A felhasználónak van lehetősége be- és kijelentkeznie, valamint regisztrálnia.
   2. Kédrőívek kitöltésének lehetősége (választható kérdőívek, több témában).
   3. A kitöltött kérdőívek alapján statisztika megjelenítése (a szavazatok alapján megjelenik a szavaztak aránya).
   4. A felhasználó adatainak és a kérdőívekben leadott válaszoknak adatbázisban való kezelése. 
   5. Több oldalas megjelítés (Főoldal, regisztrációs/bejelentkzős oldal, kérdőív oldalak).
   6. A főoldal tartalmazza a profilt, a kérdőveket.
   7. Több jogosultság (admin, felhasználó, vendég felhasznló) létrehozása.
   8. Kérdőívek létrehozásának lehetősége. (admin jogosultsággal).
   9. Egyértelmű, felhasználóbarát kezelhetőség.

A projektben a vágyálom rendszerben leírtaknak mind szerepelnie kell, ahhoz hogy mai weboldalakhoz hasonló módon tudjon működni. Mind ezek a funkciók lehetővé teszik, hogy egy olyan weboldalt hozzunk létre, amely a kérdőívek alapján egy felmérést készít különböző témákban.

## 3. Jelenlegi üzleti folyamatok modellje
A kérdőíveknek számos felhasználási módja létezik pl.: 
   - piackutatás,
   - egészségügyi felmérések,
   - szociális és pszichológiai kutatások,
   - politikai és társadalmi kutatások,
   - std.

A kérdőív szolgál az adatközlők válaszainak rögzítésére, általában strukturált, előre rögzített kérdéssorokból tevődik össze. Segítségükkel jobban megismerhetsz bizonyos csoportokat, közösségeket, mint például egy bolt vásárlóit. A kérdőívek kitöltése a felhasználó részéről energiabefektetést igényel, így a hosszabb kérdőíveket jellemzően nem töltik ki csak úgy, ingyen, ezért is kell lényegretörőnek lennie.

## 4. Igényelt üzleti folyamatok modellje
A kérdőív portál lényege, hogy különböző témákban statisztikákat készítsünk és következtetéseket vonjunk le. Célunk, hogy a felhasználók könnyedén és hatékonyan hozzáférhessenek a kívánt információkhoz, miközben a kérdőívek minősége is magas szintű legyen. Ennek érdekében számos kulcsfontosságú szempontot kell figyelembe vennünk: 
   - Felhasználói barát felület
   - Kreatív kérdőív kialakítás
   - Automatizált tatisztikai elemzés
   - Gyors visszajelzés

A fentieket figyelmbevéve alkotjuk meg a kérdőív portált, annak érdekében, hogy az minél hatékonyabb és népszerűbb legyen.
   
## 5. Követelménylista

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

## 6. Használati esetek
-  Vendég: A vendég a főoldalon megtudja nézni milyen kérdőívtémák vannak az oldalon. A vendég ezen kívül regisztrálni és bejelentkezni tud.
-  Felhasználó: A felhasználó a profilja jelszavát megtudja változtatni. Fontos, hogy ők tudnak kitölteni kérdőíveket a választott téma rákattintása után, amint megjelennek az aktuális kérdőívek. A statisztikát már a felhasználók is látják.
-  Admin: Az admin elsősorban új kérdőíveket tud létrehozni, a témára való kattintás után egy gomb segítségével. Viszont rendelkezik ugyanazokkal a funkciókkal, mint a felhasználó. 

## 7. Megfeleltetés, hogyan fedik le a használati eseteket a követelményeket
A felhasználót egy főoldal fogadja, itt megtekintheti a kérdőívek témáit, ilyenkor vendég módban van. Ezenkívül a megfelelő gombra kattintva egy bejelentkező, illetve regisztációs felületen regisztrálhat, majd bejelentkezhet, hogy további funkciókat érjen el. A bejelentkezés után a felhasználó jogosultsággal rendelkezők kitölthetnek kérdőíveket, megnézhetik a statiszikát, jelszót módosíthatnak. Az admin jogosultsággal rendelkezőknek lehetőségük van a kérdőívek létrehozására is. Válogathatunk a különböző témák közül, a témára kattintással pedig felsorolásra kerülnek az ahhoz tartozó kérdőívek.

## 8. Képernyőtervek

![képnév](gitlink ahol a kép van)

## 9. Forgatókönyvek
- A felhasználó megnyitja az oldalt, nem jelentkezik be, megtekinti a kérdőívek témáit
- Regisztrációnál nem tölt ki minden mezőt, helytelenül ad meg valamilyen adatot
- Bejelentkezésnél nem tölt ki minden mezőt, helytelen bejelentkezési adatokat ad meg
- A felhasználó regisztrál, majd bejelentkezik, ekkor jogosultságától függően használhatja az oldalt:
   - ha admin, kérdőíveket hozhat létre az oldalon, törölhet kérdőíveket és statisztikákat
   - ha nem admin, kitöltheti a kérdőíveket, megnézheti a statisztikákat

## 10. Funkció - követelmény megfeleltetése

| Id | Követelmény | Funkció |
| :---: | --- | --- |
| K1 | Könnyen kezelhető, figyelemfelkeltő főoldal | Jól átláható design, gombok a felületen, az elérhető kérdőívek témái megjelenítve a főoldalon |
| K2 | Kérdőívek kialakítása | A kérdőívek témák szerint rendszerezve |
| K3 | Bejelentkező fül | Egy felület, ami lehetőséget biztosít a bejelentkezésre  |
| K4 | Regisztrációs fül | Egy felület, ami lehetőséget biztosít a regisztrációra  |
| K5 | Vendég, Felhasználó, Admin jogosultság | A különböző jogosultsági szintekhez, különböző funkciók tartoznak |
| K6 | Kérdőív design | A kérdőíveket a témára kattintás után érjük el |

## 11 Fogalomszótár
* Admin: Elsődleges jogosultság - teljes hozzáféréssel a weboldal összes funkciójához.
* Felhasználó: Másodlagos jogosultsági - lekorlátozott hozzáférés, nincs lehetőség kérdőív létrehozására.
* Vendég felhasználó: Harmadlagos jogosultság - lekorlátozott hozzáférés, nincs lehetőség kérdőív létrehozására, kérdőív kitöltésére, profil szerkeztésére.
* Adatbázis: Strukturált adatgyűjtemény, amelyet úgy tárolnak és szerveznek, hogy hatékony visszakeresést tesz lehetővé.
* XAMPP: Olyan szoftvercsomag, amely tartalmazza az Apache webszervert, a MySQL adatbázist és a PHP szkriptnyelvet.
* React: A React.js egy nyílt forráskódú JavaScript könyvtár, melyet a felhasználói felületek fejlesztésére terveztek, és a deklaratív, komponensalapú megközelítésével segít az alkalmazások dinamikus és hatékony kialakításában.
* Webszerver: Egy számítógépes rendszer, amely weboldalakat és más webes tartalmakat szállít felhasználóknak.
* Adatbázis: Strukturált adatgyűjtemény, amelyet úgy tárolnak és szerveznek, hogy hatékony visszakeresést tesz lehetővé.
* API: Az alkalmazásprogramozási felület, egy protokoll- és eszközkészlet a szoftveralkalmazások építéséhez.
* HTTPS: A Hipertext Transzfer Protokoll biztonságos kiterjesztése, amely biztonságos kommunikációt biztosít az interneten.
* MVC: A Model-View-Controller szoftvertervezési minta, amely három összekapcsolt részre bontja az alkalmazást: a modellre, a nézetre és az irányítóra.
* SSL: A Secure Sockets Layer protokoll, amely biztonságos kommunikációs kapcsolatokat hoz létre a hálózaton keresztül kapcsolódó  számítógépek között.
