import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AadService {

  constructor(private httpService: HttpClient) {
  }

  loadAllUsers() {
    return this.httpService.get('http://localhost:9191/users/fromAzure');
  }

  loadAllManagers() {
    return this.loadAllUsers().pipe(
      map((userData) => {
        var mgrTemp = [];
        for (const a in userData) {
          if (userData.hasOwnProperty(a)) {
            if (userData[a].manager !== undefined && userData[a].manager !== null) {
              if (mgrTemp.length === 0) {
                mgrTemp.push(userData[a].manager);
              } else {
                const isDuplicate = mgrTemp.find((mgr) => mgr.id === userData[a].manager.id);
                if (!isDuplicate) {
                  mgrTemp.push(userData[a].manager);
                }
              }
            }
          }
        }

        return mgrTemp;
      })
    );
  }

  loadAllGroups() {
    return this.httpService.get('http://localhost:9191/groups/fromAzure');
  }
}
