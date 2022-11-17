# M-Vida

# Portfolio project
## Technologies
### Backend
- Django 4.1
- Venv
- Python 3.8.10
- python decouple: for hiding secret keys
### Deployment
- Docker
### Database
- PostgreSQL
# File structure
* Mvida- the backend project contains, all the django apps created for the M-Vida project.
``` bash
├── Dockerfile
├── README.md
├── backend
│   ├── apps
│   │   └── registers
│   │       ├── __init__.py
│   │       ├── admin.py
│   │       ├── apps.py
│   │       ├── migrations
│   │       │   └── __init__.py
│   │       ├── models.py
│   │       ├── tests.py
│   │       └── views.py
│   ├── config
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   │   ├── __init__.cpython-38.pyc
│   │   │   ├── settings.cpython-38.pyc
│   │   │   ├── urls.cpython-38.pyc
│   │   │   └── wsgi.cpython-38.pyc
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── env
│   │   └── pyvenv.cfg
│   ├── manage.py
│   └── requirements.txt
└── frontend
```
