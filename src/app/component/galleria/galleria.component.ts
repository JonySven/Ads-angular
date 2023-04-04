import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-galleria',
    templateUrl: './galleria.component.html',
    styleUrls: ['./galleria.component.scss']
})
export class AppGalleriaComponent{
   @Input() images: string[];
    
}