import { TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';// './app.component';
import { ContactAddComponent } from 'src/app/contact-add/contact-add.component';
import { ContactContainerComponent } from 'src/app/contact-container/contact-container.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { IconComponent } from 'src/app/icon/icon.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        IconComponent,
        ContactContainerComponent,
        ContactAddComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render 1 instance of header component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-header').length).toBe(1);
  });

  it('should render 1 instance of contact-container component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-contact-container').length).toBe(1);
  });

  it('should render 1 instance of contact-add component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-contact-add').length).toBe(1);
  });
});
