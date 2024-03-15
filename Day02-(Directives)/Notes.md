
## How to create a new component?

* Open an integrated terminal where the component is to be created.
* Using CLI we can create new component in angular.
* Command to generate the component is:
    * "ng generate component <component-name>" => this will generate the component having 4 files except module file.
    * "ng generate component -m <component-name>" => this will generate the component having 5 files including module file.
    * We can also write the commands in short like "ng g c <component-name>" or "ng g c -m <component-name>" for the above both commands respectively.


## Directives in Angular

* In Angular, Directives are defined as classes that can add new behavior to the elements in the template or modify existing behavior. The purpose of Directives in Angular is to maneuver the DOM, be it by adding new elements to DOM or removing elements and even changing the appearance of the DOM elements.
* All the directive starts with "ng".

* There are 3 types of directives:
    1. Structural (Layout) Directive => It is used to add or remove the DOM element.
    2. Attribute (Property) Directive => It manipulate the appearance and property of the DOM element.
    3. Custom or Component Directive => We can create our own directive and inject it into any DOM element.

### Structural Directive
* "*ngIf" anf "*ngFor" are the Structural Directive.

* <b>*ngIf:</b> It is used to show or hide any element on the DOM. If it is true then element will be visible otherwise not. In other words we can simply say that we can do conditional rendering in angular.
* Ex => 
```html
<!-- show or hide based on true or false using ngIf -->
<h1 *ngIf="true">This is ngIf condition</h1>

<h1 *ngIf="false">This is ngIf condition</h1>

<!-- conditional rendering using ngIf -->
<!-- age is defined in ts file -->
<h1 *ngIf="age >=18 ? true : false">This is ngIf condition</h1>

<!-- if else using ngIf -->
<!-- ifBlock is defined in ts file -->
<h1 *ngIf="ifBlock; else referenceName">If block is true</h1>

<!-- taking a reference in angular component is done via #name and ng-template tags shown below -->
<ng-template #referenceName>
    <h2>Else block</h2>
    <p>This is a p tag.</p>
<ng-template>

```

* <b>*ngFor:</b> It is used to iterate on data to show on UI like a for loop.
* Ex =>
```html
<!-- items array is defined in ts file. -->
<div *ngFor="let item of items">
    <p>{{item}}</p>
</div>
```


### Attribute Directive

* It is used to give style and proprty to a an Element dynamically.
* "ngClass" and "ngStyle" are the Attribute Directive.

* <b>[ngClass]:</b> It is used to apply class to a DOM element based on condition true or false.
* Ex =>
```html
<!-- isError is defined in ts file and default value is false -->
<!-- Below h1 tag will have the class "valid" or "invalid" based on the value of "isError"  -->
<h1 [ngClass]="{'valid': !isError, 'invalid': isError}">Learning ngClass</h1>
```

* <b>[ngStyle]</b> It is used to apply style to a DOM element.
* Ex =>
```html
<!-- isError is defined in ts file and default value is false -->
<h1 [ngStyle]="{'background-color': isError ? 'red' : 'green'}">Learning ngStyle</h1>
```


### Custom Directive
* To create a custom directive use the command "ng g directive [directiveName]".
* It will create two files, one ts file and other is testing file.

* Inside ts file, default custom directive is created by Angular. We can make changes according to requirement.

* Replace the default constructor(...){...} with the given below constructor
```js
constructor(private el: ElementRef) {

    this.el.nativeElement.style.color = 'blue';
}
```
* There is a selector present inside @Directive decorator as '[appBlueEl]'. To use this custom directive we can simply pass this selector as an attribute to a DOM element.
* Ex =>
```html
<h1 appBlueEl>Applied custom directive</h1>
```