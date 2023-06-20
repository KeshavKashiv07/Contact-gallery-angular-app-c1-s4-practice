import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from 'src/app/header/header.component' ;// './header.component';
import { IconComponent } from 'src/app/icon/icon.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, IconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the app heading `Contact Gallery`', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Contact Gallery');
  });

  it('should render 1 instance of icon component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-icon').length).toBe(1);
  });
});
