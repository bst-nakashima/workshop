# WordPress の公式イメージ
FROM wordpress:latest

# リナックスファイル・ユーザー権限
ARG DOCKER_UID=1000
ARG DOCKER_GID=1000

ENV WEB_USER webuser
ENV WEB_GROUP webgroup

RUN apt-get -y update \
    && apt-get clean \
    && groupadd -f -g ${DOCKER_GID} ${WEB_GROUP} \
    && useradd -ms /bin/bash --no-user-group -g ${DOCKER_GID} -u ${DOCKER_UID} ${WEB_USER}

# php設定を変更可能を設定    
COPY /.docker/wp/php.ini ${PHP_INI_DIR}/conf.d/

# リナックスファイル・ユーザー権限
RUN { \
    echo '#!/bin/bash'; \
    echo 'chown -R ${WEB_USER}:${WEB_GROUP} /var/www/html'; \
    echo 'apache2-foreground'; \
    } > /usr/local/bin/apache2-docker-wp-init.sh \
    && chmod 755 /usr/local/bin/apache2-docker-wp-init.sh

EXPOSE 8080

# サーバー開始
CMD [ "apache2-docker-wp-init.sh" ] 