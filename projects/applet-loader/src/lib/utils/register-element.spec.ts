import { Component, Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { registerElement } from './register-element';

@Component({
  template: '<p>abc</p>',
})
class AbcComponent {
}

describe('Register Element', () => {
  it('should register', () => {
    registerElement(TestBed.inject(Injector), 'app-abc', AbcComponent);
    document.body.innerHTML = '<app-abc></app-abc>';
    expect(document.body.querySelector('app-abc').innerHTML).toEqual('<p>abc</p>');
  });

  it('should allow to register multi times', () => {
    registerElement(TestBed.inject(Injector), 'app-abc', AbcComponent);
    registerElement(TestBed.inject(Injector), 'app-abc', AbcComponent);
    registerElement(TestBed.inject(Injector), 'app-abc', AbcComponent);
  });
});
