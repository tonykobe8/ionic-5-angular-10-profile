import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { RedirectGuard} from './redirect.guard';
import { EducationComponent } from './education/education.component';
import { ExperinceComponent } from './experince/experince.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, AboutComponent, ProjectsComponent, EducationComponent, ExperinceComponent, HomeComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [RedirectGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
