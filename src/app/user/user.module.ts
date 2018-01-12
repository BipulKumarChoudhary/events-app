import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.route';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(userRoutes),
    FormsModule
  ],
  providers: []
})

export class UserModule {}