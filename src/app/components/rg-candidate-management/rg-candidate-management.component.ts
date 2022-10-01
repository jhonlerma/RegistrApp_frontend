import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candidate';
import { political_party } from 'src/app/models/political_party';
import { PoliticalPartyDataService } from 'src/app/services/political-party-data/political-party-data.service';

@Component({
  selector: 'app-rg-candidate-management',
  templateUrl: './rg-candidate-management.component.html',
  styleUrls: ['./rg-candidate-management.component.scss']
})
export class RgCandidateManagementComponent implements OnInit {

  candidateList: Candidate[] = [];
  politicalPartyList:political_party[] = [];
  selectedOption: string | null = '';

  createCandidateForm = new FormGroup({
    document: new FormControl("", [Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    name: new FormControl("", [Validators.required]),
    resolution: new FormControl("", [Validators.required]),
    politicalParty: new FormControl("", [Validators.required])
  });

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSourcePoliticalParty:MatTableDataSource<political_party>;
  dataSource:MatTableDataSource<Candidate>;

  constructor(
    private route:ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private PoliticalPartyDataSource: PoliticalPartyDataService,
  ){ 
    this.politicalPartyList=this.route.snapshot.data['response'];
    this.candidateList = this.route.snapshot.data['candidates']
    this.dataSourcePoliticalParty = new MatTableDataSource(this.politicalPartyList);
    this.dataSource = new MatTableDataSource(this.candidateList);
  }

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

