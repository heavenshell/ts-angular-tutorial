import {
  Component,
  NgModule,
  Directive,
  HostListener,
  Renderer2,
  ElementRef
} from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';

@Component({
  template: '',
})
class DummyComponent {}

@Directive({
  selector: '[routerLink]', // tslint:disable-line:directive-selector
})
class RouterLinkStubDirective {
  constructor(
    private rd: Renderer2,
    private element: ElementRef
  ) {}
  @HostListener('click') onClick() {
    const href = this.element.nativeElement.href;
    action('Click routerLink')(href);
  }
}

@NgModule({
  declarations: [DummyComponent, RouterLinkStubDirective]
})
class DummyComponentModule {}

export const imports = [
  HttpClientTestingModule,
  RouterModule,
  RouterTestingModule.withRoutes([
    { path: '**', component: DummyComponent },
  ])
];

export const declarations = [
  DummyComponent,
  RouterLinkStubDirective,
];
