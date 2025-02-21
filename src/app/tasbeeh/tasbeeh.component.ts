import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasbeeh',
  standalone: true,
  imports: [],
  templateUrl: './tasbeeh.component.html',
  styleUrl: './tasbeeh.component.css',
})
export class TasbeehComponent implements OnInit {
  count = 0;
  currentZikr = 'سبحان الله';
  azkar = [
    'سبحان الله',
    'الحمد لله',
    'لا إله إلا الله',
    'الله أكبر',
    'لا حول ولا قوه الا بالله',
  ];

  constructor() {}
  ngOnInit() {
    const savedCount = localStorage.getItem('tasbeehCount');
    if (savedCount !== null) {
      this.count = parseInt(savedCount, 10);
    }

    const savedZikr = localStorage.getItem('tasbeehZikr');
    if (savedZikr) {
      this.currentZikr = savedZikr;
    }
  }

  incrementCount() {
    this.count++;
    localStorage.setItem('tasbeehCount', this.count.toString());
  }

  resetCount() {
    this.count = 0;
    localStorage.setItem('tasbeehCount', '0');
  }

  changeZikr(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.currentZikr = target.value;
    localStorage.setItem('tasbeehZikr', this.currentZikr);
    this.count = 0;
    localStorage.setItem('tasbeehCount', '0');
  }
}
