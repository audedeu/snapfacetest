import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{
@Input() faceSnap!: FaceSnap;

constructor (private faceSnapsService: FaceSnapsService) {

}


title!: string;
description!: string;
createdDate!: Date;
snaps!: number;
imageUrl!: string;
buttonText!: string;

ngOnInit(): void {
  this.buttonText = 'Oh snap';
}
onSnap() {
  if 
  (this.buttonText === 'Oh snap') {
    this.faceSnapsService.snapFaceSnapById (this.faceSnap.id);
    this.buttonText = 'Oh no do not snap';
  }
else{
  this.faceSnap.snaps--;
  this.buttonText = 'Oh snap';}
}


}