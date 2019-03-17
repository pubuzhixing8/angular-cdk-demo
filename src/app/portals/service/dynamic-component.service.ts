import { Injectable, ViewContainerRef, Injector, ComponentRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

export interface ComponentType<T> {
    new(...args: any[]): T;
}

@Injectable({
    providedIn: 'root'
})
export class DynamicComponentService {

    constructor() {

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
