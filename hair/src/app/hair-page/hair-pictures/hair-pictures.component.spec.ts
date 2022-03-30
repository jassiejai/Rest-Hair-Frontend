import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairPicturesComponent } from './hair-pictures.component';

describe('HairPicturesComponent', () => {
  let component: HairPicturesComponent;
  let fixture: ComponentFixture<HairPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
