import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ContactCardComponent } from 'src/app/contact-card/contact-card.component';//'../app/contact-card/contact-card.component';

describe('ContactCardComponent', () => {

  let component: ContactCardComponent;
  let fixture: ComponentFixture<ContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contact details', () => {
    component.contact = {
      firstName: "Mary",
      lastName: "Jones",
      email: "mary.jones@gmail.com",
      contactNo: "+1 (265) 343-9920"
    }
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.innerHTML).toContain("Mary");
  });
});
