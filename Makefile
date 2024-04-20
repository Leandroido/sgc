compose:
	docker-compose --compatibility up

build:
	docker build -f backend/Dockerfile -t backend-node ./backend
	docker build -f frontend/Dockerfile -t frontend-node ./frontend
