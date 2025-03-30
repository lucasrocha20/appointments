CREATE SCHEMA appointments;
GRANT ALL PRIVILEGES ON appointments.* TO
'user_appointments'@'%';
FLUSH
PRIVILEGES;