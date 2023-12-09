CREATE TABLE Felhasznalok (
    FelhasznaloID INT PRIMARY KEY AUTO_INCREMENT,
    FelhasznaloNev VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Jelszo VARCHAR(255) NOT NULL,
    KitoltottKerdoivek INT DEFAULT NULL
);

CREATE TABLE Kerdoivek (
    KerdoivID INT PRIMARY KEY AUTO_INCREMENT,
    Cim VARCHAR(100) NOT NULL
);

CREATE TABLE Kerdesek (
    KerdesID INT PRIMARY KEY AUTO_INCREMENT,
    KerdoivID INT,
    KerdesText TEXT NOT NULL,
    FOREIGN KEY (KerdoivID) REFERENCES Kerdoivek(KerdoivID)
);

CREATE TABLE Valaszok (
    ValaszID INT PRIMARY KEY AUTO_INCREMENT,
    KerdesID INT,
    ValaszText TEXT NOT NULL,
    FOREIGN KEY (KerdesID) REFERENCES Kerdesek(KerdesID)
);

INSERT INTO Felhasznalok (FelhasznaloNev, Email, Jelszo) 
VALUES ('admin', 'admin@admin.com', 'admin');

INSERT INTO Felhasznalok (FelhasznaloID, FelhasznaloNev, Email, Jelszo) 
VALUES 
(13, 'user1', 'user@user', '123'),
(14, 'user2', 'user2@user2', '444');

INSERT INTO Kerdoivek (KerdoivID, Cim) VALUES (1, 'Életmód és Egészség');

INSERT INTO Kerdesek (KerdesID, KerdoivID, KerdesText) VALUES
(1, 1, 'Hogyan írnád le jelenlegi életmódodat?'),
(2, 1, 'Mennyi időt szánsz hetente testmozgásra?'),
(3, 1, 'Milyen gyakran fogyasztasz egészséges ételeket és zöldségeket?'),
(4, 1, 'Hogyan értékeled az egészségi állapotodat?');

INSERT INTO Valaszok (ValaszID, KerdesID, ValaszText) VALUES
(1, 1, 'Egészségtudatos és aktív'),
(2, 1, 'Átlagos, néha mozgok'),
(3, 1, 'Inkább ülő életmód'),
(4, 1, 'Nagyon inaktív és egészségtelen'),
(5, 2, 'Legalább 3-4 alkalommal, 30 perc vagy több'),
(6, 2, 'Heti 1-2 alkalommal, 30 perc'),
(7, 2, 'Ritkán vagy soha nem mozgok'),
(8, 2, 'Csak munkából adódó mozgás'),
(9, 3, 'Minden nap'),
(10, 3, 'Heti többször'),
(11, 3, 'Ritkábban, mint hetente egyszer'),
(12, 3, 'Szinte soha'),
(13, 4, 'Kitűnő'),
(14, 4, 'Jó, néhány kisebb probléma van'),
(15, 4, 'Átlagos, de vannak egészségügyi problémáim'),
(16, 4, 'Rossz, sürgős orvosi segítségre van szükségem');