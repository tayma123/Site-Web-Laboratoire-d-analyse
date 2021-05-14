import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Rdv } from 'src/app/model/rdv';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/Services/auth.service';
import { FileUploadService } from 'src/app/Services/file-upload.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];  
  fileName:string;
  public rdvs:Rdv[];
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  
  erreur=0;
  constructor(private usersService: UsersService,public authService :AuthService, private router: Router ,private httpClient: HttpClient) { 
   
  }

  ngOnInit(): void {

    ;
  }
  public getUser_analyses():void{
    this.usersService.getUser_analyses(this.authService.loggedUser).subscribe(
      (Response:Rdv[])=> {
        console.log(Response);
        this.rdvs = Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      });
    }
 
 }
