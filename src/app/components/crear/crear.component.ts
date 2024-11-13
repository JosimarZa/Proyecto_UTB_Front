import { Component } from '@angular/core';
import { Project } from '../../Models/project.model';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css',
  providers: [ProjectService]
})
export class CrearComponent {

  public title: string;
  public project: Project;

  constructor( private _projectService:ProjectService){
        this.title = "Crear proyecto";
        this.project = new Project('','','','','','','');
  }

  onSubmit(form: NgForm){
    console.log(this.project)
    this._projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
