import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/auth/role-response';
import { political_party } from 'src/app/models/political_party';
import { PoliticalPartyGetAllService } from 'src/app/services/political-party-get-all.service';
import { DialogData, RgDialogInputComponent } from '../rg-dialog-input/rg-dialog-input.component';

@Component({
  selector: 'app-rg-dialog-update-political-party',
  templateUrl: './rg-dialog-update-political-party.component.html',
  styleUrls: ['./rg-dialog-update-political-party.component.scss']
})
export class RgDialogUpdatePoliticalPartyComponent implements OnInit {

  updatePolitical_partyForm = new FormGroup({
    lema: new FormControl("", [Validators.required]),
    nombre: new FormControl("", [Validators.required]),
  });

  politicalId: string ='';

  constructor(private PoliticalPartyGetAllService: PoliticalPartyGetAllService, public dialogRef: MatDialogRef<RgDialogInputComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: DialogData) {
  }

  ngOnInit(): void {

  }

  updatePolitical_partySubmit() {

  }

  isInvalidField(field: string) {
    return this.updatePolitical_partyForm.get(field)?.invalid && (this.updatePolitical_partyForm.get(field)?.dirty || this.updatePolitical_partyForm.get(field)?.touched);
  }

  hasError(field: string, validation: string) {
    console.log(this.updatePolitical_partyForm.get(field)?.errors);
    return this.updatePolitical_partyForm.get(field)?.hasError(validation);
  }

}
