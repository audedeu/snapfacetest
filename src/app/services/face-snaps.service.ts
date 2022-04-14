import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable ({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] =[
{
    id: 4,
    title: 'Archibald',
    description: 'Mon meilleur ami depuis tout petit !',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/03/26/22/22/happy-1281590_960_720.jpg',
    createdDate: new Date (),
    snaps: 200,
    location: 'Lille'
    },
    {
        id: 5,
      title: 'Voyage en Norvege',
      description: 'Mon voyage en Norvège, 2016',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/09/02/19/26/norway-2708286_960_720.jpg',
      createdDate: new Date (),
      snaps: 0,
      location: 'Norvège'
    },
    {
        id: 6,
      title: 'Fat Cat',
     description:  'Mon GROS chat, Garfield',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/08/13/09/00/cat-3602558_960_720.jpg',
      createdDate: new Date (),
      snaps: 0
  }
];

getAllFaceSnaps (): FaceSnap[] {
    return this.faceSnaps; 
}

SnapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
        faceSnap.snaps++;
    } else {
        throw new Error('FaceSnap not found!');
    }
}
}