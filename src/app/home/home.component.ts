import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  showResumeModal = false;

  openResumeModal(): void {
    this.showResumeModal = true;
    // prevent background scroll while modal is open
    try { document.body.style.overflow = 'hidden'; } catch (e) { /* noop */ }
  }

  closeResumeModal(): void {
    this.showResumeModal = false;
    try { document.body.style.overflow = ''; } catch (e) { /* noop */ }
  }

  // Close modal on Escape key
  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(_event: any): void {
    if (this.showResumeModal) { this.closeResumeModal(); }
  }

  ngOnDestroy(): void {
    // ensure body overflow is reset if the component is destroyed while modal is open
    try { document.body.style.overflow = ''; } catch (e) { /* noop */ }
  }
}
