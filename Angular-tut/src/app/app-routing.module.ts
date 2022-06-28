import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { DirectiveComponent } from './directive/directive.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'directive', component: DirectiveComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'child', component: ChildComponent },
  {path:'form',component:FormComponent},
  {path:'dynamicForm',component:DynamicFormComponent},
  {path:'admin',loadChildren:() => import('./admin/admin.module').then(mod => mod.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
