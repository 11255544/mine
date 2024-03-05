
-- Vytvoření tabulky stravnici
CREATE TABLE stravnici (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jmeno VARCHAR(50) NOT NULL,
    platba BOOLEAN DEFAULT false
);

-- Vytvoření tabulky jidla
CREATE TABLE jidla (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nazev VARCHAR(100) NOT NULL,
    cena DECIMAL(10, 2) NOT NULL
);

-- Vytvoření tabulky objednavky
CREATE TABLE objednavky (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stravnik_id INT,
    jidlo_id INT,
    datum DATE,
    FOREIGN KEY (stravnik_id) REFERENCES stravnici(id),
    FOREIGN KEY (jidlo_id) REFERENCES jidla(id)
);
