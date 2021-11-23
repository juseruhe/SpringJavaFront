import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPersonasComponent } from './mostrar-personas.component';

describe('MostrarPersonasComponent', () => {
  let component: MostrarPersonasComponent;
  let fixture: ComponentFixture<MostrarPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
