import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReslistsPage } from './reslists.page';

describe('ReslistsPage', () => {
  let component: ReslistsPage;
  let fixture: ComponentFixture<ReslistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReslistsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReslistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
