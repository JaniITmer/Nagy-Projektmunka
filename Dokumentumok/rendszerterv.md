# Rendszerterv
## 1. A rendszer célja

A rendszernek az a célja, hogy a regisztrált felhasználó, az admin jogkörrel rendelkezők álltal létrehozott kérdőíveket ki tudja tölteni.
Ezekről pedig statisztikát tudjon megtekinteni.
A nem regisztrált felhasználó csak a kérdőív témákat láthatja a főoldalon, kitölteni viszont nem tudja őket.
A sikeres rigisztráció után a felhasználónak lehetősége van kérdőíveket kitölteni, valamint ha egy adott kérdőívet kitöltött, akkor arról egy statisztikát is megtekinthet.



A regisztrációhoz szükséges adatok(a többi felhasználó számára nem publikus adatok):

-email cím*
-teljes név*
-születési idő
-lakcím
-telefonszám


A rendszer webböngészőben lesz elérhető, amit React keretrendszerben készítünk el.



## 2. Projektterv

### 2.1 Projektszerepkörök, felelőségek:
   * Scrum masters:Katona Bálint Sándor
   * Product owner: Bagoly Gábor
   
     
### 2.2 Projektmunkások és felelőségek:
   * Frontend: Buru Ádám, Guba Ádám,Juhász Gergő, Nagy János, 
   * Backend: Buru Ádám, Guba Ádám,Juhász Gergő, Nagy János, v
   * Tesztelés: Buru Ádám, Guba Ádám,Juhász Gergő, Nagy János, 
     
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

Vendég: A kérdőív témákat  tekintheti át.
Regisztrált felhasználó: Aki használja a React projektet a kérdőivek kitöltéséhez.
Adminisztrátor: A rendszer működését és biztonságát felügyeli.

### 3.2 Üzleti folyamatok

-Felhasználói regisztráció: A felhasználók regisztrálják magukat a rendszerbe, megadva a szükséges információkat, mint például a felhasználónév, az e-mail cím  és jelszó.
-Bejelentkezés: A regisztrált felhasználók bejelentkezhetnek a rendszerbe az e-mail címük és jelszavuk megadásával.
Felhasználói profil: A felhasználók megtekinthetik a saját profiljukat, szerkeszthetnek pár adatot, valamint megtekinthetik a már kitöltött kérdőíveket.
-Kérdőívek böngészése: A felhasználók áttekinthetik a rendelkezésre álló kérdőíveket.
-Kérdőív beküldése: A felhasználók véglegesíthetik a kérdőívjüket és beadküldhetik azokat.
-Adminisztrátori felület: Az adminisztrátorok azonosíthatják a felhasználókat, kérdőíveket módosíthatnak, tölthetnek fel.


## 4. Követelmények

### Funkcionális követelmények

| ID | Megnevezés | Leírás |
| --- | --- | --- |
| K1 | ... | ... |

### Nemfunkcionális követelmények

| ID | Megnevezés | Leírás |
| --- | --- | --- |
| K4 | ... | ... |

### Támogatott eszközök

## 5. Funkcionális terv

### 5.1 Rendszerszereplők

### 5.2 Menühierarchiák

## 6. Fizikai környezet

### Vásárolt softwarekomponensek és külső rendszerek

### Hardver topológia

### Fizikai alrendszerek

### Fejlesztő eszközök


## 8. Architekturális terv

### Webszerver

### Adatbázis rendszer

### A program elérése, kezelése

## 9. Adatbázis terv

## 10. Implementációs terv

## 11. Tesztterv

A tesztelések célja a rendszer és komponensei funkcionalitásának teljes vizsgálata,
ellenőrzése a rendszer által megvalósított üzleti szolgáltatások verifikálása.
A teszteléseket a fejlesztői csapat minden tagja elvégzi.
Egy teszt eredményeit a tagok dokumentálják külön fájlokba.

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

Szoftver telepítési terv: 

## 13. Karbantartási terv

Fontos ellenőrizni:
...

Figyelembe kell venni a felhasználó által jött visszajelzést is a programmal kapcsolatban.
Ha hibát talált, mielőbb orvosolni kell, lehet az:
*	Működéssel kapcsolatos
*	Kinézet, dizájnnal kapcsolatos