function showBoltImage() {
    const input = document.getElementById("boltInput").value.trim().toUpperCase();
    const imageElement = document.getElementById("boltImage");
    const descriptionElement = document.getElementById("boltDescription");

    // 간단한 볼트/너트 데이터베이스 (예시)
    const boltDatabase = {
        "HEX. BOLT M8 X 22L": {
            image: "https://example.com/images/hex_bolt_m8x22l.png",
            description: "육각 볼트, 직경 8mm, 길이 22mm"
        },
        "HEX. NUT M10": {
            image: "https://example.com/images/hex_nut_m10.png",
            description: "육각 너트, 직경 10mm"
        }
        // 추가 자재는 여기에 계속 입력 가능
    };

    // 입력값에 맞는 데이터 찾기
    if (boltDatabase[input]) {
        imageElement.src = boltDatabase[input].image;
        imageElement.style.display = "block";
        descriptionElement.textContent = boltDatabase[input].description;
    } else {
        imageElement.style.display = "none";
        descriptionElement.textContent = "해당 볼트/너트에 대한 이미지를 찾을 수 없습니다.";
    }
}
