$(document).ready(function(){
    // Add guess name
    const urlParams = new URLSearchParams(window.location.search);
    const guest_name = urlParams.get('name');
    var guests = {
        // Bạn Mỹ
        chihuong: "Chị Hương",
        chivy: "Chị Vy",
        phuonglinh: "Phương Linh",
        chitrinh: "Gia đình chị Trinh",
        cauhung: "Gia đình cậu Hưng",
        emhoang: "Em Hoàng",
        emtung: "Em Tùng",
        emhoanganh: "Em Hoàng Anh",
        emhoangphuc: "Em Hoàng Phúc",
        emhaiduc: "Em Hải Đức",
        tuyet: "Bạn Tuyết",
        giang: "Bạn Giang",
        linh: "Bạn Linh",
        mai: "Bạn Mai",
        // Bạn Hoàng
        datbui: "Bạn Đạt Bùi",
        hieupham: "Bạn Hiệu",
        tien: "Bạn Tiến",
        trinh: "Bạn Trình",
        quan: "Bạn Quân",
        phuong: "Bạn Phương",
        phuoc: "Bạn Phước",
        man: "Bạn Mẫn",
        phuc: "Bạn Phúc",
        hieubo: "Bạn Hiếu (Bố)",
        kimanh: "Em Kim Anh",
        hoailinh: "Em Hoài Linh",
        anhsi: "Anh Sỹ",
        soc: "Em Hiền Trang (Sóc)",
        hai: "Em Hải",
        tu: "Bạn Tú",
        anhhieu: "Anh Hiếu",
        // Nhà cậu mự
        caudoan: "Gia đình cậu Đoàn",
        emson: "Em Sơn",
        caudai: "Gia đình cậu Đại",
        dihuong: "Gia đình dì Hương",
        cauhung: "Gia đình cậu Hùng",
        // cấp 3
        cohoa: "Cô Hoa",
        duong: "Bạn Dương",
        quy: "Bạn Quý",
        vinhha: "Bạn Vĩnh Hà",
        ngocanh: "Bạn Ngọc Anh",
        vietdung: "Bạn Việt Dũng",
        anhthu: "Bạn Thư",
        ducdung: "Bạn Đức Dũng",
        hieubu: "Bạn Hiếu",
        quoc: "Bạn Quốc",
        huyentrang: "Bạn Trang",
        thanhhien: "Bạn Hiền",
        hoanghoa: "Bạn Hoàng Hòa",
        linhngoc: "Bạn Linh Ngọc",
        khanhlinh: "Bạn Khánh Linh",
        phuoccap3: "Bạn Phước",
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
            groomspeech: "Anh vốn không phải là người lãng mạn, không quen nói những lời ngọt ngào. Từ khi quen em, em đã dạy rằng, là đàn ông, không cần thiết phải lãng mạn cũng đc, nhưng nhất thiết phải \"sạch sẽ\". Cảm ơn em vì đã đồng hành cùng anh qua những tháng ngày giông bão. Cảm ơn em đã đồng ý lấy anh làm chồng. Cảm ơn em vì tất cả. Yêu em!!!", 
            ngocmy: "Nguyễn Thị Ngọc Mỹ",
            bride1: "Cô dâu",
            bridespeech: " Em từng là một cô gái luôn sống mạnh mẽ, độc lập, và không tin vào tình yêu. Sự kiên nhẫn và ấm áp anh giành cho em đã thay đổi em từng ngày. Và giờ đây, em là một cô gái nhìn cuộc đời với nhiều màu sắc và luôn sống hết mình với tình yêu. Cảm ơn anh đã đến bên em.",
            eventschedule1: "Thời gian diễn ra buổi lễ",
            settle: "Ổn định chỗ ngồi",
            lovestory: "Các bạn có tin vào duyên số không? Còn chúng tớ thì hoàn toàn tin vào điều đó. Khi mà hai đứa chúng tớ sinh ra và lớn lên ở hai miền của đất nước, như hai đường thẳng song song trong suốt 23 năm đầu tiên cuộc đời. Chúng tớ lại may mắn gặp được nhau ở một đất nước xa lạ vào năm 24 tuổi, cùng nhau trưởng thành hơn, rồi kết hôn ở tuổi 28. Không giống như phim \"Sungkyunkwan scandal\", nhưng chúng tớ cũng đã gặp gỡ, yêu thương, và trở thành người thân của nhau ở Sungkyunkwan như vậy đấy ^^.",
            startevent: "Bắt đầu buổi lễ",
            dancingtime: "Tiệc rượu & Giao lưu âm nhạc",
            pingooglemap: "<i class=\"fa-solid fa-map-location-dot me-2\" ></i>Pin Google Maps",
            address1: "Sân bóng Thôn 2, Xã Lâm Trạch, Huyện Bố Trạch, Tỉnh Quảng Bình",
            lovegiftmessage: "Mọi yêu thương/quà tặng đến với cô dâu và chú rể xin được gửi về:",
            commentname: "Tên",
            RSVP: "Tham dự/Không tham dự",
            presence: "Tôi sẽ tới tham dự buổi lễ",
            notpresence: "Tôi không thể tới tham dự buổi lễ",
            yourwishes: "Lời chúc",
            commentmessage: "Hãy để lại những lời chúc của bạn tới cô dâu và chú rể!!!",
            commentbox: "Viết lời chúc của bạn ở đây",
            finalword: "Sự hiện diện của quý khách là lời chúc phúc ý nghĩa nhất với cô dâu và chú rể. <br> Thân ái, <br> Thái Hoàng & Ngọc Mỹ",
            thankyou: "Xin cảm ơn",
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
            lovestory.textContent = language.vi.lovestory;
            eventschedule1.textContent = language.vi.eventschedule1;
            startevent.textContent = language.vi.startevent;
            settle.textContent = language.vi.settle;
            dancingtime.textContent = language.vi.dancingtime;
            pingooglemap.innerHTML = language.vi.pingooglemap;
            address1.innerHTML = language.vi.address1;
            lovegiftmessage.textContent = language.vi.lovegiftmessage;
            commentname.textContent = language.vi.commentname;
            const RSVP = document.getElementById("label-kehadiran");
            RSVP.textContent = language.vi.RSVP;
            presence.textContent = language.vi.presence;
            notpresence.textContent = language.vi.notpresence;
            yourwishes.textContent = language.vi.yourwishes;
            commentmessage.textContent = language.vi.commentmessage;
            const commentbox = document.getElementById("form-comment");
            commentbox.placeholder = language.vi.commentbox;
            finalword.innerHTML = language.vi.finalword;
            thankyou.textContent = language.vi.thankyou;
            } };
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

