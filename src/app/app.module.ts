import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio'


import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { WizardComponent } from './login/wizard/wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatProgressBarModule, MatSelectModule, MatTabsModule } from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { CardDetailsComponent } from './dashboard/card-details/card-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerInterceptorService } from './server-interceptor.service';
import { TodoComponent } from './dashboard/components/todo/todo.component';
import { FoodOrderComponent } from './dashboard/components/food-order/food-order.component';
import { MatTableModule } from '@angular/material/table'
import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";


// cdk material
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    LoginComponent,
    WizardComponent,
    UserLoginComponent,
    CardDetailsComponent,
    TodoComponent,
    FoodOrderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    DragDropModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers: [AngularFirestore,{
    provide: HTTP_INTERCEPTORS, useClass: ServerInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

