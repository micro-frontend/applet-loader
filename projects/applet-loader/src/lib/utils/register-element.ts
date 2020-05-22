import { Injector, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';

export function registerElement<T>(injector: Injector, selector: string, component: Type<T>): void {
  if (!customElements.get(selector)) {
    const definition = createCustomElement(component, { injector });
    customElements.define(selector, definition);
  }
}
