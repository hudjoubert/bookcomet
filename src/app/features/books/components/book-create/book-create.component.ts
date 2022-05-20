import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
