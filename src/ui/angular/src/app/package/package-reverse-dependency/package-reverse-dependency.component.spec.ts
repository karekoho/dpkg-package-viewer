import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageReverseDependencyComponent } from './package-reverse-dependency.component';

describe('PackageReverseDependencyComponent', () => {
  let component: PackageReverseDependencyComponent;
  let fixture: ComponentFixture<PackageReverseDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageReverseDependencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageReverseDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
