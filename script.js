var faqs = document.getElementsByClassName("faq-question-group")
for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", () => {
        faqs[i].classList.toggle("active")
        for (let j = 0; j < faqs.length; j++) {
            if (j!==i) {
                faqs[j].classList.remove("active")
            }
        }
    })
}
