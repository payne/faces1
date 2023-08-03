import { Component } from '@angular/core';

@Component({
  selector: 'app-face-card',
  templateUrl: './face-card.component.html',
  styleUrls: ['./face-card.component.scss']
})
export class FaceCardComponent {
  imgUrl="https://payne.github.io/faces/Scott_Anderson.jpg";
  personName="Scott";
  possibleNames=["Scott","Tim","John","Jane"];

  guessPerson(name:string){
    if(name===this.personName){
      alert("Correct!");
    }else{
      alert("Wrong!");
    }
  }
}
