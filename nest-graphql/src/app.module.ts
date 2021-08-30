import { Module, Query } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Resolver } from 'dns';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: `${process.cwd()}/src/schema.gql`,
    }),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
