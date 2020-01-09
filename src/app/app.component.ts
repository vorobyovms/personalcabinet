import { Component, ViewChild, AfterViewInit, ElementRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<h1>Авторизация</h1>
             <p><label>Telephon <input type = text [(ngModel)]="telephone"></label></p>
             <p><button (click)="preparaData()">Проверить телефон</button></p>
             <p>{{ formatjson }} </p>`
})
export class AppComponent {
  telephone = '';                                             // username customer
  senddata1: any = '';                                        // structure data for json
  formatjson: any = '';                                       // format string what send to server
  methodAPI: any = '/CheckDataForPersonal';                   // name method check mobile telephone
  fullurl: any = environment.server_url + this.methodAPI;     // full url to method
  httpClientModule: HttpClientModule;
  httpClient: HttpClient;

  preparaData(): void {
    // tslint:disable-next-line: triple-equals
    if (this.telephone != '') {
      // structure for json
      this.senddata1 = { "telephone": this.telephone};
      this.formatjson = JSON.stringify(this.senddata1);
      this.httpClient.get(this.fullurl);

    } else {

    }
  }

}
