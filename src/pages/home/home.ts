import {Component} from '@angular/core';

declare var window: any;
declare const greatdayplugin;

export interface GDIGeolocationCamera {
  camera: GDICamera,
  geolocation: GDIGeolocation
  cancelled: boolean
}

export interface GDICamera {
  nativeURL?: string,
  base64Image?: string
}

export interface GDIGeolocation {
  address?: string,
  latitude?: string,
  longtitude?: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor() {
  }

  runPlugin() {
  }

  getGDCamera(fileName?: string): Promise<GDICamera> {
    return new Promise((resolve, reject) => {
      let data = {
        nativeURL: "",
        base64Image: "",
        cancelled: false
      }

      greatdayplugin.getCamera(fileName, async (success) => {
        // const resolvedImageData = await this.file.resolveLocalFilesystemUrl("file://" + success);
        // const filename = resolvedImageData.nativeURL.substring(resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const path = resolvedImageData.nativeURL.substring(0, resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const base64Image = await this.file.readAsDataURL(path, filename);
        //
        // data.nativeURL = resolvedImageData.nativeURL;
        // data.base64Image = base64Image;
        resolve(data);
      }, (error) => {
        data.cancelled = true;
        resolve(data)
      })
    })
  }

  getGDCameraSwap(fileName?: string): Promise<GDICamera> {
    return new Promise((resolve, reject) => {
      let data = {
        nativeURL: "",
        base64Image: "",
        cancelled: false
      }
      greatdayplugin.getCameraSwap(fileName, async (success) => {
        // const resolvedImageData = await this.file.resolveLocalFilesystemUrl("file://" + success);
        // const filename = resolvedImageData.nativeURL.substring(resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const path = resolvedImageData.nativeURL.substring(0, resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const base64Image = await this.file.readAsDataURL(path, filename);
        //
        // data.nativeURL = resolvedImageData.nativeURL;
        // data.base64Image = base64Image;
        resolve(data);
      }, (error) => {
        data.cancelled = true;
        resolve(data)
      })
    })
  }

  getCamera(): Promise<any> {
    return new Promise((resolve, reject) => {
      window.plugins.camPlugin.show('camaera', 'long', function (success) {
        resolve(success);
      }, (err) => {
        resolve(err);
      });
    })
  }

  getGDGeolocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = {
        latitude: "",
        longitude: "",
        cancelled: false
      }

      greatdayplugin.getLocation((response) => {
        data.latitude = response.latitude;
        data.longitude = response.longitude;
        resolve(data);
      }, (err) => {
        data.cancelled = true;
        resolve(data);
      });
    })
  }

  getGDGeolocationRadius(): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = {
        latitude: "",
        longitude: "",
        cancelled: false
      }

      let dataLoc = {
        data: [
          {work_lat: -6.202394,
            work_lon: 106.652710,
            work_radius: 1000
          }, {
            work_lat: -6.175110,
            work_lon: 106.865036,
            work_radius: 1000
          }
          ]
      }
      greatdayplugin.getLocationRadius(dataLoc, async (response) => {
        data.latitude = response.latitude;
        data.longitude = response.longitude;
        resolve(data);
      }, (err) => {
        data.cancelled = true;
        resolve(data);
      });
    })
  }

  getGDGeolocationCamera(): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = {
        camera: {
          nativeURL: "",
          base64Image: ""
        },
        geolocation: {
          latitude: "",
          longitude: ""
        },
        cancelled: false
      }


      greatdayplugin.getLocationCamera("img_gd", async (response) => {
        // const resolvedImageData = await this.file.resolveLocalFilesystemUrl("file://" + response.path);
        // const filename = resolvedImageData.nativeURL.substring(resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const path = resolvedImageData.nativeURL.substring(0, resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const base64Image = await this.file.readAsDataURL(path, filename);

        // data.camera.nativeURL = resolvedImageData.nativeURL;
        // data.camera.base64Image = base64Image;
        // data.geolocation.latitude = response.latitude;
        // data.geolocation.longitude = response.longitude;
        console.log('get cam true');

        resolve(data);
      }, (err) => {
        console.log('get cam false error', err);

        data.cancelled = true;
        resolve(data);
      });
    })
  }

  getGDGeolocationCameraSwap(): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = {
        camera: {
          nativeURL: "",
          base64Image: ""
        },
        geolocation: {
          latitude: "",
          longitude: ""
        },
        cancelled: false
      }
      let dataLoc = {
        data: [
          {work_lat: -6.202394,
            work_lon: 106.652710,
            work_radius: 1000
          }, {
            work_lat: -6.175110,
            work_lon: 106.865036,
            work_radius: 1000
          }
        ]
      }
      let dataLocCam = {
        fileName: "img_gd",
        isSwap: true,
      }

      greatdayplugin.getLocationCameraSwap(dataLocCam, async (response) => {
        // const resolvedImageData = await this.file.resolveLocalFilesystemUrl("file://" + response.path);
        // const filename = resolvedImageData.nativeURL.substring(resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const path = resolvedImageData.nativeURL.substring(0, resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const base64Image = await this.file.readAsDataURL(path, filename);

        // data.camera.nativeURL = resolvedImageData.nativeURL;
        // data.camera.base64Image = base64Image;
        // data.geolocation.latitude = response.latitude;
        // data.geolocation.longitude = response.longitude;
        console.log('get cam true');

        resolve(data);
      }, (err) => {
        console.log('get cam false error', err);

        data.cancelled = true;
        resolve(data);
      });
    })
  }

  getGDGeolocationRadiusCameraSwap(): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = {
        camera: {
          nativeURL: "",
          base64Image: ""
        },
        geolocation: {
          latitude: "",
          longitude: ""
        },
        cancelled: false
      }
      let dataLocCam = {
        photo: "img_gd",
        isSwap: false,
        data: [
          {work_lat: -6.202394,
            work_lon: 106.652710,
            work_radius: 1000
          }, {
            work_lat: -6.175110,
            work_lon: 106.865036,
            work_radius: 1000
          }
        ]
      }

      greatdayplugin.getLocationRadiusCameraSwap(dataLocCam, async (response) => {
        // const resolvedImageData = await this.file.resolveLocalFilesystemUrl("file://" + response.path);
        // const filename = resolvedImageData.nativeURL.substring(resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const path = resolvedImageData.nativeURL.substring(0, resolvedImageData.nativeURL.lastIndexOf('/') + 1);
        // const base64Image = await this.file.readAsDataURL(path, filename);

        // data.camera.nativeURL = resolvedImageData.nativeURL;
        // data.camera.base64Image = base64Image;
        // data.geolocation.latitude = response.latitude;
        // data.geolocation.longitude = response.longitude;
        console.log('get cam true');

        resolve(data);
      }, (err) => {
        console.log('get cam false error', err);

        data.cancelled = true;
        resolve(data);
      });
    })
  }

}
