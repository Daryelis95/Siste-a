## Proyecto UNEFA

Proyecto de administración becas UNEFA


## Requisitos mínimos
1. PHP 7.2
2. Apache 2.2
3. postgreSQL 9.3
4. Composer
5. Node y NPM
6. Bower (puedes instalar bower con el comando `npm install -g bower`)
7. gulp (puedes instalar gulp con el comando `npm install --global gulp-cli`)


## Pasos para Instalar
1. Clonar el proyecto `git clone git@gitlab.com:becas/unefa.git`
2. Entrar en la carpeta del proyecto `cd unefa`
3. Instalar dependencias `composer install`
4. Generar archivo de configuracion de la BD `cp .env.example .env`
5. Colocar los datos de su base de datos
6. Generar api key `php artisan key:generate`
7. Generar las tablas de base de datos `php artisan migrate`
8. Generar el usuario admin `php artisan db:seed`
9. Entrar en la carpera view `cd front/`
10. Instalar dependencias JS
  - `bower install`
  - `npm install`
11. Ejecutar `gulp super` para generar los archivos estaticos

Nota: Debe tener activado el driver pg_pdo y pdo para su apache, configurarlo en el php.ini