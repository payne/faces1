import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCardComponent } from './face-card.component';

describe('FaceCardComponent', () => {
  let component: FaceCardComponent;
  let fixture: ComponentFixture<FaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
