import { Component, OnInit } from '@angular/core';
import { readStatus } from '../../../../../../../src/common/dpkg-status';
import { Package } from '../../../../../../../src/common/package';
import { PackageService } from '../package-service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})

export class PackageListComponent implements OnInit {

  private _index: Set<Package>;

  constructor(private packageService: PackageService) {
    this._index = new Set<Package>();
  }

  ngOnInit(): void {
    this.packageService.index
      .then(index => { this._index = index } );
  }

  get packages (): Array<String> {
    return Array.from<String>(this._index.keys()).sort();
  }
}
