FROM 685288883234.dkr.ecr.eu-west-1.amazonaws.com/fcz-symfony:7.2

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt -y install nodejs

COPY ./ /var/www/project/

RUN mkdir -p /var/www/project/var/cache/prod
RUN mkdir -p /var/www/project/var/cache/dev
RUN mkdir -p /var/www/project/var/session
RUN mkdir -p /var/www/project/var/log

WORKDIR /var/www/project
RUN chmod -R 777 /var/www/project
RUN npm i caniuse-lite
RUN npm run build
# To resolve this issue : Invalid command ‘Header’, perhaps misspelled or defined by a module not included in the server configuration
RUN a2enmod headers

WORKDIR /var/www/
