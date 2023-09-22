import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWebdatarocksPivot } from './ngx-webdatarocks.component';

describe('NgxWebdatarocksComponent', () => {
  let component: NgxWebdatarocksPivot;
  let fixture: ComponentFixture<NgxWebdatarocksPivot>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxWebdatarocksPivot]
    });
    fixture = TestBed.createComponent(NgxWebdatarocksPivot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
