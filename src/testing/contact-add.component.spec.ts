import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactAddComponent } from 'src/app/contact-add/contact-add.component';

describe('ContactAddComponent', () => {
  let component: ContactAddComponent;
  let fixture: ComponentFixture<ContactAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAddComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit contactAdded event with contact data when addContact() method is called', (done)=>{
    let contactAdd = new ContactAddComponent();
    const contact = {
      id: 102,
      firstName: "Lucy",
      lastName: "Roger",
      email: "lucy@gmail.com",
      contactNo: "+12657864321"
    };
    contactAdd.contact = contact;
    contactAdd.contactAdded.subscribe(c => {
      expect(c).toEqual(contact);
      done();
    });
    contactAdd.addContact();
  });

  it('should call addContact() method when add button is clicked', fakeAsync(() => {
    spyOn(component, 'addContact');
    component.contact = {
      id: 102,
      firstName: "Lucy",
      lastName: "Roger",
      email: "lucy@gmail.com",
      contactNo: "+12657864321"
    }
    const compiled = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
    compiled.triggerEventHandler("click",null);
    fixture.detectChanges();
    expect(component.addContact).toHaveBeenCalled();
  }));
});
