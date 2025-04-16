function display(){
    const qa = document.getElementById("mainTitle");
    qa.textContent = "Updated Title";

    const qb1 = document.getElementsByName("username")[0];
    qb1.value = "John Doe";

    const qb2 = document.getElementsByName("gender");
    qb2.forEach(radio => {
        radio.addEventListener("change", () => {
            const gen = document.querySelector('input[name="gender"]:checked').value;
            console.log("selected gender:",gen);
        });
    });
    
    const qc1 = document.getElementsByTagName("p");
    console.log("total <p> elements:", qc1.length);

    const qc2 = document.getElementsByTagName("li");
    Array.from(qc2).forEach(item => {
        console.log("list item:", item.textContent);
    });

    const qd = document.getElementsByClassName("input");
    Array.from(qd).forEach(input => {
        input.style.backgroundColor = "lightblue";
    });

    const qe1 = document.querySelector("p.info");
    qe1.textContent = "This is the first info paragraph";

    const qe2 = document.querySelector('input[name="gender"]');
    qe2.checked = true;

    const qf1 = document.querySelectorAll("p.info");
    qf1.forEach((p, index) => {
        console.log(`info paragraph ${index + 1}:`, p.textContent);
    });

    const qf2 = document.querySelectorAll("input.hobby");
    qf2.forEach(checkbox => {
        checkbox.checked = true;
        console.log("checked hobby:", checkbox.value);
    });
}