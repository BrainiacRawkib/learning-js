function billPay(amount, payee, account) {
    if (amount > account.balance) {
        throw new Error('Insufficient funds');
    }
    account.transfer(payee, amount);
}