import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {    
type : 'postgres',
host : process.env.DB_HOST,
port : parseInt(process.env.DB_PORT),
username : process.env.DB_USER,
password : process.env.DB_PW,
database : process.env.DB_NAME,
schema : process.env.DB_SCHAME,
autoLoadEntities : false,
migrationsTableName : 'migration',
migrations : ['dist/migrations/*.js'],
entities : ['dist/**/*.entity.js'],
synchronize : false,
dropSchema : false,
migrationsRun : true,
logging : true,
};