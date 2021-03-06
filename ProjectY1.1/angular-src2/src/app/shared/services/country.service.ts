import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {

    constructor(private http: Http) { }


    getAllCountries() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('Http://localhost:3000/countries/getAll', { headers: headers })
            .map(res => res.json());
    }
}
