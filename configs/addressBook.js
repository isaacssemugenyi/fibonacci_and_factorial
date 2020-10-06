/**
 * This is still under development and modification
 * 
 * Address Book to take in Full name and Phone number
 * With an option to only submit the phone number without the Full name
 * Ability to delete a number from the contact array
 * Ability to multiple delete contacts
 * Ability to edit existing full name or a number or both
 * Ability to add a category (favorite, home, personal, work) by default it is normal
*/

function Contact(fullname = '', phonenumber, category = 'normal') {
  this.fullname = fullname || phonenumber;
  this.phonenumber = phonenumber;
  this.category = category;
  this.address = [];
}

Contact.prototype.addNumber = function () {
  return this.address.push({ Fullname: this.fullname, Phonenumber: this.phonenumber, Category: this.category });
};

let contact1 = new Contact('Isaac', 795060494);
contact1.addNumber();
let contact2 = new Contact('Phesto', 795060494, 'Favorite');
contact2.addNumber();
let contact3 = new Contact(795060494, 'home');
contact3.addNumber();
let contact4 = new Contact('Tom', 795060494, 'personal');
contact4.addNumber();

console.log(contact2.address);
