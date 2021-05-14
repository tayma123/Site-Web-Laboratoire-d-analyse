import { ResultatService } from 'src/app/Services/resultat.service';
import { Component, OnInit } from '@angular/core';

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { Resultat } from 'src/app/model/resultat';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  resultat: Resultat;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  currentEmail: string;
  email:string;

  fileInfos: Observable<any>;
  constructor(private resultatService: ResultatService ,public authService :AuthService, private router: Router) { }

  ngOnInit(): void {
    this.fileInfos = this.resultatService.getFiles()
  }

 selectFile(event): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.currentEmail=this.email;
    this.resultatService.upload(this.currentFile,this.currentEmail).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.resultatService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }
 

}
