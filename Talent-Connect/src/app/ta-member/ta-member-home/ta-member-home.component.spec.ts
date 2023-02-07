import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaMemberHomeComponent } from './ta-member-home.component';

describe('TaMemberHomeComponent', () => {
  let component: TaMemberHomeComponent;
  let fixture: ComponentFixture<TaMemberHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaMemberHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaMemberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
