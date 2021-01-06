import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';

// declarar rutas
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from './menu/menu.component';

// declarar pipes
import { SearchPipe } from "./pipes/search";
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthenticationGuard } from './services/authentication.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticationGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'chat/:id', component: ChatComponent, canActivate: [AuthenticationGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChatComponent,
    ProfileComponent,
    MenuComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
  // bootstrap: [LoginComponent]
})
export class AppModule { }
