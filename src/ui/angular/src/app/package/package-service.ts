import { Injectable } from '@angular/core';
import { readStatus } from '../../../../../common/dpkg-status';
import { Package } from '../../../../../common/package';

@Injectable({
  providedIn: 'root'
})

export class PackageService {

  // private _index: Set<Package>;
  
  constructor() {
    // this._index = new Set<Package>();
  }

  get index(): Promise<Set<Package>> {
    /* Does not work 
    if (this._index.keys.length > 0) 
      return Promise.resolve(this._index);
      
    return readStatus('http://localhost:5000')
      .then(index => {
          this._index = index
          return index;
      }) */

    return readStatus('http://localhost:5000');
  }
}