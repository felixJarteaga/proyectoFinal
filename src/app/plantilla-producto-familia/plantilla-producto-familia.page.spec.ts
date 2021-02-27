import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantillaProductoFamiliaPage } from './plantilla-producto-familia.page';

describe('PlantillaProductoFamiliaPage', () => {
  let component: PlantillaProductoFamiliaPage;
  let fixture: ComponentFixture<PlantillaProductoFamiliaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillaProductoFamiliaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillaProductoFamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
