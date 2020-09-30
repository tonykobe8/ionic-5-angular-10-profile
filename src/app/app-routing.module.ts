import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RasetshaiComponent } from './rasetshai/rasetshai.component';
const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'rasetshai' ,component:RasetshaiComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
