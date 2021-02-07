import { Component, OnInit } from '@angular/core';
import { Package } from '../../../../../../../src/common/package';
import { PackageService } from '../package-service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})

export class PackageListComponent implements OnInit {

  private _index: Set<Package>;

  private _error: any;

  constructor(private packageService: PackageService) {
    this._index = new Set<Package>();
  }

  ngOnInit(): void {
    this.packageService.packages.subscribe((index : Set<Package>) => {
        this._index = index
      },
      err => { 
        this._error = err; 
      }
      // () => HTTP request completed
    );
  }

  get packages (): Array<String> {
    return Array.from<String>(this._index.keys()).sort();
  }

  get errorMessage (): String {
    return this._error ? this._error.message : null
  }
}
