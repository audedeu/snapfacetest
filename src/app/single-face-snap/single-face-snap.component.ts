import { Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!:string;

  constructor (private faceSnapsService: FaceSnapsService) { }
  
  
  ngOnInit(): void {
    this.buttonText = 'Oh snap';
  }
  onSnap() {
    if 
    (this.buttonText === 'Oh snap') {

      this.buttonText = 'Oh no do not snap';
    }
  else{
    this.faceSnap.snaps--;
    this.buttonText = 'Oh snap';}
  }

}
