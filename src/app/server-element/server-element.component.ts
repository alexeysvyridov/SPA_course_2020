import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent
 implements
  OnInit
  // OnChanges,
  // DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked
  {
 @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngchanges called');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('nginit called');
    console.log(this.header.nativeElement.textContent)
    console.log('Text content paragraph ' + this.paragraph.nativeElement.textContent);
  }
  // ngDoCheck() {
  //   console.log("docheck called!");
  // }
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called');
  //   console.log('Text content paragraph ' + this.paragraph.nativeElement.textContent);
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called');
  // }
  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }
  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }
  // ngOnDestroy() {
  //   console.log("ngDestroy");
  // }
}
