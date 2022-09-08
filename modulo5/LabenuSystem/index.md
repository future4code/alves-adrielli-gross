CREATE TABLE turma(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    modulo VARCHAR(255) DEFAULT 0
);

CREATE TABLE estudante(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES turma(id)
);

CREATE TABLE docente(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES turma(id)
);

CREATE TABLE hobby(
	id VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE estudante_hobby(
	id VARCHAR(255) PRIMARY KEY,
    estudante_id VARCHAR(255) NOT NULL,
    hobby_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES estudante(id),
	FOREIGN KEY (hobby_id) REFERENCES hobby(id)
);

CREATE TABLE especialidade(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE docente_especialidade(
	id VARCHAR(255) PRIMARY KEY,
    docente_id VARCHAR(255) NOT NULL,
    especialidade_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (docente_id) REFERENCES docente(id),
    FOREIGN KEY (especialidade_id) REFERENCES especialidade(id)
);

INSERT INTO docente (`id`,`nome`,`email`,`data_nasc`,`turma_id`) VALUES 
(
	01,
    'Larissa',
    'larissa@email.com',
    '1982-06-10',
    '1'
),(
	02,
    'Mario',
    'mario@email.com',
    '1989-03-05',
    '2'
),(
	03,
    'Roberto',
    'roberto@email.com',
    '1999-12-02',
    '2'
);

INSERT INTO estudante (`id`,`nome`,`email`,`data_nasc`,`turma_id`) VALUES 
(
	001,
    'João',
    'joao@email.com',
    '1998-10-10',
    '1'
),(
	002,
    'Maria',
    'maria@email.com',
    '1996-05-07',
    '2'
),(
	003,
    'Raissa',
    'raissa@email.com',
    '1995-11-08',
    '2'
),(
	004,
    'Lucas',
    'lucas@email.com',
    '2000-02-12',
    '3'
),(
	005,
    'Albeto',
    'alberto@email.com',
    '2001-05-11',
    '3'
);

INSERT INTO turma (`id`,`nome`,`modulo`) VALUES 
(
	1,
    'Alves',
    '3'
),(
	2, 
    'Freire',
    '4'
),(
	3, 
    'Franklin',
    '5'
);

INSERT INTO especialidade (`id`,`nome`) VALUES 
(
	1,
    'JS'
),(
	2, 
    'CSS'
),(
	3, 
    'React'
),(
	4, 
    'Typescript'
),(
	5, 
    'POO'
);

INSERT INTO docente_especialidade (`id`, `docente_id`, `especialidade_id`) VALUE 
(
	1,
    03,
    5
),(
	2,
    03,
    4
),(
	3,
    01,
    2
),(
	4,
    01,
    1
),(
	5,
    02,
    3
);

INSERT INTO hobby (`id`, `nome`) VALUE 
(
	01,
    "Jogar video-game"
),(
	02,
    "Cozinhar"
),(
	03,
    "Pintar"
),(
	04,
    "Tocar violino"
),(
	05,
    "Tocar piano"
);

INSERT INTO estudante_hobby (`id`, `estudante_id`, `hobby_id`) VALUE 
(
	1,
    001,
    03
),(
	2,
    002,
    04
),(
	3,
    003,
    02
),(
	4,
    004,
    01
),(
	5,
    005,
    05
);