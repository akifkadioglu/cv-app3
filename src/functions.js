import { router } from "./router";

export const functions = {

    isMobile() {
        if (screen.width <= 760) {
            return true;
        }
        else {
            return false;
        }
    },
    goToUrl(url, isBlank = true) {
        window.open(url, isBlank ? "_blank" : null);
    },
    goToPage(name, param) {
        router.push({ name: name, params: param });
    },
}