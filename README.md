# Airbnb Clone

Cloning Airbnb with Python, Django, Tailwind and more...


## install
- Python3, Django, django-countries, pillow


## Project Start
- django-admin startproject config
- config 파일 하위 폴더로 이동


## Create Application 
- django-admin startapp rooms
- django-admin startapp users
- django-admin startapp reviews
- django-admin startapp converstations
- django-admin startapp lists
- django-admin startapp reservations


## Migrations
- python manage.py makemigrations
- python manage.py migrate


## seed 
- python manage.py seed_amenities
- python manage.py seed_users --number 50
- python manage.py seed_rooms --number 100
- python manage.py seed_reviews --number 200
- python manage.py seed_list --number 50
- python manage.py seed_reservations --number 50

