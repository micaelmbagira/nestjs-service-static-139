import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: '/usr/local/foo/bar', // Path doesn't exist
    }),
  ],
  controllers: [],

})
export class AppModule {}
