$(document).ready(function(){
    var language = {
        eng: {
            welcome1: "The Wedding of",
            thaihoangngocmy1: "Thai Hoang & Ngoc My",
            theweddingof: "The Wedding of",
            thaihoangngocmy2: "Thai Hoang & Ngoc My",
        },
        vi: {
            welcome1: "Thiệp mời",
            thaihoangngocmy1: "Thái Hoàng & Ngọc Mỹ",
            theweddingof: "Đám cưới của",
            thaihoangngocmy2: "Thái Hoàng & Ngọc Mỹ",
        }
    };

    if (window.location.hash) {
        if (window.location.hash == "#en") {
            welcome1.textContent = language.eng.welcome1;
            thaihoangngocmy1.textContent = language.eng.thaihoangngocmy1;
            theweddingof.textContent = language.eng.theweddingof;
            thaihoangngocmy2.textContent = language.eng.thaihoangngocmy2;
            } else if (window.location.hash == "#vi") {
            welcome1.textContent = language.vi.welcome1;
            thaihoangngocmy1.textContent = language.vi.thaihoangngocmy1;
            theweddingof.textContent = language.vi.theweddingof;
            thaihoangngocmy2.textContent = language.vi.thaihoangngocmy2;
            }
    };
    window.addEventListener(
        "hashchange",
        () => {
            if (window.location.hash == "#en") {
                location.reload();
            };
            if (window.location.hash == "#vi") {
                location.reload();
            };
        },
    false,
    );
});

