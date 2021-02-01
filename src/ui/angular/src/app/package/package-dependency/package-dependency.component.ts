import { Component, OnInit, Input } from '@angular/core';
// import { Package } from '../../../../../../../src/common/package';

@Component({
  selector: 'app-package-dependency',
  templateUrl: './package-dependency.component.html',
  styleUrls: ['./package-dependency.component.css']
})
export class PackageDependencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name: String;
}
