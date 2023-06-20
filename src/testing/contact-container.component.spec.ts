import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ContactAddComponent } from 'src/app/contact-add/contact-add.component';
import { ContactCardComponent } from 'src/app/contact-card/contact-card.component';

import { ContactContainerComponent } from 'src/app/contact-container/contact-container.component' ;// './contact-container.component';

describe('ContactContainerComponent', () => {
  let component: ContactContainerComponent;
  let fixture: ComponentFixture<ContactContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactContainerComponent, ContactAddComponent, ContactCardComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 14 contact card instances', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-contact-card').length).toBe(14);
  });
});
