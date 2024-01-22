# Rendszerterv
## 1. A rendszer célja

A rendszernek az a célja, hogy a regisztrált felhasználó, az admin jogkörrel rendelkezők álltal létrehozott kérdőíveket ki tudja tölteni.
A nem regisztrált felhasználó csak a kérdőív témákat láthatja a főoldalon, kitölteni viszont nem tudja őket.
A sikeres rigisztráció után a felhasználónak lehetősége van kérdőíveket kitölteni, valamint ha egy adott kérdőívet kitöltött, akkor arról egy statisztikát is megtekinthet.



A regisztrációhoz szükséges adatok(a többi felhasználó számára nem publikus adatok):

- email cím*
- teljes név*
- születési idő
- lakcím
- telefonszám


A rendszer webböngészőben lesz elérhető, amit React keretrendszerben készítünk el.



## 2. Projektterv

### 2.1 Projektszerepkörök, felelőségek:
   * Scrum masters:Katona Bálint Sándor
   * Product owner: Bagoly Gábor
   
     
### 2.2 Projektmunkások és felelőségek:
   * Frontend: Buru Ádám, Guba Ádám,Juhász Gergő, Nagy János
   * Backend: Buru Ádám, Guba Ádám,Juhász Gergő, Nagy János
   * Tesztelés: Buru Ádám, Guba Ádám,Juhász Gergő, Nagy János
     
### 2.3 Ütemterv:

|Funkció                  | Feladat                                | Prioritás | Becslés (nap) | Aktuális becslés (nap) | Eltelt idő (nap) | Becsült idő (nap) |
|-------------------------|----------------------------------------|-----------|---------------|------------------------|------------------|---------------------|
|Követelmény specifikáció |Megírás                                 |         1 |             1 |                      1 |                 |                   1 |             
|Funkcionális specifikáció|Megírás                                 |         1 |             1 |                      1 |                 |                   1 |
|Rendszerterv             |Megírás                                 |         1 |             1 |                      1 |                 |                   1 |
|Program                  |Képernyőtervek elkészítése              |         1 |             1 |                      1 |                 |                   1 |
|Program                  |Prototípus elkészítése                  |         3 |             7 |                      8 |                 |                   8 |
|Program                  |Alapfunkciók elkészítése                |         3 |             10 |                      8 |                 |                   8 |
|Program                  |Tesztelés                               |         4 |             4 |                      4 |                 |                   2 |

### 2.4 Mérföldkövek:
- Követelmény specifikáció elkészítése

- Funkcionális specifikáció elkészítése

- Rendszerterv elkészítése
-
A mérföldkövek későbbi fázisai előzetes eggyeztetés alapján megbeszélendőek.

## 3. Üzleti folyamatok modellje

### 3.1 Üzleti szereplők

- Vendég: A kérdőív témákat  tekintheti át.
- Regisztrált felhasználó: Aki használja a React projektet a kérdőivek kitöltéséhez.
- Adminisztrátor: A rendszer működését és biztonságát felügyeli.

### 3.2 Üzleti folyamatok

* Felhasználói regisztráció: A felhasználók regisztrálják magukat a rendszerbe, megadva a szükséges információkat, mint például a felhasználónév, az e-mail cím  és jelszó.
* Bejelentkezés: A regisztrált felhasználók bejelentkezhetnek a rendszerbe az e-mail címük és jelszavuk megadásával.
* Felhasználói profil: A felhasználók megtekinthetik a saját profiljukat, szerkeszthetnek pár adatot, valamint megtekinthetik a már kitöltött kérdőíveket.
* Kérdőívek böngészése: A felhasználók áttekinthetik a rendelkezésre álló kérdőíveket.
* Kérdőív beküldése: A felhasználók véglegesíthetik a kérdőívjüket és beadküldhetik azokat.
* Adminisztrátori felület: Az adminisztrátorok azonosíthatják a felhasználókat, kérdőíveket módosíthatnak, tölthetnek fel.


## 4. Követelmények

### Funkcionális követelmények:

- Webes környezeten való működés.
- Felhasználói fiókok létrehozásának a lehetősége.
- Különböző jogkörrel rendelkező felhasználók tárolása .
- Kérdőívek  kitöltése és tárolása felhasználói fiókonként.



### Nem funkcionális követelmények:

A felhasználók nem férhetnek hozzá más felhasználók személyes adataihoz.



### Támogatott eszközök

## 5. Funkcionális terv

### 5.1 Rendszerszereplők
- Felhasználó
- Vendég

### Rendszerhasználati esetek és lefutásaik

#### Felhasználó
- Kérdőív kitöltése
- Kérdőív létrehozása
- Profil megnézése
- Kijelentkezés
- Statisztika megnézése

#### Vendég
- Főoldal megnézése
- Bejelentkezés
- Regisztráció
  
### 5.2 Menühierarchiák
#### Főoldal bejelentkezés előtt
- Vendég mód
- Bejentkezés
- Regisztáció

