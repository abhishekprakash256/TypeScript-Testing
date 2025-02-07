-- Create the database only if it doesn't exist
DO
$$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_catalog.pg_database WHERE datname = 'contact') THEN
    PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE contact');
  END IF;
END
$$;

-- Connect to the 'contact' database
\c contact

-- Create the schema only if it doesn't exist
CREATE SCHEMA IF NOT EXISTS contact;

-- Create the table only if it doesn't exist
CREATE TABLE IF NOT EXISTS contact.contacts (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    address JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optionally, you can add other initialization commands like index creation, etc.
