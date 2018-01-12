import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.route';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(userRoutes)
  ],
  providers: []
})

export class UserModule {}