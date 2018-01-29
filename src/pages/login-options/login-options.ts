import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import { HomePage } from '../home/home';
import { ChooseinteresetPage } from '../chooseintereset/chooseintereset';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
//import { ApiService } from '../../shared/api.service';
/**
 * Generated class for the LoginOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-options',
  templateUrl: 'login-options.html',
})



export class LoginOptionsPage {
  private myForm : FormGroup;
  private profileForm : FormGroup;
  @ViewChild(DatePickerDirective) private datepickerDirective:DatePickerDirective;
  localDate = new Date();
  loginOptionShown = true;
  otpVerificationScreen = false;
  loginSuccess = false;
  profileDetails = false;
  loginSuccessScreen = false;
  loginwithLCID = false;
  forgotPasswordScreen = false;
  changePasswordScreen = false;
  passwordChangeSuccessful = false;
  passwordResetFlow = false;
  type = 'password';
  icon = 'eye-off';
  phoneNumber:String;
  errMessage:string[] = { 
    phoneNumber : '',
    firstName : '',
    lastName : '',
    dob : '',
    localDate : '',
    gender : ''
  };
  countryCode:String = '+234';
  firstName:String;
  lastName:String;
  gender:String = 'null';
  verificationId : any;
  //verify
   verificationCode: string;
    user: any;
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   private formBuilder: FormBuilder,
   public fireAuth : AngularFireAuth,

  /*private api : ApiService*/) {
  this.myForm = this.formBuilder.group({
      myPhone: ['+234', Validators.required],
      
    });
  /*this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
      
    });*/
  }

  public closeDatepicker(){
    this.datepickerDirective.modal.dismiss();
  }
  ionViewDidLoad() {
  }
  onKeyDownPhoneNumber(key){
    if(key.keyCode == 8 || key.keyCode == 65 || key.ctrlKey){
      return true;
    }
    if(key.target.value.length > 10){
        return false;
    }
     this.errMessage.phoneNumber = '';
  }
  uploadImage(){
    console.log('data');
  }
  goToOTPScreen(elem){
    if(this.phoneNumber == '' || this.phoneNumber == undefined){
      this.errMessage.phoneNumber = 'phone number is required';
      return false;
    }
    if(this.phoneNumber.length < 10){
      this.errMessage.phoneNumber = 'maximum character should be 9';
      return false;
    }
    else{
      if(this.myForm.controls.myPhone.value == undefined){
        this.myForm.controls.myPhone.value = '+234';
      }
      if(elem){
        this.passwordResetFlow = false;
      }else{
        this.passwordResetFlow = true;
      }
      (<any>window).FirebasePlugin.verifyPhoneNumber('+639351470363', 60, function(credential) {
          alert('test');
          this.verificationId = credential.verificationId;
          
          var signInCredential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
          firebase.auth().signInWithCredential(signInCredential);
      }, function(error) {
          console.error(error);
      });
      this.countryCode = this.myForm.controls.myPhone.value;
      this.forgotPasswordScreen = false;
      this.loginOptionShown = false;
      this.loginwithLCID = false;
      this.otpVerificationScreen = true;
    }
  }
  goToLoginOptionsScreen(){
    this.loginOptionShown = true;
    this.passwordChangeSuccessful = false;
  }
  goToSuccessScreen(){
    if(this.firstName == '' || this.firstName == undefined){
      this.errMessage.firstName = 'field name is required';
      this.errMessage.gender = '';
      this.errMessage.localDate = '';

      return false;
    }
    if(this.lastName == '' || this.lastName == undefined){
      this.errMessage.firstName = 'field name is required';
      this.errMessage.gender = '';
      return false;
    }
    if(this.gender == 'null' || this.gender == undefined){
      this.errMessage.firstName = '';
      this.errMessage.localDate = '';
      this.errMessage.gender = 'choose your gender';
      return false;
    }
    if(this.localDate.getYear() == new Date().getYear()){
      this.errMessage.firstName = '';
      this.errMessage.gender = '';

      this.errMessage.localDate = 'date must not date';
      return false;
    }

    this.profileDetails = false;
    this.loginSuccessScreen = true;
  }
  goToLCIDLogin(){
    this.loginwithLCID = true;
    this.passwordChangeSuccessful = false;
  }
  goToForgotPasswordScreen(){
    this.forgotPasswordScreen = true;
  }
  goToPasswordSuccessScreen(){
    this.changePasswordScreen = false;
    this.passwordChangeSuccessful = true;
  }
  goToInterestPage(){
    this.navCtrl.setRoot(ChooseinteresetPage);
  }
  goToHomeScreen(){
    this.navCtrl.setRoot(HomePage);
  }
  //OTP Field
  next(eve,ef,eb){
    console.log(eve);
    console.log(ef);
    console.log(eb);
    if(eve.keyCode === 8 || eve.keyCode === 37 || eve.keyCode === 46){
      eb.setFocus();
    }else{
      if(ef){
        ef.setFocus();
        ef.value = '';
      }else{
        setTimeout( () => {
        // this.profileDetails = true;
        if(this.passwordResetFlow){
          this.changePasswordScreen = true;
          this.profileDetails = false;
        }else{
          this.profileDetails = true;
        }        
        this.loginOptionShown = false;
        this.otpVerificationScreen = false;       
        this.loginSuccessScreen = false;
        this.loginwithLCID = false;
        this.forgotPasswordScreen = false;
        this.passwordChangeSuccessful = false;
        }, 500);      
      } 
    } 
  }

  //Password show or hide
  showHide() {
    event.preventDefault();
    if(this.type===undefined || this.type==='text'){
      this.type = 'password';
      this.icon = 'eye-off';
    }else{
      this.type = 'text';
      this.icon = 'eye';
    }
  }
}
