import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsoComponent } from './corso.component';

describe('CorsoComponent', () => {
  let component: CorsoComponent;
  let fixture: ComponentFixture<CorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
