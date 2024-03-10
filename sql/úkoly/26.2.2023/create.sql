CREATE TABLE stravnici (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jmeno VARCHAR(50) NOT NULL,
    platba BOOLEAN DEFAULT false
);

CREATE TABLE hlavni_jidla (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nazev VARCHAR(100) NOT NULL,
    cena DECIMAL(10, 2) NOT NULL
);

CREATE TABLE polevky (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nazev VARCHAR(100) NOT NULL,
    cena DECIMAL(10, 2) NOT NULL
);

CREATE TABLE objednavky (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stravnik_id INT,
    hlavni_jidlo_id INT,
    polevka_id INT,
    datum DATE,
    FOREIGN KEY (stravnik_id) REFERENCES stravnici(id),
    FOREIGN KEY (hlavni_jidlo_id) REFERENCES hlavni_jidla(id),
    FOREIGN KEY (polevka_id) REFERENCES polevky(id)
);
