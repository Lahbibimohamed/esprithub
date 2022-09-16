import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { UsersComponent } from '../users/users.component';
import { SingleUserComponent } from '../users/single-user/single-user.component';
import {AuthGuard} from "src/app/guards/auth.guard"
import { ProfilComponent } from '../profil/profil.component';
import { OptionsComponent } from '../options/options.component';
import { AddOptionComponent } from '../options/add-option/add-option.component';


const routes: Routes = [
  {

    path: '',
    data: {
      title: 'Theme'
    },

    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'userspage'
        }
      },
      {
        path: 'users/user/:id',
        component:SingleUserComponent ,
        data: {
          title: 'user'
        }
      },
      {
        path: 'profil',
        component: ProfilComponent,
        data: {
          title: 'usersprofil'
        }
      },
      {
        path: 'options',
        component: OptionsComponent,
        data: {
          title: 'options'
        }
      },
      {
        path: 'add-option',
        component: AddOptionComponent,
        data: {
          title: 'options'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
