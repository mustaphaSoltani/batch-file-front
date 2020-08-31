import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarJobComponent } from './star-job.component';

describe('StarJobComponent', () => {
  let component: StarJobComponent;
  let fixture: ComponentFixture<StarJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
