import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candidate';
import { political_party } from 'src/app/models/political_party';
import { CandidateDataService } from 'src/app/services/candidate-data/candidate-data.service';
import { PoliticalPartyDataService } from 'src/app/services/political-party-data/political-party-data.service';
import { RgConfirmDialogComponent } from '../rg-confirm-dialog/rg-confirm-dialog.component';
import { RgDialogUpdateCandidateComponent } from '../rg-dialog-update-candidate/rg-dialog-update-candidate.component';

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

  displayedColumns: string[] = ['document', 'name', 'lastName', 'political_party', 'resolution','Editar', 'Eliminar'];
  dataSourcePoliticalParty:MatTableDataSource<political_party>;
  dataSource:MatTableDataSource<Candidate>;

  constructor(
    private route:ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private candidateDataService: CandidateDataService,
    private changeDetectorRefs: ChangeDetectorRef

  ){ 
    this.politicalPartyList=this.route.snapshot.data['response'];
    this.candidateList = this.route.snapshot.data['candidates'];
    this.dataSourcePoliticalParty = new MatTableDataSource(this.politicalPartyList);
    this.dataSource = new MatTableDataSource(this.candidateList);
  }

  ngOnInit(): void {
  }
  

  createCandidateSubmit(){
    if (this.createCandidateForm.valid) {
      this.candidateDataService.createCandidate(
        this.createCandidateForm.value['document']!,
        this.createCandidateForm.value['name']!,
        this.createCandidateForm.value['lastName']!,
        this.createCandidateForm.value['resolution']!,
        this.createCandidateForm.value['politicalParty']!
      ).subscribe({
        next: (response) => {
          this.snackBar.open(`Creacion de candidato exitosa: ${response.document}`, 'cerrar', { duration: 2000 });
          this.updateCandidatesTableRequest();
        },
        error: (err) => {        
          this.snackBar.open(err.error, 'cerrar', { duration: 2000 }); }
      });
    }

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

  startEdit(candidate: Candidate) {
    this.openCandidateUpdateDialog(candidate);
  }

  startDeletion(id: string) {
    this.openCandidateDeleteDialog(`vas a eliminar el elemento con el id: ${id}\n¿Estas seguro?`, id);
  }

  openCandidateDeleteDialog(message: string, id: string): void {
    const dialogRef = this.dialog.open(RgConfirmDialogComponent, {},);
    dialogRef.componentInstance.message = message;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCandidateRequest(id);
      }
    });
  }

  deleteCandidateRequest(id: string){
    this.candidateDataService.deleteCandidate(id).subscribe({
      next: (x) =>{
        this.updateCandidatesTableRequest();
        this.snackBar.open('Candidate eliminado exitosamente', 'cerrar', { duration: 2000 });
      },
      error: (err)=>{
        this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
      }
    })

  }

  openCandidateUpdateDialog(candidate: Candidate): void {
    const dialogRef = this.dialog.open(RgDialogUpdateCandidateComponent, {},);
    dialogRef.componentInstance.updateCandidateForm.get('document')?.setValue(candidate.document);
    dialogRef.componentInstance.updateCandidateForm.get('name')?.setValue(candidate.name);
    dialogRef.componentInstance.updateCandidateForm.get('last_name')?.setValue(candidate.last_name);
    dialogRef.componentInstance.updateCandidateForm.get('political_party')?.setValue(candidate.political_party._id);
    dialogRef.componentInstance.updateCandidateForm.get('resolution')?.setValue(candidate.resolution);
    dialogRef.componentInstance.candidateId = candidate._id;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateCandidatesTableRequest();
      }
    });
  }

  // openUserDeleteDialog(message: string, id: string): void {
  //   const dialogRef = this.dialog.open(RgConfirmDialogComponent, {},);
  //   dialogRef.componentInstance.message = message;

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.deleteUserRequest(id);
  //     }
  //   });
  // }

  // deleteUserRequest(id: string){
  //   this.userDataService.deleteUser(id).subscribe({
  //     next: (x) =>{
  //       this.updateUsersTableRequest();
  //       this.snackBar.open('Usuario eliminado exitosamente', 'cerrar', { duration: 2000 });
  //     },
  //     error: (err)=>{
  //       this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
  //     }
  //   })

  // }

  updateCandidatesTableRequest(){
    this.candidateDataService.getAll().subscribe({
      next: (x) =>{
        this.candidateList = x;
        this.dataSource = new MatTableDataSource(this.candidateList);
        this.changeDetectorRefs.detectChanges();    
      },
      error: (err)=>{
        this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
      }
    })

  }

}

