import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WpApiServiceService } from './wp-api-service.service';

describe('WpApiService Service', () => {
  beforeEachProviders(() => [WpApiServiceService]);

  it('should ...',
      inject([WpApiServiceService], (service: WpApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
