CREATE TABLE Felhasznalok (
    FelhasznaloID INT PRIMARY KEY AUTO_INCREMENT,
    FelhasznaloNev VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Jelszo VARCHAR(255) NOT NULL
);

CREATE TABLE Kerdoivek (
    KerdoivID INT PRIMARY KEY AUTO_INCREMENT,
    Cim VARCHAR(100) NOT NULL
);

CREATE TABLE Kerdesek (
    KerdesID INT PRIMARY KEY AUTO_INCREMENT,
    KerdoivID INT,
    QuestionText TEXT NOT NULL,
    FOREIGN KEY (KerdoivID) REFERENCES Kerdoivek(KerdoivID)
);

CREATE TABLE Valaszok (
    ValaszID INT PRIMARY KEY AUTO_INCREMENT,
    KerdesID INT,
    ValaszSzam TEXT NOT NULL,
    FOREIGN KEY (KerdesID) REFERENCES Kerdesek(KerdesID)
);

INSERT INTO Felhasznalok (FelhasznaloNev, Email, Jelszo) 
VALUES ('admin', 'admin@admin.com', 'admin');

INSERT INTO Felhasznalok (FelhasznaloID, FelhasznaloNev, Email, Jelszo) 
VALUES 
(13, 'user1', 'user@user', '123'),
(14, 'user2', 'admin@admin', '444');