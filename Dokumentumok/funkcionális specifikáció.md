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
   7. Több jogosultság (felhasználó, vendég felhasznló) létrehozása.
   8. Kérdőívek létrehozásának lehetősége. (felhasználói jogosultsággal).
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
| K3 | Főoldal | Kérdőívek | Kérdőívek kialakítása |
| K4 | Bejelentkezés | Design | Bejelentkező felület kialakítása |
| K5 | Regisztráció | Design | Regisztrációs felület kialakítása |
| K6 | Jogosultág | Szintek | <ul><li> Vendég: Regisztráció, Belépés </li><li> Felhasználó: kérdőívek kitöltése, kérdőívek létrehozása, statisztika megnézése, profil megnézése </li></ul>|
| K7 | Főoldal | Kérdőív témák, kérdőívek | Témák, Kérdőívek kialakítása |
| K8 | Kérdőív | Design | Témákon belül kérdőívek megjelenítése |
| K9 | Statisztika | Design | Kitöltött kérdőívek megjelenítése |
| K10 | Statisztika | Funkció | Kitöltött kérdőívre kattintás után statisztika megjelenítése |

## 6. Használati esetek
-  Vendég: A vendég a főoldalon kap egy értesítést, hogy vendég módban van. A vendég ezen kívül regisztrálni és bejelentkezni tud.
-  Felhasználó: A felhasználó a profilján látja a felhasználónevét, illetve az email címét. Fontos, hogy ők tudnak kitölteni kérdőíveket a választott témában, amik megjelennek az aktuális kérdőívek között. Ugyanitt Tudnak létrehozni kérdőívet is. A statisztikát a felhasználók látják egy külön fülön.

## 7. Megfeleltetés, hogyan fedik le a használati eseteket a követelményeket
- Követelménylista K1 és K2 funkció:
   - A felhasználót egy főoldal fogadja, csak regisztrálni és bejelentkezni tud, ilyenkor vendég módban van. 
- Követelménylista K3 és K4 funkció:
   - A megfelelő gombra kattintva egy bejelentkező, illetve regisztációs felületen regisztrálhat, majd bejelentkezhet, hogy további funkciókat érjen el.
- Követelménylista K5 funkció:
   - Ha a felhasználó be van jelentkezve, lehetősége van megváltoztatnia a jelszavát.
- Követelménylista K6 funkció:
   - A bejelentkezés után a felhasználó jogosultsággal rendelkezők kitölthetnek kérdőíveket, megnézhetik a statiszikát, jelszót módosíthatnak, továbbá létrehozására, kérdőív és statisztika törlésre.
- Követelménylista K7 és K8 funkció:
   - Válogathatunk a különböző témák közül, a témára kattintással pedig felsorolásra kerülnek az ahhoz tartozó kérdőívek.

## 8. Képernyőtervek

![képernyőterv](https://github.com/JaniITmer/Nagy-Projektmunka/assets/145230109/954c045a-a30e-481e-9a37-ec2635fc07aa)


## 9. Forgatókönyvek
- A felhasználó megnyitja az oldalt, nem jelentkezik be, csak a bejelentkezős felületek jelenennek meg.
- Regisztrációnál nem tölt ki minden mezőt, helytelenül ad meg valamilyen adatot, az oldal értesíti a hibáról és a felhasználó a regisztrációs felületen marad
- Bejelentkezésnél nem tölt ki minden mezőt, helytelen bejelentkezési adatokat ad meg, az oldal értesíti a hibáról és a felhasználó a bejelentkező felületen marad
- A felhasználó regisztrál, majd bejelentkezik, ekkor jogosultságától függően használhatja az oldalt:
   - kérdőíveket hozhat létre 
   - kitöltheti a kérdőíveket
   - kitöltheti a kérdőíveket
   - megtekintheti a statisztikát
   - megtekintheti a profil oldalt

## 10. Funkció - követelmény megfeleltetése

| Id | Követelmény | Funkció |
| :---: | --- | --- |
| K1 | Könnyen kezelhető, figyelemfelkeltő főoldal | Jól átláható design, gombok a felületen, az elérhető kérdőívek témái megjelenítve a főoldalon |
| K2 | Kérdőívek kialakítása | A kérdőívek témák szerint rendszerezve |
| K3 | Bejelentkező fül | Egy felület, ami lehetőséget biztosít a bejelentkezésre  |
| K4 | Regisztrációs fül | Egy felület, ami lehetőséget biztosít a regisztrációra  |
| K5 | Vendég, Felhasználó jogosultság | A különböző jogosultsági szintekhez, különböző funkciók tartoznak |
| K6 | Kérdőív design | A kérdőíveket a témára kattintás után érjük el |

## 11 Fogalomszótár
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
