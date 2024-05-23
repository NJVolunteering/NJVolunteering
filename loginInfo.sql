-- Create a new schema
CREATE SCHEMA IF NOT EXISTS volunteering_schema;
SET search_path TO volunteering_schema;

-- Create a table to store user information
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    interests TEXT NOT NULL
);