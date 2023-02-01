let nameRegex = new RegExp("^[-а-яА-ЯёЁa-zA-Z\s]+$"),
    emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9-]+.[A-Za-z0-9-]+$/),
    phoneRegex = new RegExp(/^\+[0-9] [0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9] [0-9][0-9]/),
    taxIdRegex = new RegExp(/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/);

document.querySelectorAll(".edit-delivery").forEach((e) => {
    e.addEventListener('click', () => {
        if (selectedAddress.classList.contains("by-courier-checkmark")) {
            selfTab.classList.remove("payment-modal-tab-selected");
            courierTab.classList.add("payment-modal-tab-selected");
            selfModal.classList.add("hidden");
            courierModal.classList.remove("hidden");
        } else {
            selfTab.classList.add("payment-modal-tab-selected");
            courierTab.classList.remove("payment-modal-tab-selected");
            selfModal.classList.remove("hidden");
            courierModal.classList.add("hidden");
        }
        qs('.delivery-modal').classList.remove("hidden");
        body.classList.add('lock-scroll');
        headerInner.classList.add('compensate-scrollbar');
        contentWrapper.classList.add('compensate-scrollbar');
    })
})

document.querySelectorAll(".modal-wrapper").forEach((e) => {
    e.addEventListener('click', (ev) => {
        if (ev.target == e) {
            e.classList.add("hidden");
            selectedCard.checked = true;
            selectedAddress.checked = true;
            disableRemoval();
            body.classList.remove('lock-scroll');
            headerInner.classList.remove('compensate-scrollbar');
            contentWrapper.classList.remove('compensate-scrollbar');
        }
    })
})

document.querySelectorAll(".modal-close").forEach((e) => {
    e.addEventListener('click', () => {
        e.parentElement.parentElement.parentElement.classList.add("hidden");
        selectedCard.checked = true;
        selectedAddress.checked = true;
        disableRemoval();
        body.classList.remove('lock-scroll');
        headerInner.classList.remove('compensate-scrollbar');
        contentWrapper.classList.remove('compensate-scrollbar');
    })
});

courierTab.addEventListener('click', () => {
    selfTab.classList.remove("payment-modal-tab-selected");
    courierTab.classList.add("payment-modal-tab-selected");
    selfModal.classList.add("hidden");
    courierModal.classList.remove("hidden");
});

selfTab.addEventListener('click', () => {
    courierTab.classList.remove("payment-modal-tab-selected");
    selfTab.classList.add("payment-modal-tab-selected");
    courierModal.classList.add("hidden");
    selfModal.classList.remove("hidden");
})

selectableAddresses.forEach((e) => {
    e.addEventListener('change', () => {
        disableRemoval();
    })
})

function disableRemoval() {
    selectableAddresses.forEach((el) => {
        if (el.checked) {
            el.parentElement.parentElement.querySelector(".modal-content-row-delete").classList.add("hidden");
        } else {
            el.parentElement.parentElement.querySelector(".modal-content-row-delete").classList.remove("hidden");
        }
    })
}

document.querySelectorAll(".edit-payment").forEach((e) => {
    e.addEventListener('click', () => {
        qs('.payment-modal').classList.remove("hidden");
        body.classList.add('lock-scroll');
        headerInner.classList.add('compensate-scrollbar');
        contentWrapper.classList.add('compensate-scrollbar');
    })
})

qsa(".modal-button").forEach((e) => {
    e.addEventListener('click', () => {
        e.parentElement.parentElement.classList.add("hidden");
        body.classList.remove('lock-scroll');
        headerInner.classList.remove('compensate-scrollbar');
        contentWrapper.classList.remove('compensate-scrollbar');
    })
})

