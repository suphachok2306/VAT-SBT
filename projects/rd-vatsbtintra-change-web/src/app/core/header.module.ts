import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthConfig, AUTH_CONFIG, NullValidationHandler, OAuthModule, OAuthStorage, ValidationHandler } from 'angular-oauth2-oidc';
import { HttpConfigInterceptor } from './config/http.config.interceptor';

export function storageFactory(): OAuthStorage {
    return localStorage;
}
@NgModule({
    declarations: [
    ],
    imports: [

    ],

    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true
        }
    ]
})
export class HeaderModule {
    static forRoot(): ModuleWithProviders<HeaderModule> {
        return {
            ngModule: HeaderModule,
            providers: [
                { provide: AuthConfig, useValue: AUTH_CONFIG },
                { provide: ValidationHandler, useClass: NullValidationHandler },
                { provide: OAuthStorage, useFactory: storageFactory },
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: HeaderModule) {
        if (parentModule) {
            throw new Error('HeaderModule is already loaded. Import it in the AppModule only');
        }
    }
}
