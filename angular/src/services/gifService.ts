import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Gifs } from './models/gifs';

const apiKey = `dc6zaTOxFJmzC`;

@Injectable()
export default class GifService {

    constructor(private http: HttpClient) { }

    fetchGifs(query: string): Observable<Gifs> {
        let params = encodeURIComponent(query).replace(/%20/g, '+');
        return this.http.get<Gifs>(`https://api.giphy.com/v1/gifs/search?q=` + params + `&api_key=${apiKey}`);
    }
}