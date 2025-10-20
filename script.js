function submitForm() {
    const selected = document.querySelector('input[name="rel"]:checked');

    if (!selected) {
        alert("Please select any one option before submitting!\nतुमच आणि माधव च जे नात आहे त्या समोरिल गोल बटन वर टिक करा आणि सबमिट बटन वर क्लिक करा");
        return;
    }

    // Redirect based on value
    if (selected.value === "bhau") {
        window.location.href = "bhau.html";
    } 
    else if (selected.value === "friend") {
        window.location.href = "friend.html";
    } 
    else if (selected.value === "student") {
        window.location.href = "student.html";
    }
    else if (selected.value === "son") {
        window.location.href = "son.html";
    }
    else if (selected.value === "nephew") {
        window.location.href = "nephew.html";
    }
    else if (selected.value === "partner") {
        window.location.href = "life_partner.html";
    }
    else if (selected.value === "daji") {
        window.location.href = "brothers_low.html";
    }
}



