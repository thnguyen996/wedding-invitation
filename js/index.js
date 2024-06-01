$(document).ready(function(){
    // Add guess name
    const urlParams = new URLSearchParams(window.location.search);
    const guest_name = urlParams.get('name');
    var guests = {
        tuyet: "Bạn Tuyết",
        chihuong: "Chị Hương",
    };
    // console.log(guesses[guess_name])
    if (guest_name) {
        tenkhach.textContent = guests[guest_name];
    };
    var language = {
        eng: {
            welcome1: "The Wedding of",
            thaihoangngocmy1: "Thai Hoang & Ngoc My",
            theweddingof: "The Wedding of",
            thaihoangngocmy2: "Thai Hoang & Ngoc My",
            openbutton: "<i class=\"fa-solid fa-envelope-open me-2\"></i>Open Invitation",
        },
        vi: {
            welcome1: "Trân trọng kính mời",
            thaihoangngocmy1: "Thái Hoàng & Ngọc Mỹ",
            theweddingof: "Thiệp mời",
            thaihoangngocmy2: "Lễ Thành Hôn<br>Thái Hoàng & Ngọc Mỹ",
            openbutton: '<i class=\"fa-solid fa-envelope-open me-2\"></i>Mở thiệp',
            where: "10 giờ, 25 tháng 7, 2024<br>Lâm Trạch, Bố Trạch, Quảng Bình",
            scroll1: "Kéo xuống để xem thiệp",
            trantrongkinhmoi2: "Trân trọng kính mời Quý khách tới dự buổi tiệc rượu chung vui cùng gia đình chúng tôi",
            thaihoang: "Nguyễn Thái Hoàng",
            groom1: "Chú rể",
            groomspeech: " Our observable universe has more than 2 trillion galaxies. Our galaxy has more than 100 billion stars. Our star, the sun, has eight planets. Our planet has 195 countries. Our countries has more than 98 million people.  Yet somehow, by some miracle, I met you. The other half of my life.",
            ngocmy: "Nguyễn Thị Ngọc Mỹ",
            bride1: "Cô dâu",
            bridespeech: " Em từng là một cô gái luôn sống mạnh mẽ, độc lập, và không tin vào tình yêu. Sự kiên nhẫn và ấm áp anh giành cho em đã thay đổi em từng ngày. Và giờ đây, em là một cô gái nhìn cuộc đời với nhiều màu sắc và luôn sống hết mình với tình yêu. Cảm ơn anh đã đến bên em.",
            eventschedule1: "Thời gian diễn ra buổi lễ",
            settle: "Ổn định chỗ ngồi",
            startevent: "Bắt đầu buổi lễ",
            dancingtime: "Giao lưu âm nhạc",
            pingooglemap: "<i class=\"fa-solid fa-map-location-dot me-2\" ></i>Pin Google Maps",
            address1: "Sân bóng Thôn 2, Xã Lâm Trạch, Huyện Bố Trạch, Tỉnh Quảng Bình",
            lovegiftmessage: "Mọi yêu thương/quà tặng đến với cô dâu và chú rể xin được gửi về:",
        }
    };

    if (window.location.hash) {
        if (window.location.hash == "#en") {
            const tenkhach = document.getElementById("tenkhach");
            tenkhach.remove();
            const loimoi = document.getElementById("loimoi");
            loimoi.remove();
            welcome1.textContent = language.eng.welcome1;
            thaihoangngocmy1.textContent = language.eng.thaihoangngocmy1;
            theweddingof.textContent = language.eng.theweddingof;
            thaihoangngocmy2.innerHTML = language.eng.thaihoangngocmy2;
            openbutton.innerHTML = language.eng.openbutton;
            } else if (window.location.hash == "#vi") {
            welcome1.textContent = language.vi.welcome1;
            thaihoangngocmy1.textContent = language.vi.thaihoangngocmy1;
            theweddingof.textContent = language.vi.theweddingof;
            thaihoangngocmy2.innerHTML = language.vi.thaihoangngocmy2;
            openbutton.innerHTML = language.vi.openbutton;
            where.innerHTML = language.vi.where;
            scroll1.textContent = language.vi.scroll1;
            trantrongkinhmoi2.textContent = language.vi.trantrongkinhmoi2;
            thaihoang.textContent = language.vi.thaihoang;
            groom1.textContent = language.vi.groom1;
            groomspeech.textContent = language.vi.groomspeech;
            ngocmy.textContent = language.vi.ngocmy;
            bride1.textContent = language.vi.bride1;
            bridespeech.textContent = language.vi.bridespeech;
            eventschedule1.textContent = language.vi.eventschedule1;
            startevent.textContent = language.vi.startevent;
            settle.textContent = language.vi.settle;
            dancingtime.textContent = language.vi.dancingtime;
            pingooglemap.innerHTML = language.vi.pingooglemap;
            address1.innerHTML = language.vi.address1;
            } } 
    else {
            const tenkhach = document.getElementById("tenkhach");
            tenkhach.remove();
            const loimoi = document.getElementById("loimoi");
            loimoi.remove();
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

