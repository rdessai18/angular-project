import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  // @Output() featureEvent = new EventEmitter< string >();
  // onSelect(feature: string){
  //   this.featureEvent.emit(feature);
  // }

}