#### Főoldal bejelentkezés után
- Témák szerint kérdőív kitöltése
- Új kérdőív létrehozása
- Kijelentkezés
- Statisztika megnézése
- Profil adatok megnézése

## 6. Fizikai környezet

Az alkalmazás webböngésző felületre készül, amit  Mozzilla Firefox és Google Chrome, valamint más hasonló böngészőkből lehet elérni a megadott URL cím segítségével számítógépeken vagy telefonokon. 


### Fejlesztői eszközök

- Visual Studio Code
- Krita


## 8. Architekturális terv

### Backend
A rendszerhez szükség van egy adatbázis szerverre, ebben az esetben MySql-t használtunk

### Web Kliens
A web alkalmazás React JS keretrendszer használatával készül el. A rendszer el van látva megfelelő erőforrásokkal.

## 9. Adatbázis terv
![kép](https://github.com/JaniITmer/Nagy-Projektmunka/assets/145230109/1690e73b-1dcf-4005-aa4d-aaad1eb2ffa5)


## 10. Implementációs terv
1. Adatbázis tervezése és létrehozása: Egy relációs adatbázist használunk, amelyben a felhasználók profil adatait(jelszó, email, felhasználónév), illetve a kitöltött kérdőívekre adott válaszokat tároljuk.
2. Projekt létrehozása: Visual Studio Code-ban egy projektet hozunk létre, amiben a weboldalt tudjuk formázni, megalkotni, valamint összeköttetni az adatbázissal.
3. Felhasználók kezelése: A felhasználók kezelése is fontos része az alkalmazásnak. A regisztráció előtt csak vendégfelhasználóként, utánna felhasználóként vagy adminként léphetnek be a weboldalba.
4. Főoldal: Kérdőívek létrehozása.
5. Válaszok tárolása, statisztika készítése: A kérdőívekre adott válaszokat egy adatbázisba elmentjük, hogy abból statisztikát tudjunk készíteni.
7. Tesztelés és hibajavítás: A weboldal tesztelése a projekt végén történik. A tesztelés során ellenőrizzük, hogy a weboldal minden funkciója helyesen működik-e, és kijavítjuk a hibákat, ha szükséges.
8. Design: A weboldal designja a tesztelés után történik, ha megbizonyosodtunk róla, hogy megfelelően működik.
9. Kész weboldal karbantartása: Az elkészült weboldalt karbantartjuk az esetleges hibák és frissítések miatt. A weboldal frissítéseket és karbantartást igényelhet a továbbiakban is.

## 11. Tesztterv

A tesztelések célja a rendszer és komponensei funkcionalitásának teljes vizsgálata, ellenőrzése a rendszer által megvalósított üzleti szolgáltatások verifikálása. A teszteléseket a fejlesztői csapat minden tagja elvégzi. Egy teszt eredményeit a tagok dokumentálják külön fájlokba. Több féle tesztet is végzünk a projekt készítése során, elöszőr alfa és béte teszteket, majd a projekt befejeztével a kész weboldalt teszteljük és vizsgáljuk.

### Tesztesetek

 | Teszteset | Elvárt eredmény | 
 |-----------|-----------------| 
 | ... | ... |

### A tesztelési jegyzőkönyv kitöltésére egy sablon:

**Tesztelő:** Vezetéknév Keresztnév

**Tesztelés dátuma:** Év.Hónap.Nap

Tesztszám | Rövid leírás | Várt eredmény | Eredmény | Megjegyzés
----------|--------------|---------------|----------|-----------
például. Teszt #01 | Regisztráció | A felhasználó az adatok megadásával sikeresen regisztrálni tud  | A felhasználó sikeresen regisztrált | Nem találtam problémát.
... | ... | ... | ... | ...

## 12. Telepítési terv

Fizikai telepítési terv: 
- A programot Githubon keresztül tudjuk letölteni, utána kibontjuk a mappát, ahová szeretnénk. ([A letöltéshez segítség](https://crast.net/150687/downloading-files-from-github-is-very-simple-this-is-how-you-can-do-it-from-your-mobile-or-pc "Segítség a letöltéshez")) 

Szoftver telepítési terv: 
- React ([React telepítéséhez segítség](https://react.dev/learn/installation "Installation - React"))
- Visual Code beállítása ([Visual Code beállításához segítség](https://react.dev/learn/editor-setup "Editor Setup - React"))

## 13. Karbantartási terv
- Az alkalmazás folyamatos üzemeltetése, naprakészen tartása
- Rendszeres frissítések kiadása
- Esetleges technológiai változások miatti módosítások kezelése
- Az program felkészítése azokra problémákra, amik most még nem, de a későbbiekben felmerülhetnek
- Teljesítménybeli javítások, optimalizálás
- A felhasználók visszajelzéseinek figyelembevétele:
  - Felfedezett hibák elhárítása, kiküszöbölése
  - Felhasználói élmény javítása
  - Új funkciók létrehozása, a meglévők bővítése az igényekhez igazodva
