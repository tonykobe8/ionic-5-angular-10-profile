import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ExperinceComponent } from './experince/experince.component';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },{path:'' ,component:ProfileComponent},
  {path:'profile' ,component:ProfileComponent},{path:'about' ,component:AboutComponent},
  {
    path: "projects", component: ProjectsComponent,
    },{path:'education',component:EducationComponent },{path:'experince' , component:ExperinceComponent }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
