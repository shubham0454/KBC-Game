import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerScreenComponent } from './player-screen/player-screen.component';
export const routes: Routes = [
{
    path:'app-comp',
    component:AppComponent,
}
,{
    path:'player-screen',
    component:PlayerScreenComponent,
}

];
