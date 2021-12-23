import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagiopageComponent } from './estagiopage.component';

describe('EstagiopageComponent', () => {
  let component: EstagiopageComponent;
  let fixture: ComponentFixture<EstagiopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstagiopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstagiopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
