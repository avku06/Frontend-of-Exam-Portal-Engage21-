import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {authInterceptorProviders} from "./services/auth.interceptor";
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from "@angular/material/list";
import { SidemenuComponent } from './pages/admin/sidemenu/sidemenu.component';
import { AdminHomepageComponent } from './pages/admin/admin-homepage/admin-homepage.component';
import {MatTableModule} from '@angular/material/table';
import { AddSubjectComponent } from './pages/admin/add-subject/add-subject.component';
import { ViewSubjectsComponent } from './pages/admin/view-subjects/view-subjects.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import {MatCardActions} from "@angular/material/card";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {SidemenuComponent as UserSidemenu} from './pages/user/sidemenu/sidemenu.component';
import { UserHomepageComponent } from './pages/user/user-homepage/user-homepage.component';
import { QuizComponent } from './pages/user/quiz/quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";
import { NoRightClickDirective } from './services/no-right-click.directive';
import { MatVideoModule } from 'mat-video';
import { ViewAttemptsComponent } from './pages/admin/view-attempts/view-attempts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidemenuComponent,
    AdminHomepageComponent,
    AddSubjectComponent,
    ViewSubjectsComponent,
    AddQuizComponent,
    ViewQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UserSidemenu,
    UserHomepageComponent,
    QuizComponent,
    InstructionsComponent,
    StartQuizComponent,
    NoRightClickDirective,
    ViewAttemptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    MatVideoModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
