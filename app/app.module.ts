import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importe o CommonModule aqui
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    ListaProdutosComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule // Adicione o CommonModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
