import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaTestComponent } from './corona-test.component';

describe('CoronaTestComponent', () => {
  let component: CoronaTestComponent;
  let fixture: ComponentFixture<CoronaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
