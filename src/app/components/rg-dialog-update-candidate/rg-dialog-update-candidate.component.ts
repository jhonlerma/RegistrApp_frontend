import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { political_party } from 'src/app/models/political_party';
import { CandidateDataService } from 'src/app/services/candidate-data/candidate-data.service';
import { DialogData } from '../rg-dialog-input/rg-dialog-input.component';

@Component({
  selector: 'app-rg-dialog-update-candidate',
  templateUrl: './rg-dialog-update-candidate.component.html',
  styleUrls: ['./rg-dialog-update-candidate.component.scss']
})
export class RgDialogUpdateCandidateComponent implements OnInit {

  candidateId: string ='';
  politicalPartyList:political_party[] = [];

  updateCandidateForm = new FormGroup({
    document: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    last_name: new FormControl("", [Validators.required]),
    political_party: new FormControl("", [Validators.required]),
    resolution: new FormControl("", [Validators.required]),
  });


  constructor(private candidateDataService: CandidateDataService,
    public dialogRef: MatDialogRef<RgDialogUpdateCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: DialogData,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  updateCandidateSubmit() {
    if (this.updateCandidateForm.valid) {
      this.candidateDataService.updateCandidate(
        this.candidateId,
        this.updateCandidateForm.value['document']!,
        this.updateCandidateForm.value['name']!,
        this.updateCandidateForm.value['last_name']!,
        this.updateCandidateForm.value['political_party']!,
        this.updateCandidateForm.value['resolution']!,
      ).subscribe({
        next: () => {
          this.snackBar.open(`Actualización de candidato exitoso`, 'cerrar', { duration: 2000 });
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
        }
      });
    }

  }

  isInvalidField(field: string) {
    return this.updateCandidateForm.get(field)?.invalid && (this.updateCandidateForm.get(field)?.dirty || this.updateCandidateForm.get(field)?.touched);
  }

  hasError(field: string, validation: string) {
    return this.updateCandidateForm.get(field)?.hasError(validation);
  }



}
