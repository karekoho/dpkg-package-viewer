import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDependencyComponent } from './package-dependency.component';

describe('PackageDependencyComponent', () => {
  let component: PackageDependencyComponent;
  let fixture: ComponentFixture<PackageDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageDependencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
