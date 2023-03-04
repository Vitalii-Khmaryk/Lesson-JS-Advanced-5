import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectComponent } from './colect.component';

describe('ColectComponent', () => {
  let component: ColectComponent;
  let fixture: ComponentFixture<ColectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
