from django

ENV APPDIR=/code
WORKDIR $APPDIR

ADD requirements.txt $APPDIR/requirements.txt
RUN pip3 install -r requirements.txt

ADD . /code