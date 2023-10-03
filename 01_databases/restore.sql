CREATE TABLE users (
    id INTEGER PRIMARY KEY auto_increment NOT NULL,
    name TEXT NOT NULL,
    first_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    street TEXT,
    number INT,
    zip_code INT,
    city TEXT,
    avatar_name TEXT
);

INSERT INTO users (name, first_name, email, phone_number, street, number, zip_code, city, avatar_name)
VALUES
    ('Desmedt', 'Esteban', 'estebandesmedt33@gmail.com', '+32 474 76 96 81', 'Artemislaan', 8, 8200, 'Sint-Michiels', null),
    ('Declerck', 'Cérian', 'cériandeclerck@telenet.be', '+32 476 26 69 84', 'Bergdal', 44, 8830, 'Gits', null),
    ('Bossuyt', 'Colin', 'cbossuyt@gmail.com', '+32 484 25 65 95', 'Gistelsesteenweg', 543, 8200, 'Sint-Andries', null),
    ('Belligh', 'Ruben', 'rubenbelligh@outlook.be', '+32 469 69 42 00', 'Appelstraat', 69, 8430, 'Middelkerke', null),
    ('Vyvey', 'Xander', 'xanderv@gmail.com', '+32 474 96 84 21', 'Perenboomstraat', '420', 8630, 'Veurne', null),
    ('Verhelst', 'Robbe', 'robbeverhelst@telenet.be', '+32 486 65 21 45', 'Torhoutsesteenweg', 999, 8020, 'Oostkamp', null);




CREATE TABLE sensordata (
    id INTEGER PRIMARY KEY auto_increment NOT NULL,
    registration_datetime DATETIME DEFAULT CURRENT_TIMESTAMP,
    co2_measurement DECIMAL(10, 2),
    temperature_measurement DECIMAL(5, 2),
    humidity_measurement DECIMAL(5, 2)
);


INSERT INTO sensordata (co2_measurement, temperature_measurement, humidity_measurement)
VALUES
    (400, 23.5, 83.4),
    (410, 19.2, 44.5),
    (420, 18.6, 86.8),
    (415, 20.3, 81.2),
    (802, 21.0, 76.3),
    (805, 18.0, 44.3),
    (425, 17.6, 43.9),
    (600, 21.9, 63.9),
    (735, 24.3, 69.4),
    (410, 8.9, 72.1);





