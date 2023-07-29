import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotNewsComponent } from './not-news.component';

describe('NotNewsComponent', () => {
  let component: NotNewsComponent;
  let fixture: ComponentFixture<NotNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
