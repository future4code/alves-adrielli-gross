-- Exercício 1.
DESCRIBE Actor;
DESCRIBE Movie;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- 1. a) Irá remover a coluna de salário dos atores.
ALTER TABLE Actor DROP COLUMN salary;
-- 1. b) Irá alterar de gender para sex.
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- 1. c) Irá mudar o VARCHAR de 6 caracteres para 255.
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- 1. d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Exercício 2.
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

SELECT * FROM Actor;

-- 2. a)
UPDATE Actor
SET name = "Alterando Nome1", 
birth_date = "1981-10-04"
WHERE id = "003";

-- 2. b)
UPDATE Actor
SET name = UPPER(name)
WHERE id = "005";

UPDATE Actor
SET name = LOWER(name)
WHERE id = "005";

-- 2. c)
UPDATE Actor
SET name = "Alterando Nome",
salary = 4525858, 
birth_date = "1981-10-04",
gender = "male"
WHERE id = "005";

-- 2. d) Não irá mudar nada.
UPDATE Actor
SET name = "teste",
salary = 000000, 
birth_date = "0000-00-00",
gender = "teste"
WHERE id = "545";

-- Exercício 3. a)
DELETE FROM Actor WHERE name = "Alterando Nome1";
-- 3. b) 
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- Exercício 4. 
SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;

-- 4. a)
SELECT MAX(salary) FROM Actor;
-- 4. b) 
SELECT MIN(salary) FROM Actor WHERE gender = "female";
-- 4. c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- 4. d)
SELECT SUM(salary) FROM Actor;

-- Exercício 5. a) Irá retornar a quantidade de pessoas por genero agrupando entre homens e mulheres existentes na tabela.
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- 5. b)
SELECT id, name FROM Actor
WHERE gender = 'male'
ORDER BY name DESC;

-- 5. c)
SELECT * FROM Actor
ORDER BY salary ASC;

-- 5. d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- 5. e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

-- Exercício 6. a)
ALTER TABLE Movie ADD playing_limit_date DATE NOT NULL;
-- 6. b) Já foi feito ontem
-- 6. c)
UPDATE Movie
SET playing_limit_date = "2020-12-31"
WHERE id = "001";

-- 6. d)
DELETE FROM Movie WHERE id = "001";


