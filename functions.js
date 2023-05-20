export const functions = {

    isMobile() {
        if (screen.width <= 760) {
            return true;
        }
        else {
            return false;
        }
    },
    goToUrl(url) {
        window.open(url, "_blank");
    },

}