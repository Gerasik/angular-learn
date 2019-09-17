import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardItemComponent } from './app-card-item.component';

describe('AppCardItemComponent', () => {
  let component: AppCardItemComponent;
  let fixture: ComponentFixture<AppCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
