import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedProfilesComponent } from './recomended-profiles.component';

describe('RecomendedProfilesComponent', () => {
  let component: RecomendedProfilesComponent;
  let fixture: ComponentFixture<RecomendedProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendedProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomendedProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
