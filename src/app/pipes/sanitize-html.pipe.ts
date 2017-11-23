import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  /**
   *
   */
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(content: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
