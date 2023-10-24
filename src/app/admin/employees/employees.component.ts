import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { User } from 'src/core/models/user.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.showEmployee();
  }

  users: User[] = [];

  showEmployee() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data.filter((user) => user.userType === 1); //sadece çalışanları görüntülemek için
      console.log(response);
    });
  }

  deleteEmployee(id: number) {
    if (confirm('Çalışanı silmek istediğinize emin misiniz?')) {
      this.apiService.deleteEntity(id, User).then((response: any) => {
        if (response.success) {
          window.location.reload();
        }
      });
    }
  }
}
