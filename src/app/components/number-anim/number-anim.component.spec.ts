import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAnimComponent } from './number-anim.component';

describe('NumberAnimComponent', () => {
  let component: NumberAnimComponent;
  let fixture: ComponentFixture<NumberAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberAnimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
