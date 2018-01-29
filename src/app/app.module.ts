import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { DatePickerModule } from 'ion-datepicker';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FitnessPage } from '../pages/fitness/fitness';
import { ExpensePage } from '../pages/expense/expense';
import { LoginOptionsPage } from '../pages/login-options/login-options';
import { ChooseinteresetPage } from '../pages/chooseintereset/chooseintereset';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import * as firebase from 'firebase/app';
//Audio Module
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';
/**
 * Sample custom factory function to use with ionic-audio
 */
export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

//Component Declarations 
import { ArticleComponent } from '../components/article/article';
import { ArticleMiniScrollComponent } from '../components/article-mini-scroll/article-mini-scroll';
import { ArticleScrollComponent } from '../components/article-scroll/article-scroll';
import { CardWithAudioComponent } from '../components/card-with-audio/card-with-audio';
import { CardWithFormComponent } from '../components/card-with-form/card-with-form';
import { CardWithLandscapeImageComponent } from '../components/card-with-landscape-image/card-with-landscape-image';
import { CardWithLandscapeImageScrollComponent } from '../components/card-with-landscape-image-scroll/card-with-landscape-image-scroll';
import { CardWithOpinionPollComponent } from '../components/card-with-opinion-poll/card-with-opinion-poll';
import { CardWithPotraitImageComponent } from '../components/card-with-potrait-image/card-with-potrait-image';
import { CardWithPotraitImageScrollComponent } from '../components/card-with-potrait-image-scroll/card-with-potrait-image-scroll';
import { CardWithQuotesComponent } from '../components/card-with-quotes/card-with-quotes';
import { CardWithTestimonialComponent } from '../components/card-with-testimonial/card-with-testimonial';
import { CardWithVideoComponent } from '../components/card-with-video/card-with-video';
import { CategoryScrollComponent } from '../components/category-scroll/category-scroll';
import { HomeDashboardBannerComponent } from '../components/home-dashboard-banner/home-dashboard-banner';
import { ProfileCompletionCardComponent } from '../components/profile-completion-card/profile-completion-card';
import { SocialCardComponent } from '../components/social-card/social-card';
import { ToolCardComponent } from '../components/tool-card/tool-card';
import { ToolsScrollComponent } from '../components/tools-scroll/tools-scroll';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { config } from '../shared/config';
firebase.initializeApp(config.firebase);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FitnessPage,
    ExpensePage,
    LoginOptionsPage,
    ChooseinteresetPage,
    ArticleComponent,
    ArticleMiniScrollComponent,
    ArticleScrollComponent,
    CardWithAudioComponent,
    CardWithFormComponent,
    CardWithLandscapeImageComponent,
    CardWithLandscapeImageScrollComponent,
    CardWithOpinionPollComponent,
    CardWithPotraitImageComponent,
    CardWithPotraitImageScrollComponent,
    CardWithQuotesComponent,
    CardWithTestimonialComponent,
    CardWithVideoComponent,
    CategoryScrollComponent,
    HomeDashboardBannerComponent,
    ProfileCompletionCardComponent,
    SocialCardComponent,
    ToolCardComponent,
    ToolsScrollComponent
  ],
  imports: [
    BrowserModule,
    InternationalPhoneModule,
    DatePickerModule,
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FitnessPage,
    ExpensePage,
    LoginOptionsPage,
    ChooseinteresetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
