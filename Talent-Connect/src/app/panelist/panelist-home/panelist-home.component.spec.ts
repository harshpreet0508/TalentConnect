import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelistHomeComponent } from './panelist-home.component';

describe('PanelistHomeComponent', () => {
  let component: PanelistHomeComponent;
  let fixture: ComponentFixture<PanelistHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelistHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
