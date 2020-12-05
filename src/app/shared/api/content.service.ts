import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kursus } from './models/kursus';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getDaftarKursus() {
    return this.http.get<Kursus[]>('assets/json/daftar-kursus.json');
  }
}
