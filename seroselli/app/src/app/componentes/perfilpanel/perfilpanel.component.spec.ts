import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpanelComponent } from './perfilpanel.component';

describe('PerfilpanelComponent', () => {
  let component: PerfilpanelComponent;
  let fixture: ComponentFixture<PerfilpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
