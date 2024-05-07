class AtmAccount:

    available_number = 500
    def __init__(self, holder) -> object:
        self._balance = 100.0 # _ protected attr
        self.__holder = holder # __ private attr
        self.__account_num = AtmAccount.available_number


if __name__ == (__main__):

    account1 = AtmAccount('John Doe')