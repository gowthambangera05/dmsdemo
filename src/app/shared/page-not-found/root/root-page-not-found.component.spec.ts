import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPageNotFoundComponent } from './root-page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: RootPageNotFoundComponent;
  let fixture: ComponentFixture<RootPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
