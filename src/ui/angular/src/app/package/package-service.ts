import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators';

import { createIndex } from '../../../../../common/dpkg-status';
import { Package } from '../../../../../common/package';

@Injectable({
  providedIn: 'root'
})

export class PackageService {

  private _index: Set<Package>;

  constructor(
    private http: HttpClient,
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError( {
        message: 'Could not fetch package list; please try again later.',
        error 
      } );
  };
  
  get packages(): Observable<Set<Package>> {
    if (this._index instanceof Set && this._index.size > 0)
      return of (this._index);

    return this.http.get('http://localhost:5000', { responseType: 'text' })
      .pipe(
        catchError(this.handleError), // then handle the error
        map((data: string) => {
          this._index = createIndex(data);
          return this._index;
        })
      );
  }
}