export const creditCardType = (cc) => {

    let uatp = new RegExp('^(?!1800)1{0,14}')
    let amex = new RegExp('^3[47][0-9]{13}$');
    let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
    let cup1 = new RegExp('^62[0-9]{14}[0-9]*$');
    let cup2 = new RegExp('^81[0-9]{14}[0-9]*$');
    let dankort = new RegExp('^(5019|4175|4571){0,12}')
    let mastercard = new RegExp('^5[1-5][0-9]{14}$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
    let instapayment = new RegExp('^63[7-9]{0,13}')
    let disco1 = new RegExp('^6011[0-9]{12}[0-9]*$');
    let disco2 = new RegExp('^62[24568][0-9]{13}[0-9]*$');
    let disco3 = new RegExp('^6[45][0-9]{14}[0-9]*$');

    let diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
    let jcb = new RegExp('^35[0-9]{14}[0-9]*$');

    if (instapayment.test(cc)) {
        return 'instapayment'.toUpperCase();
    }
    if (dankort.test(cc)) {
        return 'dankort'.toUpperCase();
    }
    if (dankort.test(cc)) {
        return 'dankort'.toUpperCase();
    }
    if (uatp.test(cc)) {
        return 'Universal Air Travel Plan'.toUpperCase();
    }
    if (visa.test(cc)) {
        return 'VISA';
    }
    if (amex.test(cc)) {
        return 'AMEX';
    }
    if (mastercard.test(cc) || mastercard2.test(cc)) {
        return 'MASTERCARD';
    }
    if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
        return 'DISCOVER';
    }
    if (diners.test(cc)) {
        return 'DINERS';
    }
    if (jcb.test(cc)) {
        return 'JCB';
    }
    if (cup1.test(cc) || cup2.test(cc)) {
        return 'CHINA_UNION_PAY';
    }
    return undefined;
}
