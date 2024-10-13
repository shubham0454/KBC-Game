import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeModule } from 'ng-qrcode';
import { Router, RouterModule } from '@angular/router';
import { PlayerScreenComponent } from "./player-screen/player-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QRCodeModule, QrCodeModule, RouterModule, PlayerScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isModalOpen = false;
  qrCodeDownloadLink: string = '';
  constructor(private router: Router) {}
  startGame() {
    this.isModalOpen = true;
    this.qrCodeDownloadLink = window.location.origin + '/player-screen';
  }
  closeModal() {
    this.isModalOpen = false;
  }
 
}
