import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpperCasefirstPipe } from 'src/app/uppercasefirst.pipe';
import { HomePage } from './home.page';
import { CoinpriceService } from 'src/app/coinprice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, UpperCasefirstPipe],
  providers: [CoinpriceService]
})
export class HomePageModule { }
