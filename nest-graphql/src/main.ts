import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`${process.cwd()}/src/schema.gql`);
  console.log(`Graphql server is working on http://localhost:3000`);
}
bootstrap();
