import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Rdv } from 'src/app/model/rdv';
import { AuthService } from 'src/app/Services/auth.service';
import { RdvService } from 'src/app/Services/rdv.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
  public rdvs: Rdv[];

  constructor(private rdvService: RdvService,public authService :AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public getRdv():void{
    this.rdvService.getAllRdv().subscribe(
      (Response:Rdv[])=> {
        console.log(Response);
        this.rdvs= Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }
   public onAddRDV(addForm: NgForm): void {
  document.getElementById('add-rdv-form').click();
  this.rdvService.addRdv(addForm.value).subscribe(
    (response: Rdv) => {
      console.log(response);
      this.getRdv();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}}