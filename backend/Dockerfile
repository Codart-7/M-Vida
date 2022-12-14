# Alpine base image
FROM python:3.8-alpine

# Set working directory
WORKDIR /usr/src/app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy the entire project
COPY . /usr/src/app

# Upgrade pip and install dependencies
# RUN apk add --update libmysqlclient-dev
RUN pip install --upgrade pip && pip install -r requirements.txt

# Migrations
# CMD python manage.py makemigrations
# CMD python manage.py migrate

# Expose the port
EXPOSE 8000

# Run the server
CMD ["python3", "manage.py", "runserver"]
