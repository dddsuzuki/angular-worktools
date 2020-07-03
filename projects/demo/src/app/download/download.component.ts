import { Component, OnInit } from '@angular/core';
import { WtDownloadService } from 'angular-worktools';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  fileName = 'download_demo';
  content = 'demo\ndemo\ndemo\n';

  constructor(private downloadService: WtDownloadService) { }

  ngOnInit(): void {
  }

  download(): void {
    const fileName = `${this.fileName}.txt`;
    const blob = new Blob([this.content], {type: 'text/plain'});

    this.downloadService.downloadBlob(blob, fileName);
  }

}
