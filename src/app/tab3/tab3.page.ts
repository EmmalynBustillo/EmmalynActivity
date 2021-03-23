import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName ="";
  contNumber ="";
  contacts = [];

  constructor(public alertCtrl: AlertController) { }

  saveContact() {
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
    this.contacts.push(contact);
    console.log(this.contacts);
    this.clearField();
  }

    clearField() {
      this.contName ="";
      this.contNumber ="";
  }
  async showConfirm(cont){
    const confirm = await this.alertCtrl.create({
      message: 'Are you sure you want to delete this contact?',
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'YES',
          handler: () => {
            console.log('Confirm Okay.');
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index, 1);
            }
          }
        }
      ]
    });
  await confirm.present();  
} 
}