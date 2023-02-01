function qs(el) {
    return document.querySelector(el);
}

function qsa(el) {
    return document.querySelectorAll(el);
}

let body = qs('body'),
    headerInner = qs('.header-inner'),
    contentWrapper = qs('.content-wrapper'),
    courierTab = qs(".payment-modal-courier-tab"),
    selfTab = qs(".payment-modal-self-tab"),
    courierModal = qs(".modal-content-courier"),
    selfModal = qs(".modal-content-self"),
    payNowCheckmark = qs(".pay-now-checkmark"),   
    selectAll = qs('.select-all-checkmark'),
    selectItem = qsa('.select-item-checkmark'),
    selectedCard = qs("input[name=card]:checked"),
    selectableAddresses = qsa("input[name=address]"),
    selectedAddress = qs("input[name=address]:checked"),
    ddItemShirts = qs('.delivery-date-item[data-product="shirts"]'),
    ddItemShirtsAmount = qs('.delivery-item-amount[data-product="shirts"]'),
    ddItemPhoneCases = qsa('.delivery-date-item[data-product="phoneCases"]'),
    ddItemPhoneCasesAmount = qsa('.delivery-item-amount[data-product="phoneCases"]'),
    ddItemPencils = qs('.delivery-date-item[data-product="pencils"]'),
    ddItemPencilsAmount = qs('.delivery-item-amount[data-product="pencils"]'),
    changeableCardIcons = qsa(".card-icon-changeable");

let nameInput = qs("#name"),
    surnameInput = qs("#surname"),
    emailInput = qs("#email"),
    phoneInput = qs("#phone"),
    taxIdInput = qs("#tax-id");