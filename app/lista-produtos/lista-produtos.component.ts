import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
  providers: [CurrencyPipe]
  
})
export class ListaProdutosComponent implements OnInit {
  produtos: any[] = [];
  novoProduto: { nome: string, preco: number } = { nome: '', preco: 0 };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('/api/produtos').subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  adicionarProduto(): void {
    this.http.post<any>('/api/produtos', this.novoProduto).subscribe(produto => {
      this.produtos.push(produto);
      this.novoProduto = { nome: '', preco: 0 };
    });
  }
}


