import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ActualitesService} from "./actualite.service";
import {Actualites} from "./actualites";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'scrapy';
  public actualites: Actualites[];
  constructor(private actualitesService: ActualitesService){

  }

  ngOnInit(): void {
    this.getActualite();
  }
  public getActualite(): void{
    this.actualitesService.getActualite().subscribe(
      (response:Actualites[])=>{
        this.actualites = response
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }


  public searchActualite(key: string): void {
    console.log(key);
    const results: Actualites[] = [];
    for (const actualite of this.actualites) {
      if (actualite.category.toLowerCase().indexOf(key.toLowerCase()) !== -1 ){
        results.push(actualite);
      }
    }
    this.actualites = results;
    if (results.length === 0 || !key) {
      this.getActualite();
    }
  }
}
