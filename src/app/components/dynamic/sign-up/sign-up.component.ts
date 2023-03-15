import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup; 
  ifSignup:any;
 
  constructor(private authService: AuthService,private  router: Router){  }

  
  ngOnInit():void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup():FormGroup{
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)])
    })
  }

  signup():void{
    this.authService.signup(this.signupForm.value).subscribe((msg)=>this.dest(msg));

  }
  dest(anything:any){
    console.log(anything);
    if(anything.message == "User registered"){
      this.router.navigate([""])
    }
  }

}
