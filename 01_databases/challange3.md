SELECT *
FROM sensordata
WHERE temperature_measurement < 20;

SELECT *
FROM sensordata
WHERE co2_measurement < 800 AND humidity_measurement > 50;

INSERT INTO sensordata (temperature_measurement, co2_measurement, humidity_measurement)
VALUES (0, 0, 99);

UPDATE sensordata
SET co2_measurement = 750
WHERE temperature_measurement < 10;

DELETE FROM sensordata
WHERE humidity_measurement > 80;



