import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import {Category} from 'src/core/models/category.model'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.showCategory();
  }

  categories: Category[] = [];

  showCategory() {
    this.apiService.getAllEntities(Category).subscribe((response) => {
      this.categories = response.data;
      console.log(response);
    });
  }

  deleteCategory(id: number) {
    if (confirm('Kategoriyi silmek istediğinize emin misiniz?')) {
      this.apiService.deleteEntity(id, Category).then((response: any) => {
        if (response.success) {
          window.location.reload();
        }
      });
    }
  }
}
