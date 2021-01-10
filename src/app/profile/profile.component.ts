import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  picture: any;

  constructor(
    private userService: UserService,
    private autheticationService: AuthenticationService,
    private angularFireStorage: AngularFireStorage,
  ) {

    this.autheticationService
      .getStatus()
      .subscribe((status: any) => {
        this.userService
          .getUserByID(status.uid)
          .valueChanges()
          .subscribe(
            (data: User) => {
              this.user = data;
              console.log('Current User', this.user);
            }, (error) => {
              console.log(error);
            });
      }, (error) => {
        console.log(error);
      });

  }

  ngOnInit(): void {
  }

  saveSettings() {
    if (this.croppedImage) {
      const currentPictureId = Date.now();
      const path = 'pictures/' + currentPictureId + '.jpg';
      const pictures = this.angularFireStorage
        .ref(path)
        .putString(this.croppedImage, 'data_url');
      pictures
        .then((result) => {
          this.picture = this.angularFireStorage.ref(path).getDownloadURL();
          this.picture.subscribe((p: any) => {
            this.userService
              .setAvatar(this.user.id, p)
              .then(() => {
                alert('avatar uploaded');
              })
              .catch((err) => {
                console.error(err);
              });
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      this.userService.editUser(this.user)
        .then(data => alert('Cambios Guardados'))
        .catch(error => { alert(error); console.log(error) });
    }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded(image: HTMLImageElement) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
