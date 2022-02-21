import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gifsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = '2WBjwhSnVSKQnCA95x3Ld3sQnUxv0PRN';
  private url: string = 'https://api.giphy.com/v1/gifs'

  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial() { return [...this._historial] }

  buscarGifs(query: string): void {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams().
    set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);
    this.http.get<SearchGIFResponse>(`${this.url}/search`, {params})
      .subscribe(
        res => {
          this.resultados = res.data
          localStorage.setItem('resultados', JSON.stringify(res.data))
        })
  }
}


