
CREATE DATABASE EsteticaCanina;

USE EsteticaCanina;


CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Telefono VARCHAR(15),
    Email VARCHAR(100),
    Direccion TEXT
);


CREATE TABLE Mascotas (
    MascotaID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Tipo VARCHAR(50) NOT NULL, -- Ej: Perro, Gato
    Raza VARCHAR(50),
    Edad INT,
    ClienteID INT,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);


CREATE TABLE Servicios (
    ServicioID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Precio DECIMAL(10, 2) NOT NULL
);


CREATE TABLE Citas (
    CitaID INT AUTO_INCREMENT PRIMARY KEY,
    Fecha DATETIME NOT NULL,
    MascotaID INT,
    ServicioID INT,
    EmpleadoID INT,
    FOREIGN KEY (MascotaID) REFERENCES Mascotas(MascotaID),
    FOREIGN KEY (ServicioID) REFERENCES Servicios(ServicioID),
    FOREIGN KEY (EmpleadoID) REFERENCES Empleados(EmpleadoID)
);


CREATE TABLE Empleados (
    EmpleadoID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Telefono VARCHAR(15),
    Email VARCHAR(100),
    Especialidad VARCHAR(100) -- Ej: Cortes, Baños, etc.
);