qsa(".hide-items").forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains("hide-items-collapsed")) {
            e.classList.remove("hide-items-collapsed");
        } else {
            e.classList.add("hide-items-collapsed");
        }
        if (e.parentElement.querySelector(".selection-of-all")) {
            if (e.parentElement.querySelector(".selection-of-all").classList.contains("hidden")) {
                e.parentElement.querySelector(".selection-of-all").classList.remove("hidden");
                e.parentElement.querySelector(".avaliable-items-title").classList.add("hidden");
            } else {
                e.parentElement.querySelector(".selection-of-all").classList.add("hidden");
                e.parentElement.querySelector(".avaliable-items-title").classList.remove("hidden");
            }
        }
        e.parentElement.parentElement.querySelectorAll(".item-card").forEach((el) => {
            if (el.classList.contains("hidden")) {
                el.classList.remove("hidden");
            } else {
                el.classList.add("hidden");
            }
            
        })
    })
})

nameInput.addEventListener("focus", () => {
    nameInput.parentElement.querySelector('.recipient-field-label').classList.add("visible");
});

nameInput.addEventListener("blur", () => {
    if (nameInput.value == "") {
        nameInput.parentElement.querySelector('.recipient-field-label').classList.remove("visible");
        nameInput.parentElement.querySelector('.recipient-field-error').classList.remove("visible");
        nameInput.classList.remove("recipient-field-input-error");
    } else {
        if (!nameRegex.test(nameInput.value)) {
            nameInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
            nameInput.classList.add("recipient-field-input-error");
        } else {
            nameInput.parentElement.querySelector(".recipient-field-error").classList.remove("visible");
            nameInput.classList.remove("recipient-field-input-error");
        }
    }
})

surnameInput.addEventListener("focus", () => {
    surnameInput.parentElement.querySelector('.recipient-field-label').classList.add("visible");
});

surnameInput.addEventListener("blur", () => {
    if (surnameInput.value == "") {
        surnameInput.parentElement.querySelector('.recipient-field-label').classList.remove("visible");
        surnameInput.parentElement.querySelector('.recipient-field-error').classList.remove("visible");
        surnameInput.classList.remove("recipient-field-input-error");
    } else {
        if (!nameRegex.test(surnameInput.value)) {
            surnameInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
            surnameInput.classList.add("recipient-field-input-error");
        } else {
            surnameInput.parentElement.querySelector(".recipient-field-error").classList.remove("visible");
            surnameInput.classList.remove("recipient-field-input-error");
        }
    }
})

emailInput.addEventListener("focus", () => {
    emailInput.parentElement.querySelector('.recipient-field-label').classList.add("visible");
});

emailInput.addEventListener("blur", () => {
    if (emailInput.value == "") {
        emailInput.parentElement.querySelector(".recipient-field-error").textContent = "Проверьте адрес электронной почты";
        emailInput.parentElement.querySelector('.recipient-field-label').classList.remove("visible");
        emailInput.parentElement.querySelector('.recipient-field-error').classList.remove("visible");
        emailInput.classList.remove("recipient-field-input-error");
    } else {
        if (!emailRegex.test(emailInput.value)) {
            emailInput.parentElement.querySelector(".recipient-field-error").textContent = "Проверьте адрес электронной почты";
            emailInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
            emailInput.classList.add("recipient-field-input-error");
        } else {
            emailInput.parentElement.querySelector(".recipient-field-error").textContent = "Проверьте адрес электронной почты";
            emailInput.parentElement.querySelector(".recipient-field-error").classList.remove("visible");
            emailInput.classList.remove("recipient-field-input-error");
        }
    }
})

phoneInput.addEventListener("focus", () => {
    phoneInput.parentElement.querySelector('.recipient-field-label').classList.add("visible");
});

phoneInput.addEventListener("blur", () => {
    if (phoneInput.value == "") {
        phoneInput.parentElement.querySelector(".recipient-field-error").textContent = "Формат: +9 999 999 99 99";
        phoneInput.parentElement.querySelector('.recipient-field-label').classList.remove("visible");
        phoneInput.parentElement.querySelector('.recipient-field-error').classList.remove("visible");
        phoneInput.classList.remove("recipient-field-input-error");
    } else {
        if (!phoneRegex.test(phoneInput.value)) {
            phoneInput.parentElement.querySelector(".recipient-field-error").textContent = "Формат: +9 999 999 99 99";
            phoneInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
            phoneInput.classList.add("recipient-field-input-error");
        } else {
            phoneInput.parentElement.querySelector(".recipient-field-error").textContent = "Формат: +9 999 999 99 99";
            phoneInput.parentElement.querySelector(".recipient-field-error").classList.remove("visible");
            phoneInput.classList.remove("recipient-field-input-error");
        }
    }
})

