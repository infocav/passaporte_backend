pg_dump -U postgres guloso > <data>-backup


cat guloso.sql | sudo docker exec -i passaportedb psql -U postgres -d guloso
