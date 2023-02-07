import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaAdminHomeComponent } from './ta-admin-home.component';

describe('TaAdminHomeComponent', () => {
  let component: TaAdminHomeComponent;
  let fixture: ComponentFixture<TaAdminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaAdminHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
