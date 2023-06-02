import { Injectable, INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

@Injectable()
export class AppService {
  async setup(nestApp: INestApplication): Promise<void> {
    const app = nestApp;
    //setupSwagger
    this.setupSwagger(app);
    //setupExpress
    this.setupExpress(app);
    //listen
    await app.listen(3000);
  }

  /**
   * SetupSwagger
   * @param {INestApplication} app
   */
  setupSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Iridian')
      .setDescription('The API for contact')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  /**
   * SetupExpress
   * @param {INestApplication} app
   */
  setupExpress(app: INestApplication) {
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.enableCors();
  }
}
