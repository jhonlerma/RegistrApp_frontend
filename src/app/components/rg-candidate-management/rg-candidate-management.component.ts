import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/candidate';

@Component({
  selector: 'app-rg-candidate-management',
  templateUrl: './rg-candidate-management.component.html',
  styleUrls: ['./rg-candidate-management.component.scss']
})
export class RgCandidateManagementComponent implements OnInit {

  candidateList: Candidate[] = [];

  createCandidateForm = new FormGroup({
    document: new FormControl("", [Validators.required]),
    last_name: new FormControl("",[Validators.required]),
    name: new FormControl("", [Validators.required]),
    resolution: new FormControl("", [Validators.required]),
    // ??political_party: new FormControl("", [Validators.required])
  });

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.candidateList);

  constructor() { }

  ngOnInit(): void {
  }

  createCandidateSubmit(){

  }

  isInvalidField(field: string){
    return this.createCandidateForm.get(field)?.invalid && (this.createCandidateForm.get(field)?.dirty || this.createCandidateForm.get(field)?.touched);
  }

  hasError(field: string, validation: string){
    return this.createCandidateForm.get(field)?.hasError(validation);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

