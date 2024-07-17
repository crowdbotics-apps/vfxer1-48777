#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT vfxer1_48777.wsgi:application
