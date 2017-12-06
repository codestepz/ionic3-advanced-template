
/* =========================================================================================
 * Import Packages
 * ========================================================================================= */

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/* =========================================================================================
 * Setting
 * ========================================================================================= */

import { AppSetting } from '../../common/app.setting';

/* =========================================================================================
 * Component
 * ========================================================================================= */

@Component({
    selector: 'main-nav',
    templateUrl: 'views/nav.html'
})

/* =========================================================================================
 * Class
 * ========================================================================================= */

export class MainNav {

    /* =========================================================================================
     * Constructor
     * ========================================================================================= */

    // ทำงานอัตโนมัติ
    public constructor (public navCtrl: NavController, public app: AppSetting) {
        
        /* ..... */

    }

}