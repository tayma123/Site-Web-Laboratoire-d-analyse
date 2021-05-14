import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Analyse } from 'src/app/model/analyse';
import { AnalysesService } from 'src/app/Services/analyses.service';
import {FormsModule} from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
  public analyses:Analyse[];
  public editAnalyse: Analyse;
  public deleteAnalyse: Analyse;

  constructor(private analysesService:AnalysesService, public authService: AuthService,private router:Router){
    
   }
   ngOnInit(){
    this.getAnalyses();
   }
   public getAnalyses():void{
       this.analysesService.getAllAnalyses().subscribe(
         (Response:Analyse[])=> {
           console.log(Response);
           this.analyses = Response;
         },
         (error:HttpErrorResponse)=>{
           alert(error.message);
         });
       }
       public onOpenModal(analyse: Analyse, mode: string): void {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
          button.setAttribute('data-target', '#addAnalyseModal');
        }
        if (mode === 'edit') {
          this.editAnalyse = analyse;
          button.setAttribute('data-target', '#updateAnalyseModal');
        }
        if (mode === 'delete') {
          this.deleteAnalyse = analyse;
          button.setAttribute('data-target', '#deleteAnalyseModal');
        }
        container.appendChild(button);
        button.click();
      }
      public onAddAnalyse(addForm: NgForm): void {
        document.getElementById('add-analyse-form').click();
        this.analysesService.addAnalyse(addForm.value).subscribe(
          (response: Analyse) => {
            console.log(response);
            this.getAnalyses();
            addForm.reset();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
            addForm.reset();
          }
        );
      }
      public onUpdateAnalyse(analyse: Analyse): void {
        this.analysesService.updateAnalyse(analyse).subscribe(
          (response: Analyse) => {
            console.log(response);
            this.getAnalyses();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    
      public onDeleteAnalyse(name: String): void {
        this.analysesService.deleteAnalyse(name).subscribe(
          (response: void) => {
            console.log(response);
            this.getAnalyses();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    
    
       
           
    }


