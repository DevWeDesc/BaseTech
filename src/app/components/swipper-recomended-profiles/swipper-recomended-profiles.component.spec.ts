import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperRecomendedProfilesComponent } from './swipper-recomended-profiles.component';

describe('SwipperRecomendedProfilesComponent', () => {
  let component: SwipperRecomendedProfilesComponent;
  let fixture: ComponentFixture<SwipperRecomendedProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipperRecomendedProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwipperRecomendedProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
