import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SqliteDbCopy} from '@ionic-native/sqlite-db-copy/ngx';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {PlatformMock} from '../../Mocks/Platform';
import {SqliteDbCopyMock} from '../../Mocks/DbCopy';
import {SQLiteMock, SqliteObjectMock} from '../../Mocks/Sqlite';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    {provide: Platform, useClass: PlatformMock},
    {provide: SqliteDbCopy, useClass: SqliteDbCopyMock},
    {provide: SQLite, useClass: SQLiteMock},
    {provide: SQLiteObject, useClass: SqliteObjectMock},

    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
