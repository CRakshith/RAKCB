FROM python:3.12

WORKDIR /web
COPY ./main.py /web/main.py

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

ADD https://bucekt-terraform-state-047719618727-us-east-1-an.s3.us-east-1.amazonaws.com/zap_report.html /web/   # remote object access
ADD ./main.py /web/main.py                                                                                      # copy local file
ADD https://bucekt-terraform-state-047719618727-us-east-1-an.s3.us-east-1.amazonaws.com/zap_report.tgz /web/    # remote object access & unzip


EXPOSE 80

ENTRYPOINT ['/bin/bash','./runtime.sh']

# CMD ["/web/main.py"]




PYTHON_VERSION=3.12

X=Y , Y!=X