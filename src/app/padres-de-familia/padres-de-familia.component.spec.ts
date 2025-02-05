import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadresDeFamiliaComponent } from './padres-de-familia.component';

describe('PadresDeFamiliaComponent', () => {
  let component: PadresDeFamiliaComponent;
  let fixture: ComponentFixture<PadresDeFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadresDeFamiliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadresDeFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
