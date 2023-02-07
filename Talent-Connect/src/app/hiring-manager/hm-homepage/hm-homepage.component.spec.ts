import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmHomepageComponent } from './hm-homepage.component';

describe('HmHomepageComponent', () => {
  let component: HmHomepageComponent;
  let fixture: ComponentFixture<HmHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
