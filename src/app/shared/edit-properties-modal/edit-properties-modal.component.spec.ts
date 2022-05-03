import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPropertiesModalComponent } from './edit-properties-modal.component';

describe('EditPropertiesModalComponent', () => {
  let component: EditPropertiesModalComponent;
  let fixture: ComponentFixture<EditPropertiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPropertiesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPropertiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
