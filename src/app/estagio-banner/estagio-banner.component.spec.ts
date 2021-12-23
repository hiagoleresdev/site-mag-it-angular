import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioBannerComponent } from './estagio-banner.component';

describe('EstagioBannerComponent', () => {
  let component: EstagioBannerComponent;
  let fixture: ComponentFixture<EstagioBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstagioBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstagioBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
