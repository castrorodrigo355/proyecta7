import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlconparametroComponent } from './urlconparametro.component';

describe('UrlconparametroComponent', () => {
  let component: UrlconparametroComponent;
  let fixture: ComponentFixture<UrlconparametroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlconparametroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlconparametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
