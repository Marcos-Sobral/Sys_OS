import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TabelaDataSource, TabelaItem } from './tabela-datasource';
import { User } from 'src/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable, { static: false}) table!: MatTable<User>;
  dataSource = new MatTableDataSource <User> ([]);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'phone', 'cpf' , 'cnpj' ,'dataNascimento'];

  constructor(public service:UserService) {
    //this.dataSource = new TabelaDataSource();
  }

  users:User[] = [];
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.service.getUsers().subscribe(
      {
        next: (response) =>{
          console.log(response)
          this.dataSource = new MatTableDataSource <User> (response);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: (erro:any) =>{
          console.log('ocorreu algum erro')
          console.log(erro)
        }
      }
    )
  }


  ngAfterViewInit(){
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
