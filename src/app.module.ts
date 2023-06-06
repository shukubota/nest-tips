import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { EventsGateway } from './events.gateway';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
class _AppModule {}

@Module({
  imports: [
    _AppModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // include: [RecipesModule],
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // debug: true,
      // playground: true,
    }),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
