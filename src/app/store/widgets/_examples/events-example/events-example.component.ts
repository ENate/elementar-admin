import { Component } from '@angular/core';
import { EventsWidgetComponent } from '../../../../_store/widgets';

@Component({
  selector: 'app-events-example',
  imports: [
    EventsWidgetComponent
  ],
  templateUrl: './events-example.component.html',
  styleUrl: './events-example.component.scss'
})
export class EventsExampleComponent {

}
