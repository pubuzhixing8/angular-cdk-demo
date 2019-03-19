import { Injectable, ViewContainerRef, Injector, ComponentRef, NgZone, ComponentFactoryResolver } from '@angular/core';
// import { ComponentFactoryResolver } from '@angular/core/src/render3';

export interface ComponentType<T> {
    new(...args: any[]): T;
}

@Injectable({
    providedIn: 'root'
})
export class DynamicComponentService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private ngZone: NgZone) {
            console.log(this.injector);
            console.log(this.ngZone);
            console.log(componentFactoryResolver);
    }
    renderComponent<T>(
        component: ComponentType<T>,
        viewContainerRef: ViewContainerRef,
        componentFactoryResolver: ComponentFactoryResolver,
        injector?: Injector
    ): ComponentRef<T> {
        viewContainerRef.clear();
        const componentFactory = componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = viewContainerRef.createComponent<T>(
            componentFactory,
            viewContainerRef.length,
            injector || viewContainerRef.injector
        );
        return componentRef;
    }
}
