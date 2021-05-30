import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
class _AppModule {}

@Module({
  imports: [
    // _AppModule,
    GraphQLModule.forRoot({
      // include: [RecipesModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
