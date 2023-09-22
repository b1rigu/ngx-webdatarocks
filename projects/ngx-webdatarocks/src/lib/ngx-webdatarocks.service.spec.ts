import { TestBed } from '@angular/core/testing';

import { NgxWebdatarocksService } from './ngx-webdatarocks.service';

describe('NgxWebdatarocksService', () => {
  let service: NgxWebdatarocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWebdatarocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
