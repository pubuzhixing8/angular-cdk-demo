import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
  TemplateRef
} from '@angular/core';
import { TaskEntity } from 'src/app/entity/task-entity';
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalInjector
} from '@angular/cdk/portal';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';
import { ConnectionPositionPair, OverlayConnectionPosition, OriginConnectionPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  isOpened = false;

  originConnectionPosition: OriginConnectionPosition = {
    originX: 'center',
    originY: 'top'
  };

  overlayConnectionPosition: OverlayConnectionPosition = {
    overlayX: 'center',
    overlayY: 'bottom'
  };

  connectionPosition = new ConnectionPositionPair(
    this.originConnectionPosition,
    this.overlayConnectionPosition
  );

  ngOnInit() {}

  toggleOverlay() {
    this.isOpened = !this.isOpened;
  }
}
