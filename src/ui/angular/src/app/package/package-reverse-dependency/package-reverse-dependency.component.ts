import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-reverse-dependency',
  templateUrl: './package-reverse-dependency.component.html',
  styleUrls: ['./package-reverse-dependency.component.css']
})
export class PackageReverseDependencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() name: String;
}
