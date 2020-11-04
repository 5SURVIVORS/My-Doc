import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDocComponent } from './home-page-doc.component';

describe('HomePageDocComponent', () => {
  let component: HomePageDocComponent;
  let fixture: ComponentFixture<HomePageDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
