import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Theme } from './theme';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private themes: Theme[] = [
        new Theme("Light Mode", "light-theme"),
        new Theme("Dark Mode", "dark-theme")
    ]

    get currentHost(): string {
        return window.location.hostname;
    }

    get currentPath(): string {
        let pathName = window.location.pathname;

        if (pathName === "/") {
            return "";
        }

        return pathName.replace("/", "\\");
    }

    get currentThemeLabel(): string {
        return sessionStorage.getItem("theme-label");
    }

    get nextThemeLabel(): string {
        let theme = this.themes.find(x => x.label == this.currentThemeLabel);
        let themeIndex = this.themes.indexOf(theme);

        let nextTheme = themeIndex + 1 == this.themes.length ? 
            this.themes[0] : this.themes[themeIndex + 1];

        return nextTheme.label;
    }

    constructor(
        private router: Router) {
        this.setCurrentTheme();
    }

    print() {
        this.router.navigate(['everything']).then(function () {
            window.print();
        });
    }

    private setCurrentTheme() {
        let currentThemeLabel = sessionStorage.getItem("theme-label");

        let theme = this.themes.find(x => x.label == this.currentThemeLabel);

        if (theme == null) {
            theme = this.themes[0];
        }

        document.body.className = theme.className;
        sessionStorage.setItem("theme-label", theme.label);
    }

    nextTheme() {
        if (this.currentThemeLabel != null) {
            let theme = this.themes.find(x => x.label == this.currentThemeLabel);
            let themeIndex = this.themes.indexOf(theme);

            let nextTheme = themeIndex + 1 == this.themes.length ? 
                this.themes[0] : this.themes[themeIndex + 1];

            document.body.className = nextTheme.className;
            sessionStorage.setItem("theme-label", nextTheme.label);
        } else {
            let theme = this.themes[0];
            document.body.className = theme.className;
            sessionStorage.setItem("theme-label", theme.label);
        }
    }
}
