import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tea } from '@app/models';
import { Preferences } from '@capacitor/preferences';
import { environment } from '@env/environment';
import { mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrakeService {
  constructor(private http: HttpClient) {}

  getVersion(): Observable<any> {
    return this.http.get<any>(
      'https://dev.drake.bz/api/v2/Infra/MyDrakeMobileMinVersion'
    );
  }
}
