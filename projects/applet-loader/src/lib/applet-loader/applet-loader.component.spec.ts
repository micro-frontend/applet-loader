import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppletLoaderComponent } from './applet-loader.component';

describe('AppletLoaderComponent', () => {
  let component: AppletLoaderComponent;
  let fixture: ComponentFixture<AppletLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppletLoaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppletLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
