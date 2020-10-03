import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
const routes: Routes = [
  { path: 'tab', loadChildren: './tabs/tabs.module#TabsPageModule' },{path:'' ,component:ProfileComponent},
  {path:'profile' ,component:ProfileComponent},{path:'about' ,component:AboutComponent},{path:'projects' ,component:ProjectsComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
