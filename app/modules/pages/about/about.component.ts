import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'modules/pages/about/about.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
    text: string = 'About Page';
}
