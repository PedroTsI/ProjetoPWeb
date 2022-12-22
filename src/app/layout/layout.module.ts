import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {IMensagem} from "../shared/servicos/IMensagem";
import {MensagemService} from "../shared/servicos/mensagem.service";
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {FlexModule} from '@angular/flex-layout';
import {PipesModule} from "../shared/pipes/pipes.module";
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatBadgeModule,
    FlexModule,
    PipesModule,
    HttpClientModule
  ],
  exports: [
    MenuComponent,
  ]
})
export class LayoutModule { }
