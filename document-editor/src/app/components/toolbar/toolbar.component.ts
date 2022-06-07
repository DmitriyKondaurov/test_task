import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  availableTools: string[] = [
    'edit',
    'brush',
    'auto_fix_high',
    'crop_free',
    'invert_colors',
    'format_color_fill',
    'crop',
    'format_color_text',
    'flip_camera_android',
    'contrast',
    'flare',
    'sunny',
  ]

  constructor(private breakpointObserver: BreakpointObserver) {}

}
