import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {


  constructor(logger: LoggerService) {
    logger.logMessage('In Logging Service Constructor');

  }


  getAuthors() {
    return ['Author1', 'Author2', 'Author3'];
  }

}
