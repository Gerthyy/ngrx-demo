import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAddAllComponent } from './books-add-all.component';

describe('BooksAddAllComponent', () => {
  let component: BooksAddAllComponent;
  let fixture: ComponentFixture<BooksAddAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksAddAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAddAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
