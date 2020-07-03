import { Injectable } from '@angular/core';

@Injectable()
export class WtDownloadService {

  constructor() { }

  downloadBlob(blob: Blob, fileName: string): void {
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, fileName);
      return;
    }

    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    document.body.appendChild(anchor);
    anchor.setAttribute('style', 'display: none');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(url);
  }

}
