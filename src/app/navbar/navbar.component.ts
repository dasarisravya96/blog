import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Trigger download of the resume PDF in assets.
  downloadResume(): void {
    try {
      const url = '/assets/Resume-Sravya-Dasari.pdf';
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.download = 'Resume-Sravya-Datari.pdf';
      // For Safari / some browsers, append to body to ensure click works
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      // fallback: open in new tab
      window.open('/assets/Resume-Sravya-Dasari.pdf', '_blank');
    }
  }

}
