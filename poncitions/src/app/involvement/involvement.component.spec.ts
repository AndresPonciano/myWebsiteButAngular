import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvementComponent } from './involvement.component';

describe('InvolvementComponent', () => {
  let component: InvolvementComponent;
  let fixture: ComponentFixture<InvolvementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
