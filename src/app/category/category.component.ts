import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Router } from '@angular/router';
import { Category } from 'src/core/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  categories: Category[] = []; //branşları depolamak için bir dizi

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.apiService.getAllEntities(Category).subscribe((response) => {
      this.categories = response.data;

      console.log(this.categories);
    });
  }
}
