let shirts = {
        avaliable: 2,
        inCart: 1,
        discount: 2.01340997,
        price: 522,
        originalPrice: 0
},
    phoneCases = {
        avaliable: Infinity,
        inCart: 200,
        discount: 1.09523597,
        price: 10500.235,
        originalPrice: 0
},
    pencils = {
        avaliable: 2,
        inCart: 2,
        discount: 1.92307693,
        price: 247,
        originalPrice: 0
}

function updateoriginalPrice() {
    shirts.originalPrice = Math.floor(shirts.inCart * shirts.price * shirts.discount);
    phoneCases.originalPrice = Math.floor(phoneCases.inCart * phoneCases.price * phoneCases.discount);
    pencils.originalPrice = Math.floor(pencils.inCart * pencils.price * pencils.discount);
}
updateoriginalPrice();

function updateData() {
    updateoriginalPrice();

    let shirtsTD = {
        ...shirts
    },  phoneCasesTD = {
        ...phoneCases
    }, pencilsTD = {
        ...pencils
    }

    if (document.querySelector('input[data-product="shirts"]')) {
        if (document.querySelector('input[data-product="shirts"]').checked != true) {
            shirtsTD.inCart = 0;
            shirtsTD.price = 0;
            shirtsTD.originalPrice = 0;
        }
    }
    if (document.querySelector('input[data-product="phoneCases"]')) {
        if (document.querySelector('input[data-product="phoneCases"]').checked != true) {
            phoneCasesTD.inCart = 0;
            phoneCasesTD.price = 0;
            phoneCasesTD.originalPrice = 0;
            qs(".order-delivery-date").textContent = "5–6 фев"
        }
    }
    if (document.querySelector('input[data-product="pencils"]')) {
        if (document.querySelector('input[data-product="pencils"]').checked != true) {
            pencilsTD.inCart = 0;
            pencilsTD.price = 0;
            pencilsTD.originalPrice = 0;
        }
    }

    if (shirtsTD.inCart == 0) {
        ddItemShirts.classList.add('hidden');
    } else {
        ddItemShirts.classList.remove('hidden');
        if (shirtsTD.inCart == 1) {
            ddItemShirtsAmount.classList.add('hidden');
        } else {
            ddItemShirtsAmount.classList.remove('hidden');
            ddItemShirtsAmount.textContent = shirtsTD.inCart;
        }
    }

    if (phoneCasesTD.inCart == 0) {
        ddItemPhoneCases[0].classList.add('hidden');
        ddItemPhoneCases[1].classList.add('hidden');
    } else {
        ddItemPhoneCases[0].classList.remove('hidden');
        ddItemPhoneCases[1].classList.remove('hidden');
        if (phoneCasesTD.inCart == 1) {
            ddItemPhoneCasesAmount[0].classList.add('hidden');
        } else {
            if (phoneCasesTD.inCart <= 184) {
                ddItemPhoneCases[1].classList.add('hidden');
                ddItemPhoneCasesAmount[0].textContent = phoneCasesTD.inCart;
                qs(".order-delivery-date").textContent = "5–6 фев"
            } else {
                ddItemPhoneCases[1].classList.remove('hidden');
                ddItemPhoneCasesAmount[1].textContent = phoneCasesTD.inCart - 184;
                qs(".order-delivery-date").textContent = "5–8 фев"
            }
        }
    }
    
    if (pencilsTD.inCart == 0) {
        ddItemPencils.classList.add('hidden');
    } else {
        ddItemPencils.classList.remove('hidden');
        if (pencilsTD.inCart == 1) {
            ddItemPencilsAmount.classList.add('hidden');
        } else {
            ddItemPencilsAmount.classList.remove('hidden');
            ddItemPencilsAmount.textContent = pencilsTD.inCart;
        }
    }

    document.querySelectorAll(".delivery-date").forEach((e) => {
        if (e.getElementsByClassName("delivery-date-item hidden").length == e.getElementsByClassName("delivery-date-item").length) {
            e.classList.add("hidden")
        } else {
            e.classList.remove("hidden")
        }
    })


    qsa('.price-total-number').forEach((e) => {
        e.textContent = new Intl.NumberFormat("ru", {style: "decimal"})
        .format(Math.floor((shirtsTD.inCart * shirtsTD.price)
        + (phoneCasesTD.inCart * phoneCasesTD.price)
        + (pencilsTD.inCart * pencilsTD.price)));
    })

    if (payNowCheckmark.checked) {
        qs('.finalize-order-button').textContent = `Оплатить ${new Intl.NumberFormat("ru", {style: "decimal"})
            .format(Math.floor((shirtsTD.inCart * shirtsTD.price)
            + (phoneCasesTD.inCart * phoneCasesTD.price)
            + (pencilsTD.inCart * pencilsTD.price)))} сом`
    }

    qsa('.price-total-amount').forEach((e) => {
        e.textContent = shirtsTD.inCart + phoneCasesTD.inCart + pencilsTD.inCart;
    })

    qs('.price-total-original').textContent = new Intl.NumberFormat("ru", {style: "decimal"})
    .format(Math.floor(shirtsTD.originalPrice + phoneCasesTD.originalPrice + pencilsTD.originalPrice));

    qs('.price-discount-number').textContent = new Intl.NumberFormat("ru", {style: "decimal"})
    .format(Math.floor((shirtsTD.originalPrice + phoneCasesTD.originalPrice + pencilsTD.originalPrice) - ((shirtsTD.inCart * shirtsTD.price)
    + (phoneCasesTD.inCart * phoneCasesTD.price)
    + (pencilsTD.inCart * pencilsTD.price))));

    qsa('.item-amount-indicator').forEach((e) => {
        let workingObj = checkWhichItem(e);
        e.textContent = workingObj.inCart;
    })
    qsa('.item-left').forEach((e) => {
        let workingObj = checkWhichItem(e);
        e.textContent = `Осталось ${workingObj.avaliable} шт.`
    })
    qsa(".item-amount-decrease").forEach((e) => {
        let workingObj = checkWhichItem(e);
        if (workingObj.inCart == 1) {
            e.style.color = "rgba(0, 0, 0, 0.2)";
        } else {
            e.style.color = "#000";
        }
    })
    qsa(".item-amount-increase").forEach((e) => {
        let workingObj = checkWhichItem(e);
        if (workingObj.avaliable <= 0) {
            e.style.color = "rgba(0, 0, 0, 0.2)";
        } else {
            e.style.color = "#000";
        }
    })
    qsa('.item-price-disc-number').forEach((e) => {
        let workingObj = checkWhichItem(e);
        e.textContent = new Intl.NumberFormat("ru", {style: "decimal"}).format(Math.floor(workingObj.inCart * workingObj.price));
    })
    qsa('.item-price-original').forEach((e) => {
        let workingObj = checkWhichItem(e);        
        e.textContent = `${new Intl.NumberFormat("ru", {style: "decimal"}).format(workingObj.originalPrice)} сом`;
    })
}
updateData();

