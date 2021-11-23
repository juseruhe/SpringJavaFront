import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPersonaComponent } from './insertar-persona.component';

describe('InsertarPersonaComponent', () => {
  let component: InsertarPersonaComponent;
  let fixture: ComponentFixture<InsertarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
