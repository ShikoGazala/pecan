import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorTreeItemComponent } from './navigator-tree-item.component';

describe('NavigatorTreeItemComponent', () => {
  let component: NavigatorTreeItemComponent;
  let fixture: ComponentFixture<NavigatorTreeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorTreeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
