FROM python:3.12

WORKDIR /web
COPY ./main.py /web/main.py

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

EXPOSE 8000

ENTRYPOINT ["python", "/web/main.py"]