import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import * as jQuery from 'jquery';
import {HomeContentComponent} from './home-content/home-content.component';
import {RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicePrestaComponent } from './service-presta/service-presta.component';
import { EvenementComponent } from './evenement/evenement.component';
import {ScriptService} from "./script.service";
import { LivreOrComponent } from './livre-or/livre-or.component';
import { CalendarComponent } from './calendar/calendar.component';

const appRoutes: Routes = [
    { path: 'contact', component: ContactComponent },
    {
        path: 'accueil',
        component: HomeContentComponent,
        pathMatch: 'full'


    },
    {
        path: 'evenements',
        component: EvenementComponent,
        pathMatch: 'full'
    },
    {
        path: 'livre-or',
        component: LivreOrComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicePresta',
        component: ServicePrestaComponent,
    },
    { path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
    },

    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeContentComponent,
        ContactComponent,
        ServicePrestaComponent,
        EvenementComponent,
        LivreOrComponent,
        CalendarComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [ScriptService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