taxIdInput.addEventListener("focus", () => {
    taxIdInput.parentElement.querySelector('.recipient-field-label').classList.add("visible");
});

taxIdInput.addEventListener("blur", () => {
    if (taxIdInput.value == "") {
        taxIdInput.parentElement.querySelector('.recipient-field-label').classList.remove("visible");
        taxIdInput.parentElement.querySelector('.recipient-field-error').classList.remove("visible");
        taxIdInput.classList.remove("recipient-field-input-error");
    } else {
        if (!taxIdRegex.test(taxIdInput.value)) {
            taxIdInput.parentElement.querySelector(".recipient-field-error").classList.remove("recipient-tax-id-reason");
            taxIdInput.parentElement.querySelector(".recipient-field-error").textContent = "Формат: 1234567890";
            taxIdInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
            taxIdInput.classList.add("recipient-field-input-error");
        } else {
            taxIdInput.parentElement.querySelector(".recipient-field-error").classList.add("recipient-tax-id-reason");
            taxIdInput.parentElement.querySelector(".recipient-field-error").textContent = "Для таможенного оформления";
            taxIdInput.classList.remove("recipient-field-input-error");
        }
    }
})

qsa(".modal-content-row-delete").forEach((e) => {
    e.addEventListener('click', () => {
        e.parentElement.remove();
    })
})

qsa(".item-card-delete").forEach((e) => {
    e.addEventListener('click', () => {
        e.parentElement.parentElement.parentElement.parentElement.remove();
        if (qs(".cart-item-amount").textContent == 1) {
            qs(".cart-item-amount").classList.add('hidden');
            qs(".tab-bar-cart-item-amount").classList.add('hidden');
        } else {
            qs(".cart-item-amount").textContent = qs(".cart-item-amount").textContent - 1;
            qs(".tab-bar-cart-item-amount").textContent = qs(".tab-bar-cart-item-amount").textContent - 1;
        }
    })
})

selectAll.addEventListener("change", () => {
    if (selectAll.checked) {
        selectItem.forEach((e) => {
            e.checked = true;
        })
    } else {
        selectItem.forEach((e) => {
            e.checked = false;
        })
    }
})

selectItem.forEach((e) => {
    e.addEventListener("change", () => {
        if (!e.checked) {
            selectAll.checked = false;
        } else {
            let allSelected = true;
            for (let i=0; i<selectItem.length; i++){
                if(!selectItem[i].checked){
                    allSelected = false;
                }
            }
            if (allSelected){
                selectAll.checked = true;
            }
        }
    })
})

qs(".finalize-order-button").addEventListener("click", () => {
    if (nameInput.value == "") {
        nameInput.scrollIntoView();
        nameInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
        nameInput.classList.add("recipient-field-input-error");
    }
    if (surnameInput.value == "") {
        surnameInput.scrollIntoView();
        surnameInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
        surnameInput.classList.add("recipient-field-input-error");
    }
    if (emailInput.value == "") {
        emailInput.scrollIntoView();
        emailInput.parentElement.querySelector(".recipient-field-error").textContent = "Укажите электронную почту";
        emailInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
        emailInput.classList.add("recipient-field-input-error");
    }
    if (phoneInput.value == "") {
        phoneInput.scrollIntoView();
        phoneInput.parentElement.querySelector(".recipient-field-error").textContent = "Укажите номер телефона";
        phoneInput.parentElement.querySelector(".recipient-field-error").classList.add("visible");
        phoneInput.classList.add("recipient-field-input-error");
    }
})