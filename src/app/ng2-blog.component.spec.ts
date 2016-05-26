import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NG2BlogAppComponent } from '../app/ng2-blog.component';

beforeEachProviders(() => [NG2BlogAppComponent]);

describe('App: NG2Blog', () => {
  it('should create the app',
      inject([NG2BlogAppComponent], (app: NG2BlogAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-blog works!\'',
      inject([NG2BlogAppComponent], (app: NG2BlogAppComponent) => {
    expect(app.title).toEqual('ng2-blog works!');
  }));
});
