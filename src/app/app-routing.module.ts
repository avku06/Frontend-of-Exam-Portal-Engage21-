import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./pages/signup/signup.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {UserDashboardComponent} from "./pages/user/user-dashboard/user-dashboard.component";
import {AdminGuard} from "./services/admin.guard";
import {StudentGuard} from "./services/student.guard";
import {LoginGuard} from "./services/login.guard";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AdminHomepageComponent} from "./pages/admin/admin-homepage/admin-homepage.component";
import {ViewSubjectsComponent} from "./pages/admin/view-subjects/view-subjects.component";
import {AddSubjectComponent} from "./pages/admin/add-subject/add-subject.component";
import {AddQuizComponent} from "./pages/admin/add-quiz/add-quiz.component";
import {ViewQuizComponent} from "./pages/admin/view-quiz/view-quiz.component";
import {UpdateQuizComponent} from "./pages/admin/update-quiz/update-quiz.component";
import {ViewQuizQuestionsComponent} from "./pages/admin/view-quiz-questions/view-quiz-questions.component";
import {AddQuestionComponent} from "./pages/admin/add-question/add-question.component";
import {QuizComponent} from "./pages/user/quiz/quiz.component";
import {InstructionsComponent} from "./pages/user/instructions/instructions.component";
import {StartQuizComponent} from "./pages/user/start-quiz/start-quiz.component";
import {ViewAttemptsComponent} from "./pages/admin/view-attempts/view-attempts.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
    canActivate:[LoginGuard]
  },
  {
    path:'admin-dashboard',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:AdminHomepageComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'subjects',
        component:ViewSubjectsComponent
      },
      {
        path:'add-subject',
        component:AddSubjectComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'view-quiz',
        component:ViewQuizComponent
      },
      {
        path:'attempts/quiz/:qId',
        component:ViewAttemptsComponent
      },
      {
        path:'update-quiz/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'view-quiz-questions/:qid/:title',
        component:ViewQuizQuestionsComponent
      },
      {
        path:'add-question/:qid/:title',
        component:AddQuestionComponent
      },
    ],
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[StudentGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:':cid',
        component:QuizComponent,
      },
      {
        path:'instructions/:qid',
        component:InstructionsComponent
      },
    ]
  },
  {
    path:'start/:qid',
    component:StartQuizComponent,
    canActivate:[StudentGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
