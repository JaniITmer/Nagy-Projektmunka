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
   7. Egyértelmű, felhasználóbarát kezelhetőség.

A projektben a vágyálom rendszerben leírtaknak mind szerepelnie kell, ahhoz hogy mai weboldalakhoz hasonló módon tudjon működni. 
Mind ezek a funkciók lehetővé teszik, hogy egy olyan weboldalt hozzunk létre, amely a kérdőívek alapján egy felmérést készít különböző témákban.

## 3. Jelenlegi üzleti folyamatok modellje

## 4. Igényelt üzleti folyamatok modellje

## 5. Követelménylista

| Id | Modul | Név | Leírás |
| :---: | --- | --- | --- |
| K1 | ...| ... | ... |

## 6. Használati esetek

## 7. Megfeleltetés, hogyan fedik le a használati eseteket a követelményeket
A felhasználót egy főoldal fogadja, itt megtekintheti a kérdőívek témáit, ilyenkor vendég módban van. Ezenkívül a megfelelő gombra kattintva egy bejelentkező, illetve regisztációs felületen regisztrálhat, majd bejelentkezhet, hogy további funkciókat érjen el. A bejelentkezés után a felhasználó jogosultsággal rendelkezők kitölthetnek kérdőíveket, megnézhetik a statiszikát, jelszót módosíthatnak. Az admin jogosultsággal rendelkezőknek lehetőségük van a kérdőívek létrehozására is. Válogathatunk a különböző témák közül, a témára kattintással pedig felsorolásra kerülnek az ahhoz tartozó kérdőívek.

## 8. Képernyőtervek

![képnév](gitlink ahol a kép van)

## 9. Forgatókönyvek
- A felhasználó megnyitja az oldalt, nem jelentkezik be, megtekinti a kérdőívek témáit
- A felhasználó regisztrál az oldalon, majd bejelentkezik, ekkor két lehetőség van:
   - ha admin, kérdőíveket hozhat létre az oldalon
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
