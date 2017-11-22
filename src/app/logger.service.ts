import { Injectable } from '@angular/core';


export class LoggerService {

  constructor() { }

  logMessage(message) {
    console.log(message);
  }
}
