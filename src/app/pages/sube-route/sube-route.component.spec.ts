import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeRouteComponent } from './sube-route.component';

describe('SubeRouteComponent', () => {
  let component: SubeRouteComponent;
  let fixture: ComponentFixture<SubeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubeRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
