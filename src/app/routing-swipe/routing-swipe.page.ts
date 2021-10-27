import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/animations/slide-in';

@Component({
    selector: 'app-routing-swipe',
    templateUrl: './routing-swipe.page.html',
    animations: [slideInAnimation],
})
export class RoutingSwipePage {

    sliderPosition(outlet: RouterOutlet): number | null {
        if (!outlet.isActivated) {
            return null;
        }

        return Number(outlet.activatedRoute.snapshot.params.userId);
    }

}
