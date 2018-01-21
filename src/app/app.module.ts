//ionic built in plugins
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Main Module
import { MyApp } from './app.component';
//import { InternationalPhoneModule } from 'ng4-intl-phone';
//Modules
import { HomePage } from '../pages/home/home';
import { SliderPage } from '../pages/slider/slider';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SliderPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   // InternationalPhoneModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SliderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
