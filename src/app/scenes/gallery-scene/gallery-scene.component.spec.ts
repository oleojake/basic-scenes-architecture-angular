import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySceneComponent } from './gallery-scene.component';

describe('GallerySceneComponent', () => {
  let component: GallerySceneComponent;
  let fixture: ComponentFixture<GallerySceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerySceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
