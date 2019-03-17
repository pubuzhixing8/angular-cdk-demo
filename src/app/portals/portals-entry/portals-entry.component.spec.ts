import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalsEntryComponent } from './portals-entry.component';

describe('PortalsEntryComponent', () => {
  let component: PortalsEntryComponent;
  let fixture: ComponentFixture<PortalsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
