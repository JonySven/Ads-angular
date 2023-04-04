import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuterizationComponent } from './auterization.component';

describe('AuterizationComponent', () => {
  let component: AuterizationComponent;
  let fixture: ComponentFixture<AuterizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuterizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuterizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
