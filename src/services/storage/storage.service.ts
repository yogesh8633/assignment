import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
  }
  public setUserToken(factomaniaId) {
    sessionStorage.setItem('factomaniaId', factomaniaId);
  }
  public setUser(user) {
    sessionStorage.setItem('user', user);
  }
  static getItem(key) {
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : null;
  }
  static setItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key) {
    sessionStorage.removeItem(key);
  }

  static clearAll() {
    sessionStorage.clear();
  }

}