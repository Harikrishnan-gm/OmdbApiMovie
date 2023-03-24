import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { MainComponent} from './main/main.component'
const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'result/:Title',component:ResultComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