function checkWhichItem(e) {
    switch (e.dataset.product) {
        case 'shirts':
            return shirts;
        case 'phoneCases':
            return phoneCases;
        case 'pencils':
            return pencils;
    }
}

qsa(".item-amount-decrease").forEach((e => {
    e.addEventListener('click', () => {
        let workingObj = checkWhichItem(e);
        if (workingObj.inCart !== 1) {
            workingObj.inCart--;
            workingObj.avaliable++;
            updateData();
        }
    })
}))

qsa(".item-amount-increase").forEach((e) => {
    e.addEventListener('click', () => {
        let workingObj = checkWhichItem(e);
        if (!workingObj.avaliable <= 0) {
            workingObj.inCart++;
            workingObj.avaliable--;
            updateData();
        }
    })
})

qsa(".item-card-delete").forEach((e) => {
    e.addEventListener('click', () => {
        let workingObj = checkWhichItem(e);
        workingObj.avaliable = 0;
        workingObj.inCart = 0;
        workingObj.discount = 0;
        workingObj.price = 0;
        workingObj.originalPrice = 0;
        updateData();
    })
})

selectItem.forEach((e) => {
    e.addEventListener('change', () => {
            updateData();
        }
    )
})

selectAll.addEventListener('change', () => {
        updateData();
    }
)

qs(".select-card").addEventListener('click', () => {
    selectedCard = qs(".select-card").parentElement.querySelector("input:checked");
    changeableCardIcons.forEach(e => {
        e.src = selectedCard.parentElement.parentElement.querySelector("img").src;
        e.parentElement.getElementsByTagName("p")[0].textContent = selectedCard
            .parentElement.parentElement.querySelector(".modal-content-row-text").textContent;
    })
})

qs(".select-address").addEventListener('click', () => {
    selectedAddress = qs(".select-address").parentElement.querySelector("input:checked");
    qsa(".delivery-changeable").forEach((e) => {
        e.textContent = selectedAddress.parentElement.parentElement.querySelector('.modal-content-row-text').textContent;
    })
    if (selectedAddress.classList.contains("by-courier-checkmark")) {
        qs(".order-delivery-changeable").textContent = "Доставка курьером";
        qs(".delivery-field-changeable").textContent = "Адрес доставки"
    } else {
        qs(".order-delivery-changeable").textContent = "Доставка в пункт выдачи";
        qs(".delivery-field-changeable").textContent = "Пункт выдачи"
    }
})

payNowCheckmark.addEventListener("change", () => {
    if (payNowCheckmark.checked) {
        updateData()
    } else {
        qs(".finalize-order-button").textContent = "Заказать";
        qsa(".payment-when-received").forEach((e) => {
            e.classList.remove("hidden");
        })
    }
});
