window.onload = function() {
    var agreeButton = document.getElementById("agree-button");
    var refuseButton = document.getElementById("refuse-button");
    var message = document.getElementById("message");
    var container = document.querySelector(".container");
    var fallingHearts = document.querySelector(".falling-hearts");

    var moveCount = 0;  // Số lần di chuột vào nút Không Đồng Ý
    var clickCount = 0; // Số lần nhấn vào nút Không Đồng Ý

    // Sự kiện khi nhấn nút đồng ý
    agreeButton.addEventListener("click", function() {
        agreeButton.style.display = "none";
        refuseButton.style.display = "none";
        message.classList.remove("hidden");

        createHearts();  // Gọi hàm tạo hiệu ứng trái tim rơi
    });

    // Sự kiện khi nhấn vào nút không đồng ý
    refuseButton.addEventListener("click", function() {
        clickCount++;
        if (clickCount >= 3) {
            refuseButton.style.display = "none";  // Ẩn nút sau 3 lần nhấn
        }
    });

    // Sự kiện khi di chuột vào nút không đồng ý
    refuseButton.addEventListener("mouseover", function() {
        moveCount++;

        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;

        // Đảm bảo nút không chạy ra ngoài màn hình
        var newLeft = Math.floor(Math.random() * (containerWidth - refuseButton.offsetWidth));
        var newTop = Math.floor(Math.random() * (containerHeight - refuseButton.offsetHeight));
        
        refuseButton.style.position = "absolute";
        refuseButton.style.left = newLeft + "px";
        refuseButton.style.top = newTop + "px";

        // Khi đã di chuột đến nút không đồng ý 5 lần thì biến mất
        if (moveCount >= 5) {
            refuseButton.style.display = "none";
        }
    });

    // Hàm tạo các trái tim rơi xuống
    function createHearts() {
        for (var i = 0; i < 30; i++) {  // Tạo 30 trái tim
            var heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";  // Mỗi trái tim rơi trong khoảng 2-5 giây
            fallingHearts.appendChild(heart);

            // Loại bỏ trái tim sau khi rơi xong
            setTimeout(function() {
                heart.remove();
            }, 5000);  // Sau 5 giây sẽ xóa khỏi DOM
        }
    }
};
