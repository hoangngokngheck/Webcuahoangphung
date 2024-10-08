window.onload = function() {
    var openLetterButton = document.getElementById("open-letter");
    var letterContainer = document.getElementById("letter-container");
    var agreeButton = document.getElementById("agree-button");
    var refuseButton = document.getElementById("refuse-button");
    var message = document.getElementById("message");
    var container = document.querySelector(".container");
    var fallingHearts = document.querySelector(".falling-hearts");

    var moveCount = 0;

    // Sự kiện khi nhấn nút mở thư
    openLetterButton.addEventListener("click", function() {
        letterContainer.style.display = "none"; // Ẩn lá thư
        container.style.display = "block"; // Hiển thị container chính
    });

    // Sự kiện khi nhấn nút đồng ý
    agreeButton.addEventListener("click", function() {
        // Ẩn các nút sau khi nhấn
        agreeButton.style.display = "none";
        refuseButton.style.display = "none";

        // Hiển thị thông điệp
        message.classList.remove("hidden");

        // Gọi hàm tạo hiệu ứng trái tim rơi
        createHearts();
    });

    // Sự kiện khi di chuột vào nút không đồng ý
    refuseButton.addEventListener("mouseover", function() {
        moveCount++;

        // Nút không đồng ý chạy ra chỗ khác
        var newLeft = Math.floor(Math.random() * (container.offsetWidth - refuseButton.offsetWidth)) + "px";
        var newTop = Math.floor(Math.random() * (container.offsetHeight - refuseButton.offsetHeight)) + "px";
        refuseButton.style.position = "absolute";
        refuseButton.style.left = newLeft;
        refuseButton.style.top = newTop;

        // Khi đã di chuột đến nút không đồng ý 3 lần thì biến mất
        if (moveCount >= 3) {
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
