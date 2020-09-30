import {Component, OnInit} from '@angular/core';
import {EventBusService} from 'src/app/shared/eventbus/event-bus.service';
import {ThemeService} from '../theme/theme.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers/app.reducer';
import {ToggleEditor} from '../../store/actions/app.actions';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(private eb: EventBusService, private ts: ThemeService, private store: Store<AppState>) {}

  editorDisplayed = false;

  ngOnInit() {}

  toggleTheme() {
    this.ts.toggleTheme();
  }

  toggleEditor() {
    this.store.dispatch(new ToggleEditor());
  }

  uploadCloud() {
    console.log('Uploading to Cloud');
  }
}
